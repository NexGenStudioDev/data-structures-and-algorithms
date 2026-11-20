#include <vector>
using namespace std;

void buildNToOne(int n, vector<int>& result) {
    if (n <= 0) return;
    result.push_back(n);
    buildNToOne(n - 1, result);
}

vector<int> nToOne(int n) {
    vector<int> result;
    buildNToOne(n, result);
    return result;
}
