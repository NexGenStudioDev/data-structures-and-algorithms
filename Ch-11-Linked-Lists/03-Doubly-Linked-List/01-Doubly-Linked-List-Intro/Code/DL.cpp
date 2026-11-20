#include <vector>
using namespace std;

struct Node { int value; Node* prev = nullptr; Node* next = nullptr; explicit Node(int v) : value(v) {} };

class DoublyLinkedList {
    Node* head = nullptr; Node* tail = nullptr;
public:
    DoublyLinkedList() = default;
    DoublyLinkedList(const DoublyLinkedList&) = delete;
    DoublyLinkedList& operator=(const DoublyLinkedList&) = delete;
    ~DoublyLinkedList() { while (head) { Node* next = head->next; delete head; head = next; } }
    Node* append(int value) { Node* node = new Node(value); node->prev = tail; if (tail) tail->next = node; else head = node; tail = node; return node; }
    void remove(Node* node) {
        if (!node) return;
        if (node->prev) node->prev->next = node->next; else head = node->next;
        if (node->next) node->next->prev = node->prev; else tail = node->prev;
        delete node;
    }
    vector<int> values() const { vector<int> out; for (Node* cur = head; cur; cur = cur->next) out.push_back(cur->value); return out; }
};
