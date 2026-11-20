#include <vector>
using namespace std;

bool searchSortedMatrix(const vector<vector<int>>& matrix, int target) {
    if (matrix.empty() || matrix[0].empty()) return false;
    int row = 0, col = static_cast<int>(matrix[0].size()) - 1;
    while (row < static_cast<int>(matrix.size()) && col >= 0) {
        if (matrix[row][col] == target) return true;
        if (matrix[row][col] > target) --col;
        else ++row;
    }
    return false;
}
