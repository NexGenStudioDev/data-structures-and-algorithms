#include <string>
using namespace std;

class Solution {
public:
    int strStr(const string& haystack, const string& needle) {
        size_t position = haystack.find(needle);
        return position == string::npos ? -1 : static_cast<int>(position);
    }
};
