#include <stdexcept>
#include <vector>
using namespace std;

template <typename T>
class Queue {
    vector<T> items;
    size_t head = 0;
public:
    void enqueue(const T& value) { items.push_back(value); }
    T dequeue() {
        if (empty()) throw underflow_error("dequeue from empty queue");
        T value = items[head++];
        if (head > 32 && head * 2 >= items.size()) { items.erase(items.begin(), items.begin() + head); head = 0; }
        return value;
    }
    const T& front() const { if (empty()) throw underflow_error("front of empty queue"); return items[head]; }
    bool empty() const { return head == items.size(); }
    size_t size() const { return items.size() - head; }
};
