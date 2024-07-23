const threeSum = (nums) => {
  const result = [];

  nums.sort((a, b) => a - b);
  const len = nums.length;
  if (len < 3) return result;

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = len - 1;
  }
};

const nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums)); // [[-1, -1, 2], [-1, 0, 1]]
