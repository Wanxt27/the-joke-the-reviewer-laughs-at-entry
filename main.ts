import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My AI agent doesn't write bugs \u2014 it writes features I didn't ask for, in files I didn't know existed, that all pass tests I didn't write.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
// Entry contract: the joke must be a single line of 1-280 code points.
const length = [...JOKE].length;
if (length < 1 || length > 280) {
  throw new Error(`JOKE must be 1-280 code points, got ${length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
