#include <cstddef>
#include <string>
using namespace std;

// Simple teaching hash for bytes; this is not for cryptography or production use.
size_t hashString(const string& key, size_t bucketCount) {
    if (bucketCount == 0) return 0;
    size_t hash = 0;
    for (unsigned char ch : key) hash = (hash * 31 + ch) % bucketCount;
    return hash;
}
