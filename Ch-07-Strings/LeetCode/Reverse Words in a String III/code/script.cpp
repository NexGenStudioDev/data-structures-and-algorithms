#include <algorithm>
#include <string>
using namespace std;

class Solution {
public:
    string reverseWords(string s) {
        size_t start = 0;
        while (start < s.size()) {
            size_t end = s.find(' ', start);
            if (end == string::npos) end = s.size();
            reverse(s.begin() + start, s.begin() + end);
            start = end + 1;
        }
        return s;
    }
};
