// Given an integer array nums, find the
// subarray
// with the largest sum, and return its sum.
//
//
//
//   Example 1:
//
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:
//
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:
//
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
//
//
// Constraints:
//
//   1 <= nums.length <= 105
//   -104 <= nums[i] <= 104
//
//
// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// Solution 1: Brute Force
// Time complexity: O(n^2)
// Space complexity: O(1)
const maxSubArray = (nums) => {
  const n = nums.length;
  let maxSum = 0;
  let currentSum = 0;
  if (n === 1) return nums[0];
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      currentSum += nums[j];
      maxSum = Math.max(maxSum, currentSum);
    }
    currentSum = 0;
  }
  if (maxSum === 0) {
    return Math.max(...nums);
  }
  return maxSum;
};

// time complexity: O(n)
// space complexity: O(1)

const maxSubArrayOptimised = (nums) => {
  const n = nums.length;
  let maxSum = 0;
  let currentSum = 0;
  let startIndex = 0;
  let endIndex = 0;
  if (n === 1) return nums[0];
  for (let i = 0; i < n; i++) {
    // require for to track the start index of the subarray. If you need subarray as well
    if (currentSum === 0) {
      startIndex = i;
    }

    currentSum += nums[i];

    if (currentSum < 0) {
      currentSum = 0;
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      // require for to track the end index of the subarray. If you need subarray as well
      endIndex = i;
    }
  }

  if (maxSum === 0) {
    return Math.max(...nums);
  }
  console.log(
    startIndex,
    endIndex,
    "startIndex, endIndex",
    nums.slice(startIndex, endIndex + 1),
  );
  return maxSum;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(nums);
const result2 = maxSubArrayOptimised(nums);
console.log(result);
console.log(result2, "result2");
