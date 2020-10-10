/*
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
  Input: "hello"
  Output: "holle"

Example 2:
  Input: "leetcode"
  Output: "leotcede"

*/

// Time O(N)
// Space O(1)
const reverseVowels = s => {
  if (s == '') return '';

  let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let l = 0;
  let r = s.length - 1;

  s = s.split('');

  while (l < r) {
    if (!vowels.has(s[l])) {
      l++;
    } else if (!vowels.has(s[r])) {
      r--;
    } else {
      swap(s, l, r);
      l++;
      r--;
    }
  }

  return s.join('');

  function swap(nums, i, j) {
    return ([nums[i], nums[j]] = [nums[j], nums[i]]);
  }
};
