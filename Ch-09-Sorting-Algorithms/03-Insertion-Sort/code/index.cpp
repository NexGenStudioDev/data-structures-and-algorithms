#include <vector>
using namespace std;

void insertionSort(vector<int>& values) {
    for (int i = 1; i < static_cast<int>(values.size()); ++i) {
        int key = values[i], j = i - 1;
        while (j >= 0 && values[j] > key) { values[j + 1] = values[j]; --j; }
        values[j + 1] = key;
    }
}
