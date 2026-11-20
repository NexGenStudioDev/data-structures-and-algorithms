#include <stdexcept>
#include <deque>
using namespace std;

template <typename T>
class Deque {
    deque<T> data;
public:
    void pushFront(const T& value) { data.push_front(value); }
    void pushBack(const T& value) { data.push_back(value); }
    T popFront() { if (data.empty()) throw underflow_error("empty deque"); T v = data.front(); data.pop_front(); return v; }
    T popBack() { if (data.empty()) throw underflow_error("empty deque"); T v = data.back(); data.pop_back(); return v; }
    const T& front() const { if (data.empty()) throw underflow_error("empty deque"); return data.front(); }
    const T& back() const { if (data.empty()) throw underflow_error("empty deque"); return data.back(); }
    bool empty() const { return data.empty(); }
};
