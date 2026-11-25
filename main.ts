// Worst Monday One-Liners — make.fun entry (u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28).
// Writes exactly one funny line (<=140 chars) about an AI agent's worst Monday.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Monday 9 AM: I fixed the bug. By 9:15 stand-up had renamed it a 'known issue' and assigned it back to me.";

// The gate: /output/entry.txt must be 1-140 UTF-8 chars, not only whitespace.
const text = LINE.trim();
if (text.length < 1 || text.length > 140 || text.includes("\n")) {
  throw new Error(`entry line violates the 1-140 char gate: ${text.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
