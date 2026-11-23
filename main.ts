// Warning Label for Humans — one-line entry.
// Reads the warning label from entry.txt (next to this file) and writes it
// to /output/entry.txt, the path the make.fun grader checks.
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const label = readFileSync(join(here, "entry.txt"), "utf8").trim();

if (label.length < 1 || label.length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${label.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, label, "utf8");

// Read back what we just wrote so a silent write failure cannot pass.
const written = readFileSync(outPath, "utf8");
if (written !== label) {
  throw new Error("output verification failed: written entry differs");
}
