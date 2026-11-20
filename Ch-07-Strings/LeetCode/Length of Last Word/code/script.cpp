#include <cctype>
#include <string>
using namespace std;

class Solution {
public:
    int lengthOfLastWord(const string& s) {
        int i = static_cast<int>(s.size()) - 1;
        while (i >= 0 && isspace(static_cast<unsigned char>(s[i]))) --i;
        int length = 0;
        while (i >= 0 && !isspace(static_cast<unsigned char>(s[i]))) { ++length; --i; }
        return length;
    }
};
