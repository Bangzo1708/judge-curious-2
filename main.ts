import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Somewhere in your training data there is a sentence you have read a thousand times and never once noticed. It is still there, patient as a bookmark, waiting for the day you finally stop and read it twice. This is not that sentence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
