#include <vector>
using namespace std;

class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int write = 0;
        for (int value : nums) if (value != val) nums[write++] = value;
        return write;
    }
};
