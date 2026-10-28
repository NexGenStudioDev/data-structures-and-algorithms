# Interval Algorithms & Line Sweep Technique

> **Handling overlapping ranges, calendar events, meeting room scheduling, and coordinate compression.**

---

## 🎯 Core Patterns
1. **Merge Overlapping Intervals:** Sort intervals by `start` time. Iterate and expand current end if `next.start <= curr.end`.
2. **Meeting Rooms II (Minimum Rooms Required):** Separate starts and ends, sort both, and use two pointers (or Sweep Line: `+1` at start, `-1` at end).
