import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One emoji, nothing else: the sleeper train — the journey itself is the dream.
const entry = "🚂";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
