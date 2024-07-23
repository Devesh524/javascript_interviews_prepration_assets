// 177. Implement Object.groupBy()

// Object.groupBy() allows us to easily group array items, please try to implement it by yourself.

const items = [
  {
    id: 1,
    kind: 'a',
  },
  {
    id: 2,
    kind: 'b',
  },
  {
    id: 3,
    kind: 'a',
  },
];
Object.prototype.groupBy = (items, callback) => {
  const groups = {};
  items.forEach((item) => {
    const key = callback(item);
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
  });
  return groups;
};
const groups = Object.groupBy(items, ({ kind }) => kind);
console.log(groups);
// {
//   a: [
//     {
//       id: 1,
//       kind: 'a'
//     },
//     {
//       id: 3,
//       kind: 'a'
//     }
//   ],
//   b: [
//     {
//       id: 2,
//       kind: 'b'
//     }
//   ]
// }
