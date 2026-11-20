# Mini Project: Browser History

Build a small browser-history model with a doubly linked list. Each page node has `prev`, `value`, and `next`. Store the current page so `visit`, `back`, and `forward` can update links.

## Requirements

- `visit(url)` adds a new page after the current page and removes any forward history.
- `back()` moves one node left when possible.
- `forward()` moves one node right when possible.
- Empty history and boundary moves should not crash.
- Include a method that returns the current page.

Start with a drawing of links after each operation. Test: visit `a`, visit `b`, back, visit `c`; the forward page `b` should no longer be reachable. The project is an exercise brief; implement it in the language you are learning.
