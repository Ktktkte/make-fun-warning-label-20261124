// Warning Label for Humans v2 — entry writer (plain JavaScript, Node 22).
// Reads entry.txt sitting next to this script and writes it byte-for-byte
// to $MAKEFUN_OUTPUT_DIR/entry.txt. No dependencies, no network.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const MAX_CHARS = 160;

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// Resolve entry.txt relative to this script file, never process.cwd(),
// so the program works no matter where the grader invokes it from.
const scriptDir = dirname(fileURLToPath(import.meta.url));
const entryPath = join(scriptDir, "entry.txt");
// Validate the entry text against the kit gate: non-empty, a single line,
// within the 160-char cap. Throws with a specific message on any failure.
function validateEntry(text) {
  if (text.trim().length === 0) {
    throw new Error("entry.txt is empty or whitespace only");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry.txt must be a single line");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(`entry.txt is ${text.length} chars, over the 160-char cap`);
  }
}

const text = readFileSync(entryPath, "utf8");
validateEntry(text);

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
