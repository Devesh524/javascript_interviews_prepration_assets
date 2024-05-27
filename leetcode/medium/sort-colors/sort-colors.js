// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
//
//   We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
//
//   You must solve this problem without using the library's sort function.
//
//
//
// Example 1:
//
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:
//
// Input: nums = [2,0,1]
// Output: [0,1,2]
//
//
// Constraints:
//
//   n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.
//

// time complexity - O(n^2)
// space complexity - O(1)
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
};

// time complexity - O(2n)
// space complexity - O(1)
const sortColorBetter = (nums) => {
  const n = nums.length;
  let zeros = 0;
  let ones = 0;
  let twos = 0;
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

  Array(zeros)
    .fill(0)
    .forEach((num) => result.push(num));
  Array(ones)
    .fill(1)
    .forEach((num) => result.push(num));
  Array(twos)
    .fill(2)
    .forEach((num) => result.push(num));
  return result;
};

// time complexity - O(n)
// space complexity - O(1)
// dutch national flag algorithm
const sortColorOptimised = (nums) => {
  const n = nums.length;
  let low = 0,
    high = n - 1,
    mid = 0;
  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
  return nums;
};

const result = sortColors([2, 0, 2, 1, 1, 0]);
const resultBetter = sortColorBetter([2, 0, 2, 1, 1, 0]);
const resultOptimised = sortColorOptimised([2, 0, 2, 1, 1, 0]);
console.log(result); // [0,0,1,1,2,2]
console.log(resultBetter, 'resultBetter'); // [0,0,1,1,2,2]
console.log(resultOptimised, 'resultOptimised'); // [0,0,1,1,2,2]
