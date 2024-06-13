/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let p = l1,
    q = l2,
    current = dummyHead;
  let carry = 0;

  while (p !== null || q !== null) {
    let x = p !== null ? p.val : 0;
    let y = q !== null ? q.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (p !== null) p = p.next;
    if (q !== null) q = q.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
};

// Helper function to create a linked list from an array
function arrayToList(arr) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummyHead.next;
}

// Helper function to print a linked list
function listToArray(list) {
  let arr = [];
  while (list !== null) {
    arr.push(list.val);
    list = list.next;
  }
  return arr;
}

// Example usage:
let l1 = arrayToList([2, 4, 3]);
let l2 = arrayToList([5, 6, 4]);
let result = addTwoNumbers(l1, l2);
console.log(listToArray(result)); // Output: [7, 0, 8]
