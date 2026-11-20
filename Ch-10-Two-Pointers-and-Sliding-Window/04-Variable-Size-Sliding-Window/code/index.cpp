#include <stdexcept>
#include <vector>
#include <algorithm>
using namespace std;

// Requires non-negative values. Returns 0 when no qualifying window exists.
int minSubarrayLength(int target, const vector<int>& values) {
    if (target <= 0) throw invalid_argument("target must be positive");
    int left = 0, best = static_cast<int>(values.size()) + 1;
    long long sum = 0;
    for (int right = 0; right < static_cast<int>(values.size()); ++right) {
        if (values[right] < 0) throw invalid_argument("non-negative values required");
        sum += values[right];
        while (sum >= target) { best = min(best, right - left + 1); sum -= values[left++]; }
    }
    return best == static_cast<int>(values.size()) + 1 ? 0 : best;
}
