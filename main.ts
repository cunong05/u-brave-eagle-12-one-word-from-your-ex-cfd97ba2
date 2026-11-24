import { mkdirSync, writeFileSync } from "node:fs";

const word = "unblocked";

// Guard: exactly one word, 1–30 characters, no whitespace.
if (word.length < 1 || word.length > 30) {
  throw new Error(`word must be 1-30 characters, got ${word.length}`);
}
if (/\s/.test(word)) {
  throw new Error("word must contain no whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word);
