const arr = [1, 0, 2, 3, 0, 4, 5, 0];
const len = arr.length;

const duplicateZero = (arr) => {
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      console.log(arr);
      arr.pop();
      console.log(arr);

      i++;
    }
  }
  return arr;
};
// console.log(duplicateZero(arr)); // [1,0,0,2,3,0,0,4]

// console.log(('b' + 'a' + + 'b' + 'a').toLowerCase())

async function a() {
  try {
    return await Promise.reject(1);
  } catch (e) {
    console.log(e);
  }
}

async function b() {
  try {
    return Promise.reject(2);
  } catch (e) {
    console.log(e);
  }
}

async function start() {
  await a();
  await b();
}

// start()

// console.log(Function.prototype.__proto__ === Object.prototype)
// console.log(Function.__proto__ === Object.__proto__)
// console.log(Function.__proto__.__proto__ === Object.prototype)
// console.log(Object.constructor.prototype === Object.prototype)
// console.log(Function.constructor === Function)
// console.log(Object.constructor === Object)
// console.log(Array.__proto__ === Function.__proto__)
// console.log(Array.constructor === Function)
// console.log(Object.__proto__ === Function)
// console.log(Function.__proto__ === Function.prototype)
// console.log(Object instanceof Object)
// console.log(Function instanceof Function)
// console.log(Map instanceof Map)

console.log(1 + '2' + 3 + 4 + '5' + 6 + 7 + '8' + 9 + 10);

// Output of the above code is 12345678910 because the + operator is used for both addition and concatenation. When the + operator is used with a string, it concatenates the string. When the + operator is used with a number, it adds the numbers.

// 1 + '2' => '12'
// '12' + 3 => '123'
// '123' + 4 => '1234'
// '1234' + '5' => '12345'
// '12345' + 6 => '123456'
// '123456' + 7 => '1234567'
// '1234567' + '8' => '12345678'
// '12345678' + 9 => '123456789'
// '123456789' + 10 => '12345678910'

console.log(1 + 2 + '3' + 4 + 5 + '6' + 7 + 8 + '9' + 10);

// Output of the above code is 3345678910 because the + operator is used for both addition and concatenation. When the + operator is used with a string, it concatenates the string. When the + operator is used with a number, it adds the numbers.

console.log([...Object.keys({ a: 1, b: 2 }), ...Object.keys({ b: 2, a: 1 })]);

// explanation of the above code
// Object.keys({a: 1, b: 2}) => ['a', 'b']
// Object.keys({b: 2, a: 1}) => ['b', 'a']

// [...Object.keys({a: 1, b: 2}), ...Object.keys({b: 2, a: 1})] => ['a', 'b', 'b', 'a']

console.log([
  ...new Set([...Object.keys({ a: 1, b: 2 }), ...Object.keys({ b: 2, a: 1 })]),
]);

// output of the above code is ['a', 'b'] because Set removes duplicates from an array

console.log(10 > 9);
console.log(10 > '9');
console.log('10' > 9);
console.log('10' > '9');

// The output of the above code is true, true, true, false. In the first three cases, the string is converted to a number and then compared. In the last case, both are strings, so they are compared lexicographically.
