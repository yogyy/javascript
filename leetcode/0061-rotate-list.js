function rotateRight(head, k) {
  // edge cases
  if (!head) return head;
  if (!head.next) return head;

  // calculate length and get the tail node
  let len = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    len++;
  }

  // calculate the number of rotations
  let rotations = k % len;
  if (rotations === 0) return head;

  // get the new tail and head nodes
  let newTail = head;
  for (let i = 1; i < len - rotations; i++) {
    newTail = newTail.next;
  }
  let newHead = newTail.next;

  // rotate the list
  newTail.next = null;
  tail.next = head;
  return newHead;
}
