/* 
  2 -> 6 -> 7 -> 8
  1 -> 3 -> 4 -> 5 -> 9 -> 10

  1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10
*/

class LinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  add(val) {
    const newNode = new LinkedList(val);
    this.next = newNode;
    return newNode;
  }

  print() {
    let current = this;
    let str = '';
    while (current) {
      str += current.val + ' -> ';
      current = current.next;
    }
    str += 'null';
    console.log(str);
  }
}

const list1 = new LinkedList(2);
list1.add(6).add(7).add(8);
const list2 = new LinkedList(1);
list2.add(3).add(4).add(5).add(9).add(10);

// O(n + m) time | O(1) space
function mergeLinkedList(head1, head2) {
  let p1 = null,
    p2 = head1,
    p3 = head2,
    newHead = p2;

  while (p2 && p3) {
    if (p3.val < p2.val) {
      p1 == null ? (newHead = p3) : (p1.next = p3);
      p1 = p3;
      p3 = p3.next;
      p1.next = p2;
    } else {
      p1 = p2;
      p2 = p2.next;
    }
  }

  p1.next = p3;

  return newHead;
}

list1.print();
list2.print();

const newList = mergeLinkedList(list1, list2);
newList.print();
