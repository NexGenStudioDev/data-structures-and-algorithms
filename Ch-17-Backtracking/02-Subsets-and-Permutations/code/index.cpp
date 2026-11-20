#include <algorithm>
#include <vector>
using namespace std;

void permuteAt(int index, vector<int>& values, vector<vector<int>>& result) {
    if (index == static_cast<int>(values.size())) { result.push_back(values); return; }
    for (int i = index; i < static_cast<int>(values.size()); ++i) {
        swap(values[index], values[i]);
        permuteAt(index + 1, values, result);
        swap(values[index], values[i]);
    }
}

vector<vector<int>> permutations(vector<int> values) {
    vector<vector<int>> result;
    permuteAt(0, values, result);
    return result;
}
