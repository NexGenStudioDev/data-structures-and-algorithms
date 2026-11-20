#include <vector>
#include <utility>
using namespace std;

// Preconditions: values is a permutation of [1, n].
void cyclicSort(vector<int>& values) {
    int i = 0;
    while (i < static_cast<int>(values.size())) {
        int target = values[i] - 1;
        if (target != i) swap(values[i], values[target]);
        else ++i;
    }
}
