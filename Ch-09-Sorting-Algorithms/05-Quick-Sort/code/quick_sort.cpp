#include <utility>
#include <vector>
using namespace std;

int partition(vector<int>& values, int low, int high) {
    int pivot = values[high], boundary = low;
    for (int current = low; current < high; ++current)
        if (values[current] <= pivot) swap(values[boundary++], values[current]);
    swap(values[boundary], values[high]);
    return boundary;
}

void quickSort(vector<int>& values, int low, int high) {
    if (low >= high) return;
    int pivot = partition(values, low, high);
    quickSort(values, low, pivot - 1);
    quickSort(values, pivot + 1, high);
}

void quickSort(vector<int>& values) { if (!values.empty()) quickSort(values, 0, static_cast<int>(values.size()) - 1); }
