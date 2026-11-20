#include <utility>
#include <vector>
using namespace std;

void selectionSort(vector<int>& values) {
    for (int start = 0; start < static_cast<int>(values.size()); ++start) {
        int minimum = start;
        for (int i = start + 1; i < static_cast<int>(values.size()); ++i) if (values[i] < values[minimum]) minimum = i;
        swap(values[start], values[minimum]);
    }
}
