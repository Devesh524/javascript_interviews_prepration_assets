// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
//
//   There is only one repeated number in nums, return this repeated number.
//
//   You must solve the problem without modifying the array nums and uses only constant extra space.
//
//
//
//   Example 1:
//
// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:
//
// Input: nums = [3,1,3,4,2]
// Output: 3
// Example 3:
//
// Input: nums = [3,3,3,3,3]
// Output: 3
//
//
// Constraints:
//
//   1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears two or more times.

// time complexity - o(n^2)
// space complexity - o(1)
const findDuplicateBruteForce = (nums) => {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && nums[i] === nums[j]) {
        return nums[i];
      }
    }
  }
};
// time complexity - o(n)
// space complexity - o(n)
const findDuplicate = (nums) => {
  const n = nums.length;
  const obj = {};
  for (let i = 0; i < n; i++) {
    if (obj[nums[i]]) {
      return nums[i];
    } else {
      obj[nums[i]] = 1;
    }
  }
};

const result = findDuplicate([1, 3, 4, 2, 2]);
const result2 = findDuplicateBruteForce([1, 3, 4, 2, 2]);

console.log(result); // 2
console.log(result2);
