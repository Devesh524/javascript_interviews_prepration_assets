var createCounter = function (n) {
  let count = 0;
  return function () {
    count++;
    return count === 0 ? n : n + count - 1;
  };
};

const counter = createCounter(10);
// counter(); // 10
// counter(); // 11
// counter(); // 12

console.log(counter(10), 'counter');
console.log(counter(), 'counter');
console.log(counter(), 'counter');
