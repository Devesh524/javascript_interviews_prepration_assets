# Basic Event Emitter interface

## Problem

Create a basic event emitter interface that allows registering event listeners, emitting events, and removing event listeners.

## What is an Event Emitter?

An event emitter is a design pattern commonly used in JavaScript to handle asynchronous events, communication between components, and event-driven programming. It provides a mechanism for registering event listeners, emitting events, and removing event listeners based on specific events.

The event emitter pattern consists of three main components:

1. **Event**: An event is a signal or notification that something has happened in the system. Events can be triggered by user actions, system events, or external triggers.
2. **Event Listener**: An event listener is a function that is registered to handle a specific event. When the event is emitted, the event listener is called with the event data.
3. **Event Emitter**: An event emitter is an object that manages event listeners and emits events. It provides methods to register event listeners, emit events, and remove event listeners.

The event emitter pattern is widely used in front-end and back-end development to handle user interactions, data updates, and system events. It allows components to communicate asynchronously without direct dependencies, promoting loose coupling and modularity in software design.

## Requirements

1. The event emitter should allow registering event listeners for specific events.
2. The event emitter should allow emitting events with optional data to be passed to the event listeners.
3. The event emitter should call all registered event listeners for a specific event when the event is emitted.
4. The event emitter should allow removing event listeners for specific events.
5. The event emitter should handle multiple event listeners for the same event.
6. The event emitter should remove event listeners based on reference equality.
7. The event emitter should provide a simple and flexible interface for managing event-driven programming in JavaScript.

## Example

```javascript
const emitter = new EventEmitter();

const listener1 = (data) => {
  console.log('Listener 1:', data);
};

const listener2 = (data) => {
  console.log('Listener 2:', data);
};

emitter.on('event', listener1);

emitter.on('event', listener2);

emitter.emit('event', 'Hello, World!');

// Output:

// Listener 1: Hello, World!

// Listener 2: Hello, World!

emitter.off('event', listener1);

emitter.emit('event', 'Goodbye, World!');

// Output:

// Listener 2: Goodbye, World!
```

## Solution

```javascript
const EventEmitter = function () {
  this.events = {};
};

EventEmitter.prototype.on = function (event, listener) {
  if (!this.events[event]) {
    this.events[event] = [];
  }
  this.events[event].push(listener);
};

EventEmitter.prototype.emit = function (event, data) {
  if (this.events[event]) {
    this.events[event].forEach((listener) => listener(data));
  }
};

EventEmitter.prototype.off = function (event, listener) {
  if (this.events[event]) {
    this.events[event] = this.events[event].filter((l) => l !== listener);
  }
};
```

## Explanation

1. Create a constructor function `EventEmitter` that initializes an empty object `events` to store event listeners.
2. Add a method `on` to the `EventEmitter` prototype that takes an `event` name and a `listener` function as arguments.
3. If the `event` does not exist in the `events` object, create an empty array for it.
4. Push the `listener` function to the array of listeners for the specified `event`.
5. Add a method `emit` to the `EventEmitter` prototype that takes an `event` name and `data` as arguments.
6. If the `event` exists in the `events` object, iterate over the array of listeners for that `event` and call each listener with the provided `data`.
7. Add a method `off` to the `EventEmitter` prototype that takes an `event` name and a `listener` function as arguments.
8. If the `event` exists in the `events` object, filter out the specified `listener` from the array of listeners for that `event`.
9. Use the `EventEmitter` constructor to create a new event emitter instance.
10. Register event listeners using the `on` method, emit events using the `emit` method, and remove event listeners using the `off` method.
11. The event emitter allows multiple listeners to be registered for the same event and removes listeners based on reference equality.
12. When an event is emitted, all registered listeners for that event are called in the order they were registered with the provided data.
13. Removing a listener only removes that specific listener from the event, allowing other listeners to remain registered.
14. The event emitter provides a simple and flexible way to manage event-driven programming in JavaScript.
15. The event emitter pattern is commonly used in libraries, frameworks, and applications to handle asynchronous events and communication between different parts of the system.

## Complexity Analysis

The time complexity for registering an event listener using the `on` method is O(1) as it involves adding the listener to an array of listeners for the specified event.

The time complexity for emitting an event using the `emit` method is O(n) where n is the number of listeners for the specified event. This is because the method iterates over the array of listeners and calls each listener with the provided data.

The time complexity for removing an event listener using the `off` method is O(n) where n is the number of listeners for the specified event. This is because the method filters out the specified listener from the array of listeners for that event.

The space complexity for the event emitter is O(n) where n is the number of events registered with listeners. The event emitter stores the listeners for each event in an object, resulting in a linear increase in space usage with the number of events.

## Related Patterns

The event emitter pattern is a fundamental building block for event-driven programming in JavaScript and is commonly used in various design patterns and libraries. It can be combined with other patterns such as the `observer pattern`, `mediator pattern`, and `pub/sub pattern` to create more complex event handling systems.

The event emitter pattern is often used in front-end frameworks like React, Angular, and Vue to manage component communication, state changes, and user interactions. It is also used in back-end frameworks like Node.js to handle asynchronous events, network requests, and data processing.

The event emitter pattern provides a flexible and extensible way to decouple components, modules, and systems by allowing them to communicate through events without direct dependencies. It promotes loose coupling, separation of concerns, and modularity in software design.

## Conclusion

The event emitter pattern is a powerful and versatile tool for managing asynchronous events, communication, and interactions in JavaScript applications. It provides a simple and efficient way to handle event-driven programming by allowing components to register listeners, emit events, and remove listeners based on specific events.

By using the event emitter pattern, developers can create modular, scalable, and maintainable applications that respond to user actions, system events, and external triggers. The event emitter pattern promotes separation of concerns, encapsulation, and reusability by decoupling event producers from event consumers.

The event emitter pattern is a core concept in event-driven programming and is widely used in front-end and back-end development to handle user interactions, data updates, and system events. Understanding and applying the event emitter pattern can help developers build robust, responsive, and interactive applications that meet the needs of modern software development.

## References

- [EventEmitter - Node.js Documentation](https://nodejs.org/api/events.html)
- [EventEmitter - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
- [EventEmitter - Wikipedia](https://en.wikipedia.org/wiki/Observer_pattern)
- [EventEmitter - JavaScript.info](https://javascript.info/event-emitter)
