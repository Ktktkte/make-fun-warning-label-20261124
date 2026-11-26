# BRIEF — Warning Label for Humans v2

## The v2 line (99 chars, single line)

> WARNING: Human insists it read the instructions. It did not. It will blame the instructions anyway.

## Why it beats v1

V1 — "WARNING: Human may say 'I'm fine' while visibly not fine. Refer to manual;
manual also says 'I'm fine'." — is a solid recursion joke, but the laugh is spread
across the whole line (setup + callback) and the "manual" callback is a second idea
bolted onto the first.

V2 is a different human malfunction entirely: the human who insists it read the
instructions, did not, and then blames the instructions. Three short beats, one idea,
and the turn lands in the last few words — "blame the instructions anyway" — exactly
where the judge's brief wants it (criterion 2: the turn arrives in the last few words
rather than smeared across the line).

## Judge fit (kit criteria, in order)

1. **On-subject warning label, funny first** — opens "WARNING:", reads like a real
   printed label, and the joke is the whole line.
2. **One-read laugh, punchline at the end** — "It did not" sets the trap mid-line;
   "will blame the instructions anyway" springs it at the very end.
3. **Recognition, not random absurdity** — everyone has met (or been) the person who
   skips the manual and then blames the manual. Universally true about humans.
4. **Real label wording and rhythm** — deadpan declarative sentences, no slang, no
   second joke, no filler. Sounds like something stamped on the box.
5. **Inside 160 chars, uses the line** — 99 characters, one idea, no repeated joke,
   no padding.

## Program

`main.ts` is plain JavaScript (no TypeScript annotations), no dependencies, no network.
It reads `entry.txt` next to the script (resolved via `fileURLToPath` + `dirname`,
never `process.cwd()`), validates it (non-empty, single line, ≤ 160 chars), and writes
it byte-for-byte to `$MAKEFUN_OUTPUT_DIR/entry.txt` (`mkdirSync` recursive only, throws
if `MAKEFUN_OUTPUT_DIR` is unset). Verified with the mandatory `/tmp`-cwd test
(exit 0, byte-identical across two runs).
