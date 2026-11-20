# Collision Handling: Separate Chaining

A collision happens when different keys map to the same bucket. With separate chaining, each bucket stores a small collection of key/value pairs. Lookup hashes the key, then checks only that bucket.

With a balanced distribution, lookup is average `O(1)` for a well-sized table; if many keys collide, it can become `O(n)`. The examples intentionally use a small fixed table so collisions are easy to see. Production maps also resize and use language-specific hash rules.
