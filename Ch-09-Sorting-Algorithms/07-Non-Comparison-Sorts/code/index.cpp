#include <algorithm>
#include <stdexcept>
#include <vector>
using namespace std;

vector<int> countingSort(const vector<int>& values) {
    if (values.empty()) return {};
    if (*min_element(values.begin(), values.end()) < 0) throw invalid_argument("non-negative integers required");
    int maximum = *max_element(values.begin(), values.end());
    vector<int> counts(maximum + 1, 0), result;
    for (int value : values) ++counts[value];
    result.reserve(values.size());
    for (int value = 0; value <= maximum; ++value)
        while (counts[value]-- > 0) result.push_back(value);
    return result;
}
