#include <stack>
using namespace std;

class MyQueue {
    stack<int> incoming, outgoing;
    void transfer() { if (outgoing.empty()) while (!incoming.empty()) { outgoing.push(incoming.top()); incoming.pop(); } }
public:
    void push(int value) { incoming.push(value); }
    int pop() { transfer(); int value = outgoing.top(); outgoing.pop(); return value; }
    int peek() { transfer(); return outgoing.top(); }
    bool empty() const { return incoming.empty() && outgoing.empty(); }
};
