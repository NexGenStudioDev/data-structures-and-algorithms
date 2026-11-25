/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {

    let stack = []


    let current = head
    while (current) {

        stack.push(current)

        current = current.next

    }



    let P1 = head
    let P2 = head.next

    let len = stack.length
    let mid = Math.floor(len / 2)


    for (let i = 0; i < mid; i++) {

        let temp = P2;
        let node = stack.pop();

        P1.next = node;
        P1.next.next = temp;

        P1 = temp;
        P2 = temp.next;
    }

    P1.next = null;


};