**Explanation:** Intervals `[1,4]` and `[4,5]` are considered overlapping.

## Constraints

- `1 <= intervals.length <= 10^4`
- `intervals[i].length == 2`
- `0 <= starti <= endi <= 10^4`

## Algorithms

### Algorithm: Merge Intervals

This algorithm merges overlapping intervals in an efficient manner.

**Time Complexity:** `O(n log n)`  
**Space Complexity:** `O(n)`

**Steps:**

1. Sort the intervals based on the starting point.
2. Iterate through the sorted intervals.
3. Merge intervals if they overlap, otherwise add the current interval to the result.

**Implementation:**

```javascript
/**
 * Merges all overlapping intervals.
 *
 * @param {number[][]} intervals - The array of intervals to merge.
 * @returns {number[][]} - The merged intervals.
 */
const mergeIntervals = (intervals) => {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const [currentStart, currentEnd] = intervals[i];
    const [lastStart, lastEnd] = result[result.length - 1];

    if (currentStart <= lastEnd) {
      result[result.length - 1][1] = Math.max(lastEnd, currentEnd);
    } else {
      result.push([currentStart, currentEnd]);
    }
  }

  return result;
};

// Example usage:
const intervals1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(mergeIntervals(intervals1)); // Output: [[1,6],[8,10],[15,18]]

const intervals2 = [
  [1, 4],
  [4, 5],
];
console.log(mergeIntervals(intervals2)); // Output: [[1,5]]
```

### Explanation

Sort the Intervals: The first step is to sort the intervals based on their start times. This ensures that any overlapping intervals are adjacent.
Merge Intervals: As we iterate through the sorted intervals, we compare the current interval with the last interval in the result list. If they overlap (i.e., the current interval's start is less than or equal to the last interval's end), we merge them by updating the end of the last interval. Otherwise, we add the current interval to the result list.
This method ensures that all overlapping intervals are merged efficiently, resulting in a list of non-overlapping intervals that cover all the intervals in the input.

By following this approach, we can handle merging intervals in an optimized manner, ensuring that the solution is both time and space efficient.
