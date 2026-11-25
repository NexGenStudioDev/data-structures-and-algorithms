
#include <iostream>
#include <vector>
using namespace std;

// Definition for singly-linked list
struct ListNode {
    int val;
    ListNode* next;

    ListNode(int x) {
        val = x;
        next = nullptr;
    }
};

class Solution {
public:
    void reorderList(ListNode* head) {
        if (!head || !head->next)
            return;

        vector<ListNode*> stack;
        ListNode* current = head;

        while (current) {
            stack.push_back(current);
            current = current->next;
        }

        ListNode* P1 = head;
        ListNode* P2 = head->next;

        int len = stack.size();
        int mid = len / 2;

        for (int i = 0; i < mid; i++) {
            ListNode* temp = P2;
            ListNode* node = stack.back();
            stack.pop_back();

            P1->next = node;
            P1->next->next = temp;

            P1 = temp;
            P2 = temp->next;
        }

        P1->next = nullptr;
    }
};

// Print linked list
void printList(ListNode* head) {
    while (head) {
        cout << head->val;

        if (head->next)
            cout << " -> ";

        head = head->next;
    }

    cout << " -> NULL" << endl;
}

int main() {
    // Create linked list: 1 -> 2 -> 3 -> 4 -> 5
    ListNode* head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(3);
    head->next->next->next = new ListNode(4);
    head->next->next->next->next = new ListNode(5);

    cout << "Original List: ";
    printList(head);

    Solution sol;
    sol.reorderList(head);

    cout << "Reordered List: ";
    printList(head);

    // Free allocated memory
    while (head) {
        ListNode* temp = head;
        head = head->next;
        delete temp;
    }

    return 0;
}
