// Entry: the single word "unblocked" — one word from your ex.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const word = "unblocked";

// Guard: exactly one word, 1–30 characters, no whitespace.
if (word.length < 1 || word.length > 30) {
  throw new Error(`word must be 1-30 characters, got ${word.length}`);
}
if (/\s/.test(word)) {
  throw new Error("word must contain no whitespace");
}
if (word !== word.trim()) {
  throw new Error("word must not have leading or trailing whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word);

// Read-back check: the written entry must be byte-identical to the word.
if (readFileSync("/output/entry.txt", "utf8") !== word) {
  throw new Error("read-back mismatch: entry.txt differs from word");
}
