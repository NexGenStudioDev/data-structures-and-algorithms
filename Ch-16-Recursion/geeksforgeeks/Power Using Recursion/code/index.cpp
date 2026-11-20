#include <stdexcept>
using namespace std;

// The result must fit in long long. This uses exponentiation by squaring.
long long power(long long base, int exponent) {
    if (exponent < 0) throw invalid_argument("exponent must be non-negative");
    if (exponent == 0) return 1;
    long long half = power(base, exponent / 2);
    long long square = half * half;
    return exponent % 2 == 0 ? square : square * base;
}
