#include <stdexcept>
using namespace std;

int productOfDigits(long long n) {
    if (n < 0) throw invalid_argument("n must be non-negative");
    if (n < 10) return static_cast<int>(n);
    return static_cast<int>(n % 10) * productOfDigits(n / 10);
}
