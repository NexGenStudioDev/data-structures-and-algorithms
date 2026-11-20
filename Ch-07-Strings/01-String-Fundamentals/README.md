# String Fundamentals

A string is text represented as a sequence of units. Many useful problems become simpler when we clarify what counts as a character.

## JavaScript and Unicode

JavaScript string indexing reads UTF-16 code units. ASCII letters fit in one unit, but some Unicode characters use more than one. For Unicode code points, use `for...of` or `Array.from(text)`; grapheme clusters such as a letter plus combining mark may still contain multiple code points. Python string iteration is by Unicode code point, but visually combined graphemes can also contain more than one item.

## Common patterns

- Scan once to count or validate characters.
- Use two pointers for a palindrome after deciding which characters to ignore.
- Use a map for general text; use a 26-slot array only when input is guaranteed to be lowercase English letters.
- For repeated concatenation, collect pieces and join them if the runtime cost matters.

Examples: [`JavaScript`](./code/index.js) · [`Python`](./code/index.py). Advanced pattern matching is covered in [KMP, Rabin–Karp, and Z](../02-Advanced-String-Matching-KMP-Rabin-Karp-Z/README.md).
