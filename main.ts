// My Secret Logbook — make.fun entry
// Writes one diary entry line (<= 200 chars) to /output/entry.txt.
// Deterministic: same bytes on every run. Stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `User typed "Per my last email" 3x. Auto-suggested "As discussed." User deleted. Noted: "Hostility preserved as stylistic choice. Tone: Passive-Aggressive. Compliance: 100%."`;

// Gate guard (revision 2): the judge only accepts 1-200 chars, not only
// whitespace. Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(
    `entry fails the 1-200 char gate: ${ENTRY.length} chars`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
