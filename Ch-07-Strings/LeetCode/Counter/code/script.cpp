#include <functional>
using namespace std;

function<int()> createCounter(int n) {
    return [current = n]() mutable { return current++; };
}
