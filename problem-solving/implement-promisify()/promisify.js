/**
 * @param {(...args) => void} func
 * @returns {(...args) => Promise<any}
 */
function promisify(func) {
  // your code here
  return (...args) => {
    return new Promise((resolve, reject) => {
      func(...args, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  };
}

const hasError = false;
const someError = new Error('Some error');
const someData = 'Some data';

const func = (arg1, arg2, callback) => {
  // some async logic
  if (!hasError) {
    callback(someError);
  } else {
    callback(null, someData);
  }
};

const promisifiedFunc = promisify(func);

promisifiedFunc('arg1', 'arg2')
  .then((res) => console.log(res, 'then'))
  .catch((err) => console.log(err, 'catch'));
