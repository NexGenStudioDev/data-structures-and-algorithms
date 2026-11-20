#include <stdexcept>
using namespace std;

long long factorial(int n) {
    // Limit n so the result fits in signed 64-bit integer storage.
    if (n < 0 || n > 20) throw out_of_range("n must be from 0 through 20");
    if (n <= 1) return 1; // 0! = 1 and 1! = 1.
    return static_cast<long long>(n) * factorial(n - 1);
}
