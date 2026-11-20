#include <vector>
#include <utility>
using namespace std;

void siftDown(vector<int>& heap, int index, int size) {
    while (true) {
        int smallest = index, left = 2 * index + 1, right = left + 1;
        if (left < size && heap[left] < heap[smallest]) smallest = left;
        if (right < size && heap[right] < heap[smallest]) smallest = right;
        if (smallest == index) break;
        swap(heap[index], heap[smallest]); index = smallest;
    }
}

void buildMinHeap(vector<int>& values) {
    for (int i = static_cast<int>(values.size()) / 2 - 1; i >= 0; --i) siftDown(values, i, static_cast<int>(values.size()));
}
