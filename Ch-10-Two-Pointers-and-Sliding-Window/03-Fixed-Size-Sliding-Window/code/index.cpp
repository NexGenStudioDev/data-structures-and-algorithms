#include <stdexcept>
#include <vector>
using namespace std;

long long maxWindowSum(const vector<int>& values, int k) {
    if (k <= 0 || k > static_cast<int>(values.size())) throw invalid_argument("invalid window size");
    long long sum = 0;
    for (int i = 0; i < k; ++i) sum += values[i];
    long long best = sum;
    for (int right = k; right < static_cast<int>(values.size()); ++right) {
        sum += values[right] - values[right - k];
        if (sum > best) best = sum;
    }
    return best;
}
