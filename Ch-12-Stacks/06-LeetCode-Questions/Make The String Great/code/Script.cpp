#include <cctype>
#include <string>
using namespace std;

class Solution {
public:
    string makeGood(const string& s) {
        string stack;
        for (char ch : s) {
            if (!stack.empty() && stack.back() != ch && tolower(static_cast<unsigned char>(stack.back())) == tolower(static_cast<unsigned char>(ch))) stack.pop_back();
            else stack.push_back(ch);
        }
        return stack;
    }
};
