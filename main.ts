import { mkdirSync, writeFileSync } from "node:fs";

// LINE must stay byte-for-byte: single word, no trailing newline.
const LINE = "Deadline";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
