#include <vector>
using namespace std;

struct Node { int value; Node* next; explicit Node(int v) : value(v), next(this) {} };

class CircularLinkedList {
    Node* tail = nullptr;
public:
    ~CircularLinkedList() { if (!tail) return; Node* head = tail->next; tail->next = nullptr; while (head) { Node* next = head->next; delete head; head = next; } }
    void append(int value) {
        Node* node = new Node(value);
        if (!tail) tail = node;
        else { node->next = tail->next; tail->next = node; tail = node; }
    }
    vector<int> values() const {
        vector<int> out; if (!tail) return out;
        Node* head = tail->next; Node* cur = head;
        do { out.push_back(cur->value); cur = cur->next; } while (cur != head);
        return out;
    }
};
