class ListNode {
  constructor(value = 0, next = null){
    this.value = value;
    this.next = next;
  }
}

function swapPairs(head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  while(prev.next !== null && prev.next.next !== null) {
    let first = prev.next;
    let second = prev.next.next;

    first.next = second.next;
    second.next = first;
    prev.next = second;

    prev = first;
  }
  return dummy.next;
}

function createLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for(let value of arr) {
    current.next = new ListNode(value);
    current = current.next;
  }
  return dummy.next;
}

function printLinkedList(head) {
  let current = head;
  let result = [];
  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }
  console.log(result);
}

let list = createLinkedList([1, 2, 3, 4]);
let swappedList = swapPairs(list);
printLinkedList(swappedList);