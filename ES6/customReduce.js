Array.prototype.customReduce = function (processReduce, initialValue) {
  let accumulator = initialValue;
  console.log(this, 'this');
  for (let i = 0; i < this.length; i++) {
    if (this.indexOf(this[i] > -1)) {
      accumulator = processReduce(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};

const arr = [2, 3, 4, 545, 2, 33, 65];
const result = arr.customReduce((acc, item) => {
  return acc + item;
}, 0);

console.log(result); // 654
