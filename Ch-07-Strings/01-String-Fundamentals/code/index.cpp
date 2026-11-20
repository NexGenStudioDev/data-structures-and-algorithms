#include <string>
#include <unordered_map>
#include <cctype>
using namespace std;

bool isAsciiPalindrome(const string& text) {
    int left = 0, right = static_cast<int>(text.size()) - 1;
    while (left < right) {
        while (left < right && !isalnum(static_cast<unsigned char>(text[left]))) ++left;
        while (left < right && !isalnum(static_cast<unsigned char>(text[right]))) --right;
        if (tolower(static_cast<unsigned char>(text[left])) != tolower(static_cast<unsigned char>(text[right]))) return false;
        ++left; --right;
    }
    return true;
}

unordered_map<char, int> characterCounts(const string& text) {
    unordered_map<char, int> counts;
    for (char ch : text) ++counts[ch];
    return counts;
}
