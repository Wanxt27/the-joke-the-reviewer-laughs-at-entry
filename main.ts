import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My AI agent wrote a function so elegant, so clean, so well-documented \u2014 it solved a problem we never had, in a file we were about to delete.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
