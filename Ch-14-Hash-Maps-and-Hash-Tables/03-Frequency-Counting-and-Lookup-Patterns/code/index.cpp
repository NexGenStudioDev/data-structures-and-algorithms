#include <string>
#include <unordered_map>
using namespace std;

unordered_map<char, int> frequencyCount(const string& text) {
    unordered_map<char, int> counts;
    for (char ch : text) ++counts[ch];
    return counts;
}
