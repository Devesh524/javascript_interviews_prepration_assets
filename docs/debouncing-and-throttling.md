# Debouncing and Throttling

Debouncing and throttling are two techniques to control how many times we allow a function to be executed over time.

## What is Debouncing?

Debouncing is a technique used to limit the rate at which a function is called. When debouncing is applied to a function, it delays the execution of the function until after a certain amount of time has passed since the last time the function was called. This can be useful in scenarios where a function is called frequently, such as in response to user input, and you want to ensure that the function is only executed after the user has finished interacting with the input.

## Why is Debouncing Useful?

Debouncing is useful for several reasons:

- **Reducing Function Calls**: Debouncing can help reduce the number of times a function is called, which can improve performance and reduce unnecessary work.
- **Improving User Experience**: Debouncing can improve the user experience by preventing functions from being called too frequently, which can lead to a smoother and more responsive interface.
- **Handling User Input**: Debouncing is commonly used to handle user input, such as search queries, form submissions, and scroll events, to ensure that the function is only executed after the user has finished interacting with the input.

## How Does Debouncing Work?

Debouncing works by using a timer to delay the execution of a function until after a certain amount of time has passed since the last time the function was called. When the function is called, the timer is reset, and the function is only executed after the timer has expired. This delay ensures that the function is only executed once the user has finished interacting with the input, rather than being called multiple times in quick succession.

Here's an example of debouncing in JavaScript:

```javascript
function debounce(func, delay) {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

function handleInput() {
  console.log('Input handled');
}

let debouncedHandleInput = debounce(handleInput, 300);

// Call the debounced function

debouncedHandleInput(); // Function is not executed immediately

// Call the debounced function again

debouncedHandleInput(); // Function is not executed immediately

// Wait for 300ms

// Output: Input handled
```

In this example, the `debounce` function takes a function and a delay as arguments and returns a new function that delays the execution of the original function until after the specified delay has passed since the last time the function was called. The `handleInput` function is debounced using the `debounce` function, and when the debounced function is called, it delays the execution of the `handleInput` function until after 300ms have passed since the last time the function was called.

## What is Throttling?

Throttling is a technique used to limit the rate at which a function is called. When throttling is applied to a function, it ensures that the function is only called at a certain interval, regardless of how many times the function is triggered. This can be useful in scenarios where you want to limit the frequency of function calls, such as in response to scroll events or resize events, to prevent performance issues and improve the user experience.

## Why is Throttling Useful?

Throttling is useful for several reasons:

- **Improving Performance**: Throttling can help improve performance by limiting the number of times a function is called, which can reduce unnecessary work and prevent performance bottlenecks.
- **Preventing Overloading**: Throttling can prevent functions from being called too frequently, which can help prevent overloading the system and improve the stability of the application.
- **Handling Events**: Throttling is commonly used to handle events that can be triggered rapidly, such as scroll events, resize events, and mousemove events, to ensure that the function is only called at a certain interval.
- **Reducing Network Requests**: Throttling can be used to limit the rate at which network requests are made, which can help reduce the load on the server and improve the responsiveness of the application.
- **Improving User Experience**: Throttling can improve the user experience by preventing functions from being called too frequently, which can lead to a smoother and more responsive interface.
- **Optimizing Resource Usage**: Throttling can optimize the usage of system resources by limiting the frequency of function calls, which can help improve the efficiency of the application and reduce resource consumption.
- **Preventing**: Throttling can prevent functions from being called too frequently, which can help prevent performance issues and improve the stability of the application.

## How Does Throttling Work?

Throttling works by using a timer to limit the rate at which a function is called. When the function is triggered, the timer is set to delay the execution of the function until after a certain interval has passed since the last time the function was called. If the function is called again before the timer has expired, the function is not executed, and the timer is reset. This delay ensures that the function is only called at a certain interval, regardless of how many times the function is triggered.

Here's an example of throttling in JavaScript:

```javascript
function throttle(func, delay) {
  let timer;

  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, arguments);
        timer = null;
      }, delay);
    }
  };
}

function handleScroll() {
  console.log('Scroll handled');
}

let throttledHandleScroll = throttle(handleScroll, 300);

// Call the throttled function

throttledHandleScroll(); // Function is executed

// Call the throttled function again

throttledHandleScroll(); // Function is not executed

// Wait for 300ms

// Output: Scroll handled
```

In this example, the `throttle` function takes a function and a delay as arguments and returns a new function that limits the rate at which the original function is called. The `handleScroll` function is throttled using the `throttle` function, and when the throttled function is called, it ensures that the `handleScroll` function is only executed at a certain interval, regardless of how many times the function is triggered.

## Conclusion

Debouncing and throttling are two techniques used to control how many times a function is executed over time. Debouncing delays the execution of a function until after a certain amount of time has passed since the last time the function was called, while throttling limits the rate at which a function is called to a certain interval. These techniques can be useful in scenarios where you want to improve performance, reduce unnecessary work, and prevent overloading the system. By applying debouncing and throttling to functions that are called frequently, you can optimize the usage of system resources, improve the user experience, and prevent performance issues in your applications.

## References

- [Debouncing and Throttling in JavaScript](https://css-tricks.com/debouncing-throttling-explained-examples/)
- [Debouncing vs Throttling](https://medium.com/@_jh3y/throttling-and-debouncing-in-javascript-b01cad5c8edf)
- [Debouncing and Throttling in React](https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci)
- [Debouncing and Throttling in Vue.js](https://vuejsdevelopers.com/2017/05/20/vue-js-sound-player-debouncing/)
