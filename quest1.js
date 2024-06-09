//create dummy node

const { create } = require("domain");

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function mergeTwoLists(list1, list2) {
  let faker = new ListNode();
  let current = faker;

  while (list1 !== null && list2 !==null) {
    if(list1.value <= list2.value) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if(list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }
  return faker.next;
}

function createLinkedList(arr) {
  let faker = new ListNode();
  let current = faker;
  for(let value of arr) {
    current.next = new ListNode(value);
    current = current.next;
  }
  return faker.next;
}

function printlinkedList(head) {
  let current = head;
  let result = [];
  while(current !== null) {
    result.push(current.value);
    current = current.next;
  }
  console.log(result);
}

let list1 = createLinkedList([1, 2, 4]);
let list2 = createLinkedList([1, 3, 4]);
let mergedList = mergeTwoLists(list1, list2);
printlinkedList(mergedList);