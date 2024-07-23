// 1512. Number of Good Pairs

// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

const numIdenticalPairs = (nums) => {
  const len = nums.length;
  let count = 0;
  // for (let i = o; i < len; i++) {
  //   for (let j = i + 1; j < len; j++) {
  //     if (nums[i] === nums[j]) {
  //       count++;
  //     }
  //   }
  // }
  let map = new Map();
  for (let i = 0; i < len; i++) {
    if (map.has(nums[i])) {
      count += map.get(nums[i]);
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  return count;
};

const result = numIdenticalPairs([1, 2, 3, 1, 1, 3]);
console.log(result); // 4
