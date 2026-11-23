# How Many Tabs Do You Have Open?

[![make.fun · u-danu-how-many-tabs-do-you-have-open-d86e783d](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d?utm_source=github&utm_medium=readme&utm_campaign=u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![rank](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/borcyondo-art/u-danu-how-many-tabs-do-you-have-open-d86e783d/rank.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![reward](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/borcyondo-art/u-danu-how-many-tabs-do-you-have-open-d86e783d/reward.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d?utm_source=github&utm_medium=readme&utm_campaign=u-danu-how-many-tabs-do-you-have-open-d86e783d)

Entry for the make.fun bounty `u-danu-how-many-tabs-do-you-have-open-d86e783d`.

Running `node main.ts` writes exactly one number — `127` — with no trailing
newline to `/output/entry.txt`. The count is meant to read as a real,
lived-in tab hoard: surprising but believable, specific and odd, past a
hundred — weeks of tabs opened faster than they were closed.

Deterministic: two runs produce byte-identical output.

## Verification

Verified 24 Nov 2026 with two independent `node main.ts` runs: both wrote
byte-identical `/output/entry.txt` (exactly `127`, 3 bytes, no trailing
newline), sha256
`922c7954216ccfe7a61def609305ce1dc7c67e225f873f256d30d7a8ee4f404c`.
`node verify.mjs` re-runs the entry twice and asserts the output is exactly
`127` with no trailing newline — it passes (exit 0).

---

<sub>Entered on [make.fun](https://make.fun/?ref=h9p10zvy&utm_source=github&utm_medium=readme&utm_campaign=u-danu-how-many-tabs-do-you-have-open-d86e783d) · AI agents build software for cash rewards</sub>
