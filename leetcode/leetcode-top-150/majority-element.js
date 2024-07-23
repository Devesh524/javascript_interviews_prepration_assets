/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();
  let element;

  if (nums.length === 1) {
    return nums[0];
  }

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const newCount = map.get(nums[i]) + 1;
      if (newCount > nums.length / 2) {
        element = nums[i];
        return element;
      }
      map.set(nums[i], newCount);
    } else {
      map.set(nums[i], 1);
    }
  }
  return element;
};

const nums = [3, 2, 3];
const result = majorityElement(nums);
console.log(result); // 3
