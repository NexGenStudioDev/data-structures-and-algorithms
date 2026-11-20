#include <queue>
using namespace std;

// Push-costly version: push O(n), pop/top O(1).
class MyStackPushCostly {
    queue<int> mainQueue, helper;
public:
    void push(int value) { helper.push(value); while (!mainQueue.empty()) { helper.push(mainQueue.front()); mainQueue.pop(); } swap(mainQueue, helper); }
    int pop() { if (mainQueue.empty()) return -1; int value = mainQueue.front(); mainQueue.pop(); return value; }
    int top() const { return mainQueue.empty() ? -1 : mainQueue.front(); }
    bool empty() const { return mainQueue.empty(); }
};

// Pop-costly version: push O(1), pop/top O(n).
class MyStackPopCostly {
    queue<int> items;
public:
    void push(int value) { items.push(value); }
    int pop() { if (items.empty()) return -1; for (size_t i = 1; i < items.size(); ++i) { items.push(items.front()); items.pop(); } int value = items.front(); items.pop(); return value; }
    int top() { if (items.empty()) return -1; int value = pop(); push(value); return value; }
    bool empty() const { return items.empty(); }
};
