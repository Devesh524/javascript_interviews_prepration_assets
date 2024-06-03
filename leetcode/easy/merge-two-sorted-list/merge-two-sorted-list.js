// 21. Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.
//
//   Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
//
//   Return the head of the merged linked list.
//
//
//
//   Example 1:
//
//
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:
//
// Input: list1 = [], list2 = []
// Output: []
// Example 3:
//
// Input: list1 = [], list2 = [0]
// Output: [0]
//
//
// Constraints:
//
//   The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// list1 and list2 are non-iterable
const mergeTwoSortedLinkLists = (list1, list2) => {
  let dummy = new ListNode(-1);
  let head = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      head.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      head.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    head = head.next;
  }
  head.next = list1 || list2;
  return dummy.next;
};

const result = mergeTwoSortedLinkLists([1, 2, 4], [1, 3, 4]);
console.log(result); // [1,1,2,3,4,4]
