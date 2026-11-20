#include <list>
#include <string>
#include <utility>
#include <vector>
using namespace std;

class ChainedMap {
    vector<list<pair<string, int>>> buckets;
    size_t indexFor(const string& key) const { size_t h = 0; for (unsigned char c : key) h = (h * 31 + c) % buckets.size(); return h; }
public:
    explicit ChainedMap(size_t capacity = 8) : buckets(capacity ? capacity : 1) {}
    void put(const string& key, int value) {
        auto& bucket = buckets[indexFor(key)];
        for (auto& entry : bucket) if (entry.first == key) { entry.second = value; return; }
        bucket.emplace_back(key, value);
    }
    bool get(const string& key, int& value) const {
        const auto& bucket = buckets[indexFor(key)];
        for (const auto& entry : bucket) if (entry.first == key) { value = entry.second; return true; }
        return false;
    }
};
