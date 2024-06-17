Array.prototype.customSort = function (compareFunction) {
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - 1; j++) {
      if (compareFunction(this[j], this[j + 1]) > 0) {
        const temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
  return this;
};

const arr = [2, 3, 4, 545, 2, 33, 65];

const result = arr.customSort((a, b) => {
  return a - b;
});
