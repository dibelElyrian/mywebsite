import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const args = new Map();
for (let i = 2; i < process.argv.length; i += 1) {
  const key = process.argv[i];
  const value = process.argv[i + 1];
  if (!key?.startsWith("--") || value === undefined) {
    continue;
  }
  args.set(key.slice(2), value);
  i += 0;
}

const csvPath = args.get("csv");
if (!csvPath) {
  console.error("Missing --csv path to batch file.");
  process.exit(1);
}

const itemIds = splitList(args.get("item-ids"));
const offerLinks = splitList(args.get("offer-links"));
const productLinks = splitList(args.get("product-links"));

if (itemIds.length === 0 && offerLinks.length === 0 && productLinks.length === 0) {
  console.error("Provide --item-ids, --offer-links, or --product-links.");
  process.exit(1);
}

const usedSlug = args.get("slug") ?? "";
const usedTitle = args.get("title") ?? "";
const usedDate = args.get("date") ?? "";

const absolutePath = resolve(csvPath);
const raw = readFileSync(absolutePath, "utf8");
const rows = parseCsv(raw);
if (rows.length === 0) {
  console.error("CSV appears empty.");
  process.exit(1);
}

const header = rows[0];
const columnIndex = indexColumns(header, [
  "Item Id",
  "Offer Link",
  "Product Link",
  "Used In Blog",
  "Used Slug",
  "Used Title",
  "Used Date"
]);

ensureColumn(header, columnIndex, "Used In Blog");
ensureColumn(header, columnIndex, "Used Slug");
ensureColumn(header, columnIndex, "Used Title");
ensureColumn(header, columnIndex, "Used Date");

let matched = 0;
for (let i = 1; i < rows.length; i += 1) {
  const row = rows[i];
  if (row.length === 0) {
    continue;
  }

  const matchItemId = matchByItemId(row, columnIndex, itemIds);
  const matchOffer = matchByLink(row, columnIndex, "Offer Link", offerLinks);
  const matchProduct = matchByLink(row, columnIndex, "Product Link", productLinks);

  if (matchItemId || matchOffer || matchProduct) {
    setValue(row, columnIndex, "Used In Blog", "yes");
    if (usedSlug) setValue(row, columnIndex, "Used Slug", usedSlug);
    if (usedTitle) setValue(row, columnIndex, "Used Title", usedTitle);
    if (usedDate) setValue(row, columnIndex, "Used Date", usedDate);
    matched += 1;
  }
}

if (matched === 0) {
  console.error("No rows matched the provided identifiers.");
  process.exit(1);
}

const output = stringifyCsv(rows);
writeFileSync(absolutePath, output, "utf8");
console.log(`Updated ${matched} row(s) in ${absolutePath}.`);

function splitList(value) {
  if (!value) return [];
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        field += '"';
        i += 1;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
      continue;
    }

    if (char === ",") {
      row.push(field);
      field = "";
      continue;
    }

    if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
      continue;
    }

    if (char === "\r") {
      if (next === "\n") {
        continue;
      }
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
      continue;
    }

    field += char;
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows;
}

function stringifyCsv(rows) {
  return rows.map((row) => row.map(escapeCsvField).join(",")).join("\n") + "\n";
}

function escapeCsvField(value) {
  const text = value ?? "";
  if (/[",\n\r]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function indexColumns(header, names) {
  const index = {};
  for (const name of names) {
    const idx = header.findIndex((cell) => cell.trim() === name);
    index[name] = idx;
  }
  return index;
}

function ensureColumn(header, index, name) {
  if (index[name] >= 0) return;
  index[name] = header.length;
  header.push(name);
}

function matchByItemId(row, index, itemIds) {
  const col = index["Item Id"];
  if (col === undefined || col < 0) return false;
  const value = row[col]?.trim();
  return !!value && itemIds.includes(value);
}

function matchByLink(row, index, columnName, links) {
  const col = index[columnName];
  if (col === undefined || col < 0) return false;
  const value = row[col]?.trim();
  return !!value && links.includes(value);
}

function setValue(row, index, columnName, value) {
  const col = index[columnName];
  if (col === undefined || col < 0) return;
  while (row.length <= col) {
    row.push("");
  }
  row[col] = value;
}
