#include <vector>
using namespace std;

void mergeRanges(vector<int>& values, vector<int>& temp, int left, int middle, int right) {
    int i = left, j = middle, out = left;
    while (i < middle && j < right) temp[out++] = values[i] <= values[j] ? values[i++] : values[j++];
    while (i < middle) temp[out++] = values[i++];
    while (j < right) temp[out++] = values[j++];
    for (int k = left; k < right; ++k) values[k] = temp[k];
}

void mergeSortRange(vector<int>& values, vector<int>& temp, int left, int right) {
    if (right - left < 2) return;
    int middle = left + (right - left) / 2;
    mergeSortRange(values, temp, left, middle);
    mergeSortRange(values, temp, middle, right);
    mergeRanges(values, temp, left, middle, right);
}

void mergeSort(vector<int>& values) { vector<int> temp(values.size()); mergeSortRange(values, temp, 0, values.size()); }
