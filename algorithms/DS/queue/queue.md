# Queue 

Queue is a linear data structure that follows the First In First Out (FIFO) principle. The elements are inserted at the rear end and deleted from the front end.

## Operations

The main operations on a queue are:

- **Enqueue**: Adds an element to the rear end of the queue.
- **Dequeue**: Removes an element from the front end of the queue.
- **Front**: Returns the front element of the queue.
- **Rear**: Returns the rear element of the queue.
- **isEmpty**: Returns true if the queue is empty, false otherwise.
- **isFull**: Returns true if the queue is full, false otherwise.
- **Size**: Returns the number of elements in the queue.
- **Print**: Prints the elements of the queue.
- **Clear**: Removes all the elements from the queue.
- **Destroy**: Deletes the queue.
- **Peek**: Returns the element at the given position.
- **Search**: Searches for an element in the queue.
- **Copy**: Creates a copy of the queue.
- **Reverse**: Reverses the queue.
- **Sort**: Sorts the queue.
- **Merge**: Merges two queues.
- **Split**: Splits the queue into two queues.
- **Rotate**: Rotates the queue by a given number of elements.

## Types of Queue

There are different types of queues based on the way elements are inserted and deleted:

- **Simple Queue**: The elements are inserted at the rear end and deleted from the front end.
- **Circular Queue**: The rear end is connected to the front end to form a circle. When the rear end reaches the end of the queue, it wraps around to the front end.
- **Priority Queue**: The elements are inserted based on their priority. The element with the highest priority is removed first.
- **Double-ended Queue (Deque)**: The elements can be inserted and deleted from both the front and rear ends.
- **Blocking Queue**: The operations on the queue block when the queue is full or empty.
- **Concurrent Queue**: The queue supports multiple threads for concurrent access.
- **Linked Queue**: The queue is implemented using a linked list.
- **Array Queue**: The queue is implemented using an array.

## Applications

Queues are used in various applications such as:

- **Operating Systems**: Queues are used for scheduling tasks, managing resources, and handling interrupts.
- **Networking**: Queues are used for managing packets in routers and switches.
- **Simulation**: Queues are used to model real-world scenarios such as waiting lines.
- **Breadth-First Search (BFS)**: Queues are used to traverse graphs in a breadth-first manner.
- **Buffering**: Queues are used for buffering data in computer systems.
- **Printers**: Queues are used to manage print jobs in printers.
- **Call Centers**: Queues are used to manage incoming calls in call centers.
- **Traffic Management**: Queues are used to manage traffic flow in transportation systems.
- **Event Handling**: Queues are used to handle events in event-driven programming.

## Time Complexity

The time complexity of queue operations is as follows:

- **Enqueue**: O(1)
- **Dequeue**: O(1)
- **Front**: O(1)
- **Rear**: O(1)
- **isEmpty**: O(1)
- **isFull**: O(1)
- **Size**: O(1)
- **Print**: O(n)
- **Clear**: O(n)
- **Destroy**: O(1)
- **Peek**: O(n)
- **Search**: O(n)
- **Copy**: O(n)
- **Reverse**: O(n)
- **Sort**: O(n log n)
- **Merge**: O(n)


## Implementation

There are different ways to implement a queue:

- **Array**: The queue is implemented using an array.
- **Linked List**: The queue is implemented using a linked list.

## Algorithms 

- [Queue using Array](queue-array.md)
- [Queue using Linked List](queue-linked-list.md)
