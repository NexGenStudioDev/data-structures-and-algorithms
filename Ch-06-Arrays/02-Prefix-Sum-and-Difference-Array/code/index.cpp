#include <vector>
#include <stdexcept>
using namespace std;

vector<long long> buildPrefix(const vector<int>& values) {
    vector<long long> prefix(values.size() + 1, 0);
    for (size_t i = 0; i < values.size(); ++i) prefix[i + 1] = prefix[i] + values[i];
    return prefix;
}

long long rangeSum(const vector<long long>& prefix, size_t left, size_t right) {
    // Inclusive [left, right]; prefix is zero-prefixed.
    if (left > right || right + 1 >= prefix.size()) throw out_of_range("invalid range");
    return prefix[right + 1] - prefix[left];
}

vector<int> applyRangeAdds(int n, const vector<vector<int>>& updates) {
    vector<int> diff(n + 1, 0);
    for (const auto& update : updates) {
        int left = update[0], right = update[1], amount = update[2];
        if (left < 0 || right < left || right >= n) throw out_of_range("invalid update");
        diff[left] += amount;
        if (right + 1 < n) diff[right + 1] -= amount;
    }
    vector<int> values(n);
    int running = 0;
    for (int i = 0; i < n; ++i) values[i] = running += diff[i];
    return values;
}
