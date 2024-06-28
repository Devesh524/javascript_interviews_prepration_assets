// 128. Longest Consecutive Sequence
// Medium
// Topics
// Companies
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  const set = new Set(nums);
  console.log(set, 'set');
  let longest = 0;
  for (let num of set) {
    console.log(num - 1, 'num - 1', set.has(num - 1));
    if (set.has(num - 1)) continue;
    console.log('<--- reached on line 28 ----->');
    let currentNum = num;
    let currentStreak = 1;
    while (set.has(currentNum + 1)) {
      currentNum++;
      currentStreak++;
    }
    longest = Math.max(longest, currentStreak);
  }
  return longest;
};

const nums = [100, 4, 200, 1, 3, 2];
const result = longestConsecutive(nums);

console.log(result);

// time complexity - O(n)
// space complexity - O(n)
