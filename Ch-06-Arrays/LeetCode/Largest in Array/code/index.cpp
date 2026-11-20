#include <vector>
#include <stdexcept>
using namespace std;

int largest(const vector<int>& values) {
    if (values.empty()) throw invalid_argument("array must not be empty");
    int best = values[0];
    for (int value : values) if (value > best) best = value;
    return best;
}
