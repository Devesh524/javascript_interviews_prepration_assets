// Consider we have multiple async tasks A, B, C, D and E ( not promises). A, B, C are independent tasks while D depends on A and B to perform its task while E depends on D and C to perform its task. Write a task function/class to solve this problem. In the end He asked How to handle concurrency limit ( not to code just asked me to explain my approach ).

const A = async () => {
  return 'A';
};

const B = async () => {
  return 'B';
};

const C = async () => {
  return 'C';
};

const D = async (a, b) => {
  return a + b;
};

const E = async (d, c) => {
  return d + c;
};

const task = async () => {
  const a = await A();
  const b = await B();
  const d = await D(a, b);
  const c = await C();
  const e = await E(d, c);

  return e;
};
// without concurrency limit
task().then(console.log); // AB + C

// with concurrency limit
const taskWithConcurrencyLimit = async () => {
  const a = A();
  const b = B();
  const c = C();
  const [aValue, bValue, cValue] = await Promise.all([a, b, c]);
  const d = D(aValue, bValue);
  const e = E(d, cValue);

  return e;
};

taskWithConcurrencyLimit().then(console.log); // AB + C
