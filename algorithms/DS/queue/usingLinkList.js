class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enQueue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  deQueue() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  isEmpty() {
    return this.head === null;
  }

  print() {
    const queue = [];
    let current = this.head;
    while (current) {
      queue.push(current.value);
      current = current.next;
    }
    return queue;
  }

  peek() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }
    return this.head.value;
  }
}

const queue = new Queue();

queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
console.log(queue.deQueue()); // 1

console.log(queue.isEmpty()); // false

console.log(queue.print()); // [2, 3]

console.log(queue.peek()); // 2
