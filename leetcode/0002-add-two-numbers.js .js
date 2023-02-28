/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2, carry = 0) {
  let sentinel = (tail = new ListNode());

  while (l1 || l2 || carry) {
    /* Time O(MAX(N, M)) */
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    const val = sum % 10;
    carry = Math.floor(sum / 10);

    tail.next = new ListNode(val);
    tail = tail.next;

    l1 = l1?.next || null;
    l2 = l2?.next || null;
  }

  return sentinel.next;
};



// chat gpt method

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    if (l1) {
      carry += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      carry += l2.val;
      l2 = l2.next;
    }

    curr.next = new ListNode(carry % 10);
    curr = curr.next;
    carry = Math.floor(carry / 10);
  }

  return dummy.next;
};