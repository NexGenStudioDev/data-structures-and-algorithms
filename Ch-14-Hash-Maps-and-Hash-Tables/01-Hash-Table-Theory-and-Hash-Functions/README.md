# Hash Table Basics

A hash table turns a key into a bucket number so a program can find stored values quickly on average. A hash function should be deterministic and spread typical keys across buckets. Hashing a string of length `L` itself generally costs `O(L)`.

Different keys can land in the same bucket; that is a collision, not an error. A table must handle collisions and may resize as it fills. Average `O(1)` lookup is an expected model under suitable hashing and load assumptions, not a worst-case guarantee. See the simple string-hash examples in `code/`.
