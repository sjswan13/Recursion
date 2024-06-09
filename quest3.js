class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function removeElements(head, val) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;

  while (current.next !== null){
    if(current.next.value === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
 return dummy.next;
}

function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let value of arr) {
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

let list = createLinkedList([1, 2, 6, 3, 4, 5, 6]);
let modifiedList = removeElements(list, 6);
printLinkedList(modifiedList);