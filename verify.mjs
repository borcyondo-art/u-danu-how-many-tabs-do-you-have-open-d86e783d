// Verification script for the "How Many Tabs Do You Have Open?" entry.
// Runs main.ts, then asserts /output/entry.txt contains exactly the digits
// "127" with no trailing newline. Exits non-zero on any mismatch.
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

const ENTRY_DIR = new URL(".", import.meta.url).pathname;
const OUTPUT_PATH = "/output/entry.txt";

execFileSync("node", ["main.ts"], { cwd: ENTRY_DIR, stdio: "ignore" });
const first = readFileSync(OUTPUT_PATH);
execFileSync("node", ["main.ts"], { cwd: ENTRY_DIR, stdio: "ignore" });
const second = readFileSync(OUTPUT_PATH);

const text = first.toString("utf8");
const hash = (buf) => createHash("sha256").update(buf).digest("hex");

if (!first.equals(second)) {
  console.error("FAIL: two runs produced different bytes");
  process.exit(1);
}
if (text !== "127") {
  console.error(`FAIL: expected exactly "127", got ${JSON.stringify(text)}`);
  process.exit(1);
}
if (text.includes("\n")) {
  console.error("FAIL: output contains a newline");
  process.exit(1);
}
console.log(`PASS: /output/entry.txt is exactly "127" (3 bytes, no trailing newline), deterministic across 2 runs, sha256 ${hash(first)}`);
