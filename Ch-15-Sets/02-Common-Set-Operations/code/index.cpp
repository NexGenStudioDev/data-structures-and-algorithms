#include <unordered_set>
#include <vector>
using namespace std;

vector<int> intersectionOf(const vector<int>& a, const vector<int>& b) {
    unordered_set<int> values(a.begin(), a.end()), emitted; vector<int> result;
    for (int x : b) if (values.count(x) && emitted.insert(x).second) result.push_back(x);
    return result;
}

vector<int> unionOf(const vector<int>& a, const vector<int>& b) {
    unordered_set<int> seen; vector<int> result;
    for (int x : a) if (seen.insert(x).second) result.push_back(x);
    for (int x : b) if (seen.insert(x).second) result.push_back(x);
    return result;
}
