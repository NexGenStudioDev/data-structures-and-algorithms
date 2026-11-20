#include <vector>
using namespace std;

bool hasPairSum(const vector<int>& sortedValues, int target) {
    int left = 0, right = static_cast<int>(sortedValues.size()) - 1;
    while (left < right) {
        long long sum = static_cast<long long>(sortedValues[left]) + sortedValues[right];
        if (sum == target) return true;
        if (sum < target) ++left; else --right;
    }
    return false;
}
