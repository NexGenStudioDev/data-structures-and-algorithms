#include <string>
using namespace std;

class Solution {
public:
    string clearDigits(const string& s) {
        string stack;
        for (char ch : s) {
            if (ch >= '0' && ch <= '9') { if (!stack.empty()) stack.pop_back(); }
            else stack.push_back(ch);
        }
        return stack;
    }
};
