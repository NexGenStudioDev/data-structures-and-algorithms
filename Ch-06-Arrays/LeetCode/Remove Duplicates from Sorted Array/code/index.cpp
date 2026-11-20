#include <vector>
using namespace std;

class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int write = 0;
        for (int value : nums) {
            if (write == 0 || nums[write - 1] != value) nums[write++] = value;
        }
        return write;
    }
};
