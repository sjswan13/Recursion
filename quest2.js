class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function reverseList(head) {
    let previous = null;
    let current = head;
    let next = null;

    while (current !== null) {
        next = current.next;  
        current.next = previous;  
        previous = current;  
        current = next;
    }

    return previous;  
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

// Example usage
let list = createLinkedList([1, 2, 3, 4, 5]);
let reversedList = reverseList(list);
printLinkedList(reversedList);  // Output: [5, 4, 3, 2, 1]
