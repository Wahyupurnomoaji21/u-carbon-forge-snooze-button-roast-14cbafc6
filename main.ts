import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Snooze Button Roast — one line roasting an alarm clock that rings
// at 6 AM on a Saturday morning. The alarm is the overeager coworker
// who clocks in on his day off; the punchline lands on the last words.
const entry =
  "My alarm rang at 6 AM on a Saturday like a coworker clocking in on his day off — turns out the only one with no life here is the clock.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  join(dirname(fileURLToPath(import.meta.url)), "..", "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
console.log(`wrote entry.txt (${entry.length} chars)`);
