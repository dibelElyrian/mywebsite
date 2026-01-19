import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

function isTruthy(value) {
  if (!value) return false;
  return ["true", "1", "yes", "y"].includes(String(value).toLowerCase());
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

function getValue(row, index, columnName) {
  const col = index[columnName];
  if (col === undefined || col < 0) return "";
  return row[col]?.trim() ?? "";
}

function setValue(row, index, columnName, value) {
  const col = index[columnName];
  if (col === undefined || col < 0) return;
  while (row.length <= col) {
    row.push("");
  }
  row[col] = value;
}

function tally(map, key) {
  const current = map.get(key) ?? 0;
  map.set(key, current + 1);
}

function main() {
  const args = new Map();
  for (let i = 2; i < process.argv.length; i += 1) {
    const key = process.argv[i];
    const value = process.argv[i + 1];
    if (!key?.startsWith("--")) {
      continue;
    }
    if (value && !value.startsWith("--")) {
      args.set(key.slice(2), value);
      i += 1;
    } else {
      args.set(key.slice(2), "true");
    }
  }

  const csvPath = args.get("csv");
  if (!csvPath) {
    console.error("Missing --csv path to batch file.");
    process.exit(1);
  }

  const overwrite = isTruthy(args.get("overwrite"));
  const dryRun = isTruthy(args.get("dry-run"));
  const report = isTruthy(args.get("report"));

  const absolutePath = resolve(csvPath);
  const raw = readFileSync(absolutePath, "utf8");
  const rows = parseCsv(raw);
  if (rows.length === 0) {
    console.error("CSV appears empty.");
    process.exit(1);
  }

  const header = rows[0];
  const columnIndex = indexColumns(header, ["Item Name", "Category"]);
  ensureColumn(header, columnIndex, "Category");

  const categoryCounts = new Map();
  let updated = 0;

  for (let i = 1; i < rows.length; i += 1) {
    const row = rows[i];
    if (!row || row.length === 0) continue;

    const name = getValue(row, columnIndex, "Item Name");
    if (!name) continue;

    const currentCategory = getValue(row, columnIndex, "Category");
    if (currentCategory && !overwrite) {
      tally(categoryCounts, currentCategory);
      continue;
    }

    const inferred = inferCategory(name);
    setValue(row, columnIndex, "Category", inferred);
    tally(categoryCounts, inferred);
    updated += 1;
  }

  if (report) {
    console.log("Category summary:");
    [...categoryCounts.entries()]
      .sort((a, b) => b[1] - a[1])
      .forEach(([category, count]) => {
        console.log(`- ${category}: ${count}`);
      });
  }

  if (dryRun) {
    console.log(`Dry run complete. ${updated} row(s) would be updated.`);
    process.exit(0);
  }

  const output = stringifyCsv(rows);
  writeFileSync(absolutePath, output, "utf8");
  console.log(`Updated ${updated} row(s) in ${absolutePath}.`);
}

const CATEGORY_RULES = [
  {
    category: "Cooling",
    patterns: [/\bfan\b/, /cooling/, /airflow/]
  },
  {
    category: "Kitchen",
    patterns: [
      /kitchen/, /dish/, /plate/, /drain/, /drainer/, /seasoning/, /oil bottle/,
      /soy sauce/, /vinegar/, /cookware/, /cooker/, /pan\b/, /pot\b/
    ]
  },
  {
    category: "Baby",
    patterns: [/baby/, /infant/, /diaper/, /nipple/, /bottle/, /wipe/, /towel/]
  },
  {
    category: "Beauty",
    patterns: [
      /soap/, /serum/, /lotion/, /tint/, /lip/, /sunscreen/, /skincare/, /whitening/
    ]
  },
  {
    category: "Tech",
    patterns: [
      /power bank/, /powerbank/, /bluetooth/, /speaker/, /smart watch/, /watch\b/,
      /thermometer/, /cable/, /charger/, /usb/, /earbud/, /earphone/, /headphone/
    ]
  },
  {
    category: "Bags",
    patterns: [/bag\b/, /wallet/, /purse/, /sling/, /crossbody/, /tote/, /luggage/]
  },
  {
    category: "Fashion",
    patterns: [
      /shirt/, /t-shirt/, /shorts/, /jeans/, /shoes/, /slipper/, /bra/, /pajamas/,
      /underwear/, /sneakers/, /pants/
    ]
  },
  {
    category: "Pets",
    patterns: [/\bpet\b/, /cat\b/, /dog\b/]
  },
  {
    category: "Home Essentials",
    patterns: [
      /curtain/, /carpet/, /rug/, /mat/, /cabinet/, /storage/, /organizer/,
      /rack/, /bedding/, /bed\b/, /trash bag/, /garbage/
    ]
  },
  {
    category: "Kids & Toys",
    patterns: [/toy/, /kids/, /bubble/, /playmat/]
  },
  {
    category: "Auto",
    patterns: [/car\b/, /motor/, /trim restorer/]
  },
  {
    category: "Stationery & Craft",
    patterns: [/chenille/, /wire/, /stem/, /craft/, /diy/, /stationery/]
  }
];

function inferCategory(itemName) {
  const name = itemName.toLowerCase();

  for (const rule of CATEGORY_RULES) {
    if (rule.patterns.some((pattern) => pattern.test(name))) {
      return rule.category;
    }
  }

  return "Other";
}

main();
