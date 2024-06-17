Array.prototype.customIndexOf = function (searchElement, fromIndex) {
  let index = -1;
  for (let i = 0; i < this.length; i++) {
    if (this[i] === searchElement) {
      index = i;
      break;
    }
  }
  return index;
};

const arr = [2, 3, 4, 545, 2, 33, 65];
const searchElement = 545;
const result = arr.customIndexOf(arr, searchElement);
console.log(result); // 3
