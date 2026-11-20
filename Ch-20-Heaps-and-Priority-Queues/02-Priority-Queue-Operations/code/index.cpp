#include <queue>
#include <vector>
#include <functional>
#include <stdexcept>
using namespace std;

class PriorityQueueMin {
    priority_queue<int, vector<int>, greater<int>> items;
public:
    void push(int value) { items.push(value); }
    int top() const { if (items.empty()) throw underflow_error("top of empty priority queue"); return items.top(); }
    int pop() { if (items.empty()) throw underflow_error("pop from empty priority queue"); int value = items.top(); items.pop(); return value; }
    bool empty() const { return items.empty(); }
    size_t size() const { return items.size(); }
};
