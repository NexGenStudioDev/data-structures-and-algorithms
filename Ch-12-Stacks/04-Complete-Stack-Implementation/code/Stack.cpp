#include <stdexcept>
#include <vector>
using namespace std;

template <typename T>
class Stack {
    vector<T> items;
public:
    void push(const T& value) { items.push_back(value); }
    T pop() { if (items.empty()) throw underflow_error("pop from empty stack"); T value = items.back(); items.pop_back(); return value; }
    const T& peek() const { if (items.empty()) throw underflow_error("peek at empty stack"); return items.back(); }
    bool empty() const { return items.empty(); }
    size_t size() const { return items.size(); }
};
