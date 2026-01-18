const TRANSITION_MAP: Array<[RegExp, string]> = [
  [/\bMoreover,\s*/gi, "Also, "],
  [/\bFurthermore,\s*/gi, "Also, "],
  [/\bIn conclusion,\s*/gi, "In short, "],
  [/\bIn conclusion\./gi, "In short."],
  [/\bIn conclusion\b/gi, "In short"]
];

export function normalizeContent(input: string) {
  let output = input.replace(/\s*[\u2014\u2013]\s*/g, " - ");

  TRANSITION_MAP.forEach(([pattern, replacement]) => {
    output = output.replace(pattern, replacement);
  });

  return output;
}
