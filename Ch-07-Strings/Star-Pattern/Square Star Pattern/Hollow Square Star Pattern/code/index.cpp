#include <iostream>
using namespace std;

void printHollowSquare(int n) {
    for (int row = 0; row < n; ++row) {
        for (int col = 0; col < n; ++col)
            cout << ((row == 0 || row == n - 1 || col == 0 || col == n - 1) ? '*' : ' ');
        cout << '\n';
    }
}
