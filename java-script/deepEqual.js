const deepEqual = (val1, val2) => {
  if (val1 === val2) {
    return true;
  }

  if (typeof val1 !== typeof val2) {
    return false;
  }

  // Handle undefined
  if (typeof val1 === 'undefined' || typeof val2 === 'undefined') {
    return false;
  }

  // Handle NaN
  if (
    typeof val1 === 'number' &&
    isNaN(val1) &&
    typeof val2 === 'number' &&
    isNaN(val2)
  ) {
    return true;
  }

  // Handle null
  if (val1 === null || val2 === null) {
    return val1 === val2;
  }

  // Handle primitive types (string, number, boolean)
  if (typeof val1 !== 'object') {
    return val1 === val2;
  }

  // handle array
  if (Array.isArray(val1) && Array.isArray(val2)) {
    if (val1.length !== val2.length) {
      return false;
    } else {
      for (let i = 0; i < val1.length; i++) {
        if (!deepEqual(val1[i], val2[i])) {
          return false;
        }
      }
    }
  } else if (Array.isArray(val1) || Array.isArray(val2)) {
    return false;
  }

  // handle object
  if (typeof val1 === 'object' && typeof val2 === 'object') {
    const keys1 = Object.keys(val1);
    const keys2 = Object.keys(val2);

    if (keys1.length !== keys2.length) {
      return false;
    } else {
      for (let i = 0; i < keys1.length; i++) {
        if (!deepEqual(val1[keys1[i]], val2[keys2[i]])) {
          return false;
        }
      }
    }
    return true;
  }

  return false;
};

// test cases
const result = deepEqual(1, 1);
console.log(result, 'result'); // true
const result2 = deepEqual(1, 2);
console.log(result2, 'result2'); // false
const result3 = deepEqual('1', '1');
console.log(result3, 'result3'); // true
const result4 = deepEqual('1', '2');
console.log(result4, 'result4'); // false
const result5 = deepEqual([1, 2, 3], [1, 2, 3]);
console.log(result5, 'result5'); // true
const result6 = deepEqual([1, 2, 3], [1, 2, 4]);
console.log(result6, 'result6'); // false
const result7 = deepEqual([1, 2, 3], [1, 2, 3, 4]);
console.log(result7, 'result7'); // false
const result8 = deepEqual([1, 2, 3], [1, 2]);
console.log(result8, 'result8'); // false
const result9 = deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 });
console.log(result9, 'result9'); // true
const result10 = deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 });
console.log(result10, 'result10'); // false
const result11 = deepEqual({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 });
console.log(result11, 'result11'); // false
const result12 = deepEqual({ a: 1, b: 2 }, { a: 1 });
console.log(result12, 'result12'); // false
const result13 = deepEqual({ a: 1, b: 2 }, { a: 1, b: 2, c: { d: 3 } });
console.log(result13, 'result3'); // false
const result14 = deepEqual({ a: 1, b: 2 }, { a: 1, b: 2, c: { d: 3 } });
console.log(result14, 'result14'); // false
