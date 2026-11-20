#include <deque>
#include <vector>
using namespace std;

vector<int> slidingWindowMaximum(const vector<int>& values, int k) {
    if (k <= 0 || k > static_cast<int>(values.size())) return {};
    deque<int> candidates; vector<int> answer;
    for (int i = 0; i < static_cast<int>(values.size()); ++i) {
        while (!candidates.empty() && candidates.front() <= i - k) candidates.pop_front();
        while (!candidates.empty() && values[candidates.back()] <= values[i]) candidates.pop_back();
        candidates.push_back(i);
        if (i >= k - 1) answer.push_back(values[candidates.front()]);
    }
    return answer;
}
