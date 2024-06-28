# Garbage collection in JS

Garbage collection is the process of automatically freeing up memory that is no longer being used by the program. In JavaScript, garbage collection is performed by the JavaScript engine. The JavaScript engine keeps track of all the objects that are created during the execution of a program and automatically frees up the memory used by objects that are no longer being used.

JavaScript uses a garbage collector to manage memory. The garbage collector is responsible for freeing up memory that is no longer being used by the program. The garbage collector works by identifying objects that are no longer being used and then freeing up the memory used by those objects.

## How does garbage collection work?

Garbage collection in JavaScript works by identifying objects that are no longer being used by the program and then freeing up the memory used by those objects. The garbage collector uses a technique called reference counting to keep track of the objects that are created during the execution of a program.

Reference counting is a technique that keeps track of the number of references to an object. When an object is created, the reference count is set to 1. When an object is referenced by another object, the reference count is incremented. When an object is no longer being used, the reference count is decremented. When the reference count reaches 0, the object is no longer being used and the memory used by the object is freed up.

## Common memory leaks

Memory leaks can occur in JavaScript when objects are not properly cleaned up by the garbage collector. Memory leaks can occur when objects are created but are not properly cleaned up when they are no longer being used. This can lead to memory leaks and can cause the program to run out of memory.

There are several common causes of memory leaks in JavaScript:

1. Circular references: Circular references occur when two or more objects reference each other. This can prevent the garbage collector from freeing up the memory used by the objects.
2. Event listeners: Event listeners can cause memory leaks if they are not properly removed when they are no longer needed.
3. Closures: Closures can cause memory leaks if they reference variables that are no longer needed.
4. Global variables: Global variables can cause memory leaks if they are not properly cleaned up when they are no longer needed.
5. DOM elements: DOM elements can cause memory leaks if they are not properly removed from the DOM when they are no longer needed.
6. Timers: Timers can cause memory leaks if they are not properly cleared when they are no longer needed.
7. Large objects: Large objects can cause memory leaks if they are not properly cleaned up when they are no longer needed.
8. Forgotten references: Forgotten references can cause memory leaks if objects are not properly cleaned up when they are no longer needed.

## How to prevent memory leaks

To prevent memory leaks in JavaScript, it is important to properly clean up objects that are no longer being used. Here are some tips to prevent memory leaks in JavaScript:

1. Remove event listeners when they are no longer needed.
2. Clear timers when they are no longer needed.
3. Remove circular references between objects.
4. Avoid using global variables.
5. Remove DOM elements when they are no longer needed.
6. Avoid creating large objects that are not needed.
7. Use the `delete` operator to remove object properties.
8. Use the `WeakMap` and `WeakSet` data structures to store weak references to objects.
9. Use a memory profiler to identify memory leaks in your code.
10. Use a linter to identify potential memory leaks in your code.

## Internal Algorithms

JavaScript engines use several algorithms to perform garbage collection. Some of the most common algorithms used by JavaScript engines are:

1. Mark-and-sweep: The mark-and-sweep algorithm is a garbage collection algorithm that works by marking objects that are still in use and then sweeping away objects that are no longer in use.
2. Generational collection: The generational collection algorithm is a garbage collection algorithm that works by dividing objects into different generations based on their age.
3. Incremental collection: The incremental collection algorithm is a garbage collection algorithm that works by breaking up the garbage collection process into smaller steps.
4. Reference counting: The reference counting algorithm is a garbage collection algorithm that works by keeping track of the number of references to an object.
5. Tracing garbage collection: The tracing garbage collection algorithm is a garbage collection algorithm that works by tracing the references between objects to identify objects that are no longer in use.
6. Copying garbage collection: The copying garbage collection algorithm is a garbage collection algorithm that works by copying live objects to a new memory space and then freeing up the memory used by dead objects.

### Mark-and-sweep algorithm

The mark-and-sweep algorithm is a garbage collection algorithm that works by marking objects that are still in use and then sweeping away objects that are no longer in use. The mark-and-sweep algorithm works in two phases:

1. Mark phase: In the mark phase, the garbage collector marks objects that are still in use by traversing the object graph starting from the root objects.
2. Sweep phase: In the sweep phase, the garbage collector sweeps away objects that are no longer in use by freeing up the memory used by those objects.
3. Compact phase: In the compact phase, the garbage collector compacts the memory used by live objects to reduce fragmentation.
4. Finalize phase: In the finalize phase, the garbage collector runs finalizers on objects that are no longer in use.

The mark-and-sweep algorithm is a simple and efficient garbage collection algorithm that is used by many JavaScript engines.

### Example

Here is an example of how the mark-and-sweep algorithm works in JavaScript:

```javascript
// Create an object
const obj = { name: 'John' };

// Create a reference to the object
const ref = obj;

// Remove the reference to the object
ref = null;
```

In this example, the object `obj` is created and a reference `ref` is created to the object. When the reference `ref` is removed, the object `obj` is no longer being used and the garbage collector can free up the memory used by the object.

### Generational collection algorithm

The generational collection algorithm is a garbage collection algorithm that works by dividing objects into different generations based on their age. The generational collection algorithm works by:

1. Dividing objects into different generations based on their age.
2. Collecting objects in the younger generations more frequently than objects in the older generations.
3. Promoting objects from younger generations to older generations based on their age.
4. Collecting objects in the older generations less frequently than objects in the younger generations.

The generational collection algorithm is an efficient garbage collection algorithm that takes advantage of the fact that most objects die young.

## Conclusion

Garbage collection is an important feature of JavaScript that helps to manage memory and prevent memory leaks. By understanding how garbage collection works and how to prevent memory leaks, you can write more efficient and reliable JavaScript code.

## References

- [MDN Web Docs: Memory Management](https://developer.mozilla.org/en-US/docs/Web/
- [JavaScript Memory Management](https://developer.mozilla.org/en-US/docs/Web/
- [JavaScript Memory Management: An Overview](https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec)
- [JavaScript Memory Management: Tips to Avoid Memory Leaks](https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/)
