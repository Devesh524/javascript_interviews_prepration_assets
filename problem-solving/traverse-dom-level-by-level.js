// Given a DOM tree, flatten it into an one dimensional array, in the order of layer by layer, like below.

//   <div>
//   / \
// <p>   <p> => [div, p, p, p, p, p]
// / \     \
// p  p     p
// </div>

/**
 * @param {HTMLElement | null} root
 * @return {HTMLElement[]}
 */
function flatten(root) {
  // your code here

  if (!root) return [];

  let result = [];
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();
    result.push(node);
    queue.push(...node.children);
  }

  return result;
}

const div = document.createElement('div');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
const p4 = document.createElement('p');

flatten();
