#include <unordered_set>
#include <vector>
using namespace std;

vector<int> uniqueValues(const vector<int>& values) {
    unordered_set<int> seen; vector<int> result;
    for (int value : values) if (seen.insert(value).second) result.push_back(value);
    return result;
}
