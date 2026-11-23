// SPDX-License-Identifier: MIT
// How Many Tabs Do You Have Open? — entry: one number, digits only.
//
// The count is 127: surprising but believable, specific and odd, past a
// hundred — weeks of tabs opened faster than they were closed. The output
// must be digits only, with no trailing newline and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const TAB_COUNT = "127";
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, TAB_COUNT, "utf8");
