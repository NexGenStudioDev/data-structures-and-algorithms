#include <numeric>
#include <algorithm>
#include <stdexcept>
#include <vector>
using namespace std;

long long minShipCapacity(const vector<int>& weights, int days) {
    if (weights.empty() || days < 1) throw invalid_argument("non-empty weights and positive days required");
    long long low = *max_element(weights.begin(), weights.end());
    long long high = accumulate(weights.begin(), weights.end(), 0LL);
    while (low < high) {
        long long capacity = low + (high - low) / 2;
        int usedDays = 1;
        long long load = 0;
        for (int weight : weights) {
            if (load + weight > capacity) { ++usedDays; load = 0; }
            load += weight;
        }
        if (usedDays <= days) high = capacity;
        else low = capacity + 1;
    }
    return low;
}
