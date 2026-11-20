#include <vector>
using namespace std;

void buildOneToN(int n, vector<int>& result) {
    if (n <= 0) return;
    buildOneToN(n - 1, result);
    result.push_back(n);
}

vector<int> oneToN(int n) {
    vector<int> result;
    buildOneToN(n, result);
    return result;
}
