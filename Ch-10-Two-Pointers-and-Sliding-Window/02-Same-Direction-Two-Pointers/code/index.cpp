#include <vector>
using namespace std;

void moveZeroes(vector<int>& values) {
    int write = 0;
    for (int value : values) if (value != 0) values[write++] = value;
    while (write < static_cast<int>(values.size())) values[write++] = 0;
}
