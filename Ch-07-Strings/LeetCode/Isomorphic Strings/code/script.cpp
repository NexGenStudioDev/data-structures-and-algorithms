#include <string>
#include <unordered_map>
using namespace std;

class Solution {
public:
    bool isIsomorphic(const string& s, const string& t) {
        if (s.size() != t.size()) return false;
        unordered_map<char, char> forward, backward;
        for (size_t i = 0; i < s.size(); ++i) {
            if ((forward.count(s[i]) && forward[s[i]] != t[i]) ||
                (backward.count(t[i]) && backward[t[i]] != s[i])) return false;
            forward[s[i]] = t[i];
            backward[t[i]] = s[i];
        }
        return true;
    }
};
