#include <queue>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> topKLargest(const vector<int>& values, int k) {
    if (k <= 0) return {};
    priority_queue<int, vector<int>, greater<int>> minHeap;
    for (int value : values) { minHeap.push(value); if (static_cast<int>(minHeap.size()) > k) minHeap.pop(); }
    vector<int> result;
    while (!minHeap.empty()) { result.push_back(minHeap.top()); minHeap.pop(); }
    sort(result.rbegin(), result.rend());
    return result;
}
