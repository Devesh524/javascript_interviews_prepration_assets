// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
//
//   If there is no common prefix, return an empty string "".
//
//
//
//   Example 1:
//
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//
//
//   Constraints:
//
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */

// time complexity - o(n)
// space complexity - o(1)
const longestCommonPrefix = (strs) => {
  const n = strs.length;
  const firstStr = strs[0];
  let result = '';
  for (let i = 0; i < firstStr.length; i++) {
    for (let j = 1; j < n; j++) {
      if (strs[j][i] !== firstStr[i]) {
        return result;
      }
    }
    result += firstStr[i];
  }

  return result;
};

const result = longestCommonPrefix(['flower', 'flow', 'flight']);
console.log(result); // fl
