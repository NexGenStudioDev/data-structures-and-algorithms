#include <cstddef>
#include <vector>
using namespace std;

// NestedInteger is supplied by LeetCode. Define the template after that type is visible.
template <typename NestedInteger>
class NestedIterator {
    struct Frame { vector<NestedInteger> items; size_t index = 0; };
    vector<Frame> stack;
    int nextValue = 0;
    bool ready = false;
public:
    explicit NestedIterator(const vector<NestedInteger>& nestedList) : stack{{nestedList, 0}} {}
    bool hasNext() {
        if (ready) return true;
        while (!stack.empty()) {
            Frame& frame = stack.back();
            if (frame.index == frame.items.size()) { stack.pop_back(); continue; }
            NestedInteger item = frame.items[frame.index++];
            if (item.isInteger()) { nextValue = item.getInteger(); ready = true; return true; }
            stack.push_back({item.getList(), 0});
        }
        return false;
    }
    int next() { if (!hasNext()) return -1; ready = false; return nextValue; }
};
