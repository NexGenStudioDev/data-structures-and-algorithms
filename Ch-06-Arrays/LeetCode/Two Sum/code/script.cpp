#include <unordered_map>
#include <vector>
#include <climits>
using namespace std;

class Solution {
public:
    vector<int> twoSum(const vector<int>& nums, int target) {
        unordered_map<int, int> firstIndex;
        for (int i = 0; i < static_cast<int>(nums.size()); ++i) {
            long long complement = static_cast<long long>(target) - nums[i];
            if (complement >= INT_MIN && complement <= INT_MAX && firstIndex.count(static_cast<int>(complement)))
                return {firstIndex[static_cast<int>(complement)], i};
            firstIndex[nums[i]] = i;
        }
        return {};
    }
};
