# How Event Loop Works in JavaScript?

## Event Loop

JavaScript is a `single-threaded` language, which means it has one call stack and one memory heap. As expected, it executes code in order and must finish executing a piece code before moving onto the next. However, JavaScript is also a host environment that can handle asynchronous operations. This is where the event loop comes into play.

The event loop is a process that runs asynchronously and continuously checks if the call stack is empty. If the call stack is empty, it checks the callback queue. If there are any functions in the callback queue, it moves them to the call stack to be executed.

## Call Stack

The call stack is a data structure that records the function calls in a program. When a function is called, it is added to the top of the call stack. When the function returns, it is removed from the call stack. The call stack is a Last In, First Out (LIFO) data structure.

## Callback Queue

The callback queue is a data structure that records the callback functions that are ready to be executed. When a callback function is ready to be executed, it is added to the callback queue. The event loop checks the callback queue when the call stack is empty and moves the callback functions to the call stack to be executed.

## Example

Here is an example of how the event loop works in JavaScript:

```javascript
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('End');
```

In this example, the code will output:

```
Start
End
Timeout
```

The `console.log('Start')` function is added to the call stack and executed. The `setTimeout` function is added to the call stack and executed, but the callback function is not executed immediately. Instead, it is added to the callback queue. The `console.log('End')` function is added to the call stack and executed. When the call stack is empty, the event loop checks the callback queue and moves the callback function to the call stack to be executed.

## Conclusion

The event loop is a key concept in JavaScript that allows asynchronous operations to be handled in a single-threaded environment. By continuously checking the call stack and callback queue, the event loop ensures that functions are executed in the correct order and that the program remains responsive to user input.

```

```
