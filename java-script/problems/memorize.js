const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

const memorize = (fn) => {
  const map = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (map.has(key)) {
      return map.get(key);
    } else {
      const result = fn(...args);
      map.set(key, result);
      return result;
    }
  };
};

const addMemorized = memorize(add);
const subtractMemorized = memorize(subtract);
const multiplyMemorized = memorize(multiply);

const result = addMemorized(1, 2);
console.log(result); // 3
const result2 = addMemorized(1, 2);
console.log(result2); // 3
const result3 = addMemorized(2, 3);
console.log(result3); // 5

const result4 = subtractMemorized(1, 2);
console.log(result4); // -1
const result5 = subtractMemorized(1, 2);
console.log(result5); // -1

const result6 = multiplyMemorized(2, 3);
console.log(result6); // 6
const result7 = multiplyMemorized(2, 3);
console.log(result7); // 6
