# custom-create-element

## Problem

Create a function that takes a tag name, an object of attributes, and an array of children to create a DOM element.

## Example

```javascript
const element = customCreateElement('div', { class: 'container' }, [
  customCreateElement('h1', { class: 'title' }, ['Hello, World!']),
  customCreateElement('p', { class: 'text' }, ['This is a paragraph.']),
]);

document.body.appendChild(element);
```

## Solution

```javascript
function customCreateElement(tag, attributes, children) {
  const element = document.createElement(tag);

  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  for (const child of children) {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  }

  return element;
}
```

## Explanation

1. Create a function `customCreateElement` that takes three arguments: `tag`, `attributes`, and `children`.
2. Create a new element using `document.createElement` and assign it to the `element` variable.
3. Iterate over the `attributes` object using a `for...in` loop.
4. For each key in the `attributes` object, set the attribute on the element using `element.setAttribute(key, attributes[key])`.
5. Iterate over the `children` array using a `for...of` loop.
6. For each child in the `children` array, check if it is a string or an element.
7. If the child is a string, create a text node using `document.createTextNode` and append it to the element using `element.appendChild`.
8. If the child is an element, append it directly to the element using `element.appendChild`.
9. Return the created element.
10. Use the `customCreateElement` function to create a parent element with the specified tag, attributes, and children.

## Complexity Analysis

The time complexity for this solution is O(n), where n is the number of children in the `children` array. The function iterates over the `attributes` object and the `children` array, performing constant-time operations for each attribute and child.

The space complexity for this solution is O(1) as the function uses a constant amount of space regardless of the input size.

## Related Patterns

This problem is related to the Factory Method pattern in design patterns. The `customCreateElement` function acts as a factory method that creates DOM elements based on the input parameters. The function abstracts the process of creating DOM elements and allows the caller to specify the tag, attributes, and children without having to know the details of the element creation process.

## References

- [MDN Web Docs: Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Web Docs: Node.appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- [MDN Web Docs: Element.setAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
