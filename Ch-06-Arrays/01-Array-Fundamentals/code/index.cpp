#include <iostream>
#include <vector>
using namespace std;

int sumArray(const vector<int>& values) {
    int total = 0;
    for (int value : values) total += value;
    return total;
}

int main() {
    vector<int> values{2, 4, 6};
    cout << values[1] << " " << sumArray(values) << '\n';
}
