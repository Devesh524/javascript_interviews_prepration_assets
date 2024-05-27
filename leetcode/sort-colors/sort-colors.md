/\*\*

- Sorts an array of colors represented by integers in-place.
- This function uses a simple bubble sort algorithm.
- Time complexity: O(n^2)
- Space complexity: O(1)
-
- @param {number[]} nums - The array of colors to sort.
- @returns {number[]} The sorted array of colors.
  \*/
  const sortColors = (nums) => {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
  if (nums[i] > nums[j]) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  }
  }
  return nums;
  }

/\*\*

- Sorts an array of colors represented by integers in-place.
- This function uses a counting sort algorithm.
- Time complexity: O(2n)
- Space complexity: O(1)
-
- @param {number[]} nums - The array of colors to sort.
- @returns {number[]} The sorted array of colors.
  \*/
-

```
    const sortColorBetter = (nums) => {
      const n = nums.length;
      let zeros = 0, ones = 0, twos = 0;
      const result = [];
      for (let i = 0; i < n; i++) {
       if (nums[i] === 0) {
         zeros++;
       } else if (nums[i] === 1) {
         ones++;
       } else {
         twos++;
       }
      }
     Array(zeros).fill(0).forEach((num) => result.push(num));
     Array(ones).fill(1).forEach((num) => result.push(num));
     Array(twos).fill(2).forEach((num) => result.push(num));
     return result;
}

```

/\*\*

- Sorts an array of colors represented by integers in-place.
- This function uses the Dutch National Flag algorithm.
- Time complexity: O(n)
- Space complexity: O(1)
-
- @param {number[]} nums - The array of colors to sort.
- @returns {number[]} The sorted array of colors.
  \*/

```
const sortColorOptimised = (nums) => {
  const n = nums.length;
  let low = 0, high = n - 1, mid = 0;
  while (mid <= high) {
      if (nums[mid] === 0) {
        [nums[low], nums[mid]] = [nums[mid], nums[low]];
        low++;
        mid++;
      } else if (nums[mid] === 1) {
        mid++;
      } else  {
        [nums[mid], nums[high]] = [nums[high], nums[mid]];
        high--;
       }
  }
  return nums;
 }

```

```
const result =  sortColors([2,0,2,1,1,0]);
const resultBetter = sortColorBetter([2,0,2,1,1,0]);
const resultOptimised = sortColorOptimised([2,0,2,1,1,0]);
console.log(result); // [0,0,1,1,2,2]
console.log(resultBetter, "resultBetter"); // [0,0,1,1,2,2]
console.log(resultOptimised, "resultOptimised"); // [0,0,1,1,2,2]


```
