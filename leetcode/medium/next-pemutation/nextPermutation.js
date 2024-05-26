// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
//
//   For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
//   The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).
//
// For example, the next permutation of arr = [1,2,3] is [1,3,2].
//   Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
//   While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
//   Given an array of integers nums, find the next permutation of nums.
//
//   The replacement must be in place and use only constant extra memory.

const nextPermutation = (nums) => {
  let index = -1;
  const n = nums.length;

  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      index = i;
      break;
    }
  }

  if (index === -1) {
    nums.reverse();
  } else {
    for (let j = n - 1; j > index; j--) {
      if (nums[index] < nums[j]) {
        // Swap them
        [nums[index], nums[j]] = [nums[j], nums[index]];
        break;
      }
    }
    let left = index + 1;
    let right = n - 1;
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }
  return nums;
};

const nextPermutationOptimized = (nums) => {
  let i = nums.length - 2;

  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  const toReverse = nums.splice(i + 1).reverse();
  nums.push(...toReverse);
  return nums;
};

const result = nextPermutationOptimized([1, 3, 2]);
console.log(result); // [2, 3, 1, 4, 5, 0, 0]
