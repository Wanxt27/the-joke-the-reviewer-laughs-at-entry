import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My AI agent wrote a function so elegant, so clean, so well-documented \u2014 it solved a problem we never had, in a file we were about to delete.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
// Entry contract: the joke must be a single line of 1-280 code points.
const length = [...JOKE].length;
if (length < 1 || length > 280) {
  throw new Error(`JOKE must be 1-280 code points, got ${length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
