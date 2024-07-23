class Queue {
  constructor() {
    this.queue = [];
  }

  deQueue() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }
    return this.queue.shift();
  }

  enQueue(value) {
    return this.queue.push(value);
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  print() {
    return this.queue;
  }
}

const queue = new Queue();

queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
console.log(queue.deQueue()); // 1

console.log(queue.isEmpty()); // false

console.log(queue.print()); // [2, 3]
