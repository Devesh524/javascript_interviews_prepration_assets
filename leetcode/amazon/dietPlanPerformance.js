//
// A dieter consumes calories[i] calories on the i-th day.
//
//   Given an integer k, for every consecutive sequence of k days (calories[i], calories[i+1], ..., calories[i+k-1] for all 0 <= i <= n-k), they look at T, the total calories consumed during that sequence of k days (calories[i] + calories[i+1] + ... + calories[i+k-1]):
//
// If T < lower, they performed poorly on their diet and lose 1 point;
// If T > upper, they performed well on their diet and gain 1 point;
// Otherwise, they performed normally and there is no change in points.
//   Initially, the dieter has zero points. Return the total number of points the dieter has after dieting for calories.length days.
//
//   Note that the total points can be negative.
//
//
//
//   Example 1:
//
// Input: calories = [1,2,3,4,5], k = 1, lower = 3, upper = 3
// Output: 0
// Explanation: Since k = 1, we consider each element of the array separately and compare it to lower and upper.
//   calories[0] and calories[1] are less than lower so 2 points are lost.
//   calories[3] and calories[4] are greater than upper so 2 points are gained.
/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */

const dietPlanPerformance = function (calories, k, lower, upper) {
  let points = 0;
  let currentSum = 0;

  // Calculate the sum of the first window of size k
  for (let i = 0; i < k; i++) {
    currentSum += calories[i];
  }

  // Evaluate the first window
  if (currentSum < lower) {
    points--;
  } else if (currentSum > upper) {
    points++;
  }

  // Slide the window over the array
  for (let i = k; i < calories.length; i++) {
    currentSum += calories[i] - calories[i - k]; // Add the next element and remove the first element of the previous window

    if (currentSum < lower) {
      points--;
    } else if (currentSum > upper) {
      points++;
    }
  }

  return points;
};

const calories = [3, 2],
  k = 2,
  lower = 0,
  upper = 1;
console.log(dietPlanPerformance(calories, k, lower, upper)); // 0
