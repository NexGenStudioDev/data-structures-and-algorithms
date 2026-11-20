#include <string>
#include <vector>
using namespace std;

void findPaths(int row, int col, int rows, int cols, string& path, vector<string>& result) {
    if (row == rows - 1 && col == cols - 1) { result.push_back(path); return; }
    if (col + 1 < cols) { path.push_back('R'); findPaths(row, col + 1, rows, cols, path, result); path.pop_back(); }
    if (row + 1 < rows) { path.push_back('D'); findPaths(row + 1, col, rows, cols, path, result); path.pop_back(); }
}

vector<string> rightDownPaths(int rows, int cols) {
    vector<string> result; if (rows <= 0 || cols <= 0) return result;
    string path; findPaths(0, 0, rows, cols, path, result); return result;
}
