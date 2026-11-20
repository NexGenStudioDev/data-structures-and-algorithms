#include <string>
#include <vector>
using namespace std;

class Solution {
    vector<string> board;
    vector<bool> columns, diagonalDown, diagonalUp;
    vector<vector<string>> answers;
    void place(int row, int n) {
        if (row == n) { answers.push_back(board); return; }
        for (int col = 0; col < n; ++col) {
            int down = row - col + n - 1, up = row + col;
            if (columns[col] || diagonalDown[down] || diagonalUp[up]) continue;
            board[row][col] = 'Q'; columns[col] = diagonalDown[down] = diagonalUp[up] = true;
            place(row + 1, n);
            board[row][col] = '.'; columns[col] = diagonalDown[down] = diagonalUp[up] = false;
        }
    }
public:
    vector<vector<string>> solveNQueens(int n) {
        answers.clear(); if (n < 0) return answers;
        if (n == 0) return {{}};
        board.assign(n, string(n, '.')); columns.assign(n, false);
        diagonalDown.assign(2 * n - 1, false); diagonalUp.assign(2 * n - 1, false);
        place(0, n); return answers;
    }
};
