#include <cctype>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    string capitalizeTitle(string title) {
        size_t start = 0;
        while (start < title.size()) {
            size_t end = title.find(' ', start);
            if (end == string::npos) end = title.size();
            for (size_t i = start; i < end; ++i) title[i] = static_cast<char>(tolower(static_cast<unsigned char>(title[i])));
            if (end - start > 2) title[start] = static_cast<char>(toupper(static_cast<unsigned char>(title[start])));
            start = end + 1;
        }
        return title;
    }
};
