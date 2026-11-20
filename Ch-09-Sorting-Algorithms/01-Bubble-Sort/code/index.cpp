#include <utility>
#include <vector>
using namespace std;

void bubbleSort(vector<int>& values) {
    for (int end = static_cast<int>(values.size()) - 1; end > 0; --end) {
        bool changed = false;
        for (int i = 0; i < end; ++i) if (values[i] > values[i + 1]) { swap(values[i], values[i + 1]); changed = true; }
        if (!changed) break;
    }
}
