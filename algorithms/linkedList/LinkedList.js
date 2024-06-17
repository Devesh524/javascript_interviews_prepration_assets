class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  insertLast(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAtIndex(data, index) {
    if (index > this.size || index < 0) {
      return;
    }
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;
    let previous = null;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    newNode.next = current;
    previous.next = newNode;
    this.size++;
  }

  getAtIndex(index) {
    if (index >= this.size || index < 0) {
      return null;
    }

    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data, 'getAtIndex');
        return current.data;
      }
      current = current.next;
      count++;
    }
    return null;
  }

  removeAtIndex(index) {
    if (index >= this.size || index < 0) {
      return;
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  removeByValue(value) {
    let current = this.head;
    let previous = null;

    while (current) {
      if (current.data === value) {
        if (!previous) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.size--;
        return;
      }
      previous = current;
      current = current.next;
    }
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  reverseList() {
    let current = this.head;
    let previous = null;
    let next = null;

    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
  }

  mergeTwoSortedList(l1, l2) {
    let dummy = new Node(-1);
    let current = dummy;

    while (l1 !== null && l2 !== null) {
      if (l1.data < l2.data) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }

    // Attach the remaining part of the list if there's any left
    current.next = l1 || l2;

    return dummy.next;
  }

  printList(identifier) {
    let current = this.head;
    while (current) {
      console.log(current.data, identifier);
      current = current.next;
    }
  }
}

// Example Usage
const ll1 = new LinkList();
const ll2 = new LinkList();

ll1.insertLast(100);
ll1.insertLast(200);
ll1.insertLast(300);
ll1.insertLast(400);

ll2.insertLast(50);
ll2.insertLast(150);
ll2.insertLast(250);

const mergedList = ll1.mergeTwoSortedList(ll1.head, ll2.head);

let current = mergedList;
while (current) {
  console.log(current.data, 'mergedList');
  current = current.next;
}
