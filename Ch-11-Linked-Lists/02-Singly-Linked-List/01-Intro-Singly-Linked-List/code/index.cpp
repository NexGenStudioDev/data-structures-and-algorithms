#include <stdexcept>

struct Node { int value; Node* next = nullptr; explicit Node(int v) : value(v) {} };

class SinglyLinkedList {
    Node* head = nullptr;
    Node* tail = nullptr;
public:
    SinglyLinkedList() = default;
    SinglyLinkedList(const SinglyLinkedList&) = delete;
    SinglyLinkedList& operator=(const SinglyLinkedList&) = delete;
    ~SinglyLinkedList() { while (head) { Node* next = head->next; delete head; head = next; } }
    void prepend(int value) { Node* node = new Node(value); node->next = head; head = node; if (!tail) tail = node; }
    void append(int value) { Node* node = new Node(value); if (tail) tail->next = node; else head = node; tail = node; }
    bool contains(int value) const { for (Node* cur = head; cur; cur = cur->next) if (cur->value == value) return true; return false; }
    bool removeFirst(int value) {
        Node* previous = nullptr; Node* current = head;
        while (current && current->value != value) { previous = current; current = current->next; }
        if (!current) return false;
        if (previous) previous->next = current->next; else head = current->next;
        if (tail == current) tail = previous;
        delete current; return true;
    }
};
