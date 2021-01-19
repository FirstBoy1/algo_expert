/* 
  0 -> 1 -> 2 -> 3 -> 4 -> 5
  5 -> 4 -> 3 -> 2 -> 1 -> 0
*/

function reverseLinkedList(head) {
  let p1 = null,
    p2 = head;

  while (p2) {
    const temp = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = temp;
  }

  return p1;
}
