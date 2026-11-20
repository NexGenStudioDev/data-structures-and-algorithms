#include <stdexcept>
using namespace std;

// Teaching version: direct recursion is exponential, about O(2^n).
long long fibonacci(int n) {
    if (n < 0 || n > 92) throw out_of_range("n must be from 0 through 92");
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
