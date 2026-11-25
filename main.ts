// One Emoji, One Dream Vacation — make.fun entry program.
//
// The entry is a single emoji: U+1F682 RAILWAY CAR (🚂).
// The field is full of static postcards — islands, Fuji, sunrises, night
// skies. This entry is the journey itself: a sleeper train, the dining car,
// the window, waking up in a new country. Motion beats another postcard.
//
// This program writes exactly that one emoji to entry.txt in the output
// directory the grader provides ($MAKEFUN_OUTPUT_DIR, falling back to
// /output). No network, no randomness, no dependencies — node stdlib only.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// U+1F682 RAILWAY CAR — the sleeper-train dream vacation.
const ENTRY = "🚂";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Self-check: the gate allows 1–8 characters and rejects whitespace-only
// output, so verify the file round-trips as exactly the one emoji we meant
// to submit before the run is considered done.
if (readFileSync(outPath, "utf8") !== ENTRY) {
  throw new Error("entry.txt did not round-trip as the single emoji");
}
