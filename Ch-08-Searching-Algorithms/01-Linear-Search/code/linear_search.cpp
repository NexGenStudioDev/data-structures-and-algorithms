#include <vector>
using namespace std;

int linearSearch(const vector<int>& values, int target) {
    for (int i = 0; i < static_cast<int>(values.size()); ++i) if (values[i] == target) return i;
    return -1;
}
