// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest
// substring
// without repeating characters.
//
//
//
//   Example 1:
//
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
//
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
//
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
//
//
//   Constraints:
//
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

const lengthOfLongestSubstring = (s) => {
  const len = s.length;
  if (len === 0) {
    return 0;
  }
  const map = {};
  let left = 0;
  let right = 0;
  let max = 0;
  while (right < len) {
    if (map[s[right]] !== undefined) {
      left = Math.max(left, map[s[right]] + 1);
    }
    map[s[right]] = right;
    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
};

const result = lengthOfLongestSubstring('abcabcbbabc');
console.log(result); // 3
