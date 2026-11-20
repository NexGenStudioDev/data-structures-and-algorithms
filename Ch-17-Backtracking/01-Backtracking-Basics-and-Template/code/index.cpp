#include <vector>
using namespace std;

void collectSubsets(int index, const vector<int>& values, vector<int>& path, vector<vector<int>>& result) {
    if (index == static_cast<int>(values.size())) { result.push_back(path); return; }
    collectSubsets(index + 1, values, path, result); // Skip this value.
    path.push_back(values[index]);
    collectSubsets(index + 1, values, path, result); // Choose this value.
    path.pop_back(); // Undo the choice before returning.
}

vector<vector<int>> allSubsets(const vector<int>& values) {
    vector<vector<int>> result; vector<int> path;
    collectSubsets(0, values, path, result);
    return result;
}
