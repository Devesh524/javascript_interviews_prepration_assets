**Explanation:** The arrays we are merging are `[]` and `[1]`. The result of the merge is `[1]`. Note that because `m = 0`, there are no elements in `nums1`. The 0 is only there to ensure the merge result can fit in `nums1`.

## Constraints

- `nums1.length == m + n`
- `nums2.length == n`
- `0 <= m, n <= 200`
- `1 <= m + n <= 200`
- `-10^9 <= nums1[i], nums2[j] <= 10^9`

## Follow up

Can you come up with an algorithm that runs in `O(m + n)` time?

## Algorithm: Merge Sorted Arrays

This algorithm merges two sorted arrays into one sorted array in-place.

**Time Complexity:** `O(m + n)`  
**Space Complexity:** `O(1)`

**Steps:**

1. Start from the end of both arrays and compare elements from `nums1` and `nums2`.
2. Place the larger element at the end of `nums1`.
3. Move the pointer of the array from which the element was taken.
4. Continue until all elements from `nums2` are merged into `nums1`.

**Implementation:**

```javascript
/**
 * Merges two sorted arrays into one sorted array in place.
 *
 * @param {number[]} nums1 - The first sorted array with extra space for nums2.
 * @param {number} m - The number of elements in nums1.
 * @param {number[]} nums2 - The second sorted array.
 * @param {number} n - The number of elements in nums2.
 * @returns {void}
 */
const merge = (nums1, m, nums2, n) => {
  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    }
  }
  // If there are remaining elements in nums2, copy them
  while (n > 0) {
    nums1[n - 1] = nums2[n - 1];
    n--;
  }
};

// Example usage:
const result1 = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
console.log(result1); // Output: [1,2,2,3,5,6]

const result2 = merge([1], 1, [], 0);
console.log(result2); // Output: [1]

const result3 = merge([0], 0, [1], 1);
console.log(result3); // Output: [1]

// Additional test case
const result4 = merge([2, 0], 1, [1], 1);
console.log(result4); // Output: [1, 2]
