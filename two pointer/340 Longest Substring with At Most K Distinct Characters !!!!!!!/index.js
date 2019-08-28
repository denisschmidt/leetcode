/*
Given a string, find the length of the longest substring T that contains at most k distinct characters.

Example 1:
  Input: s = "eceba", k = 2
  Output: 3
  Explanation: T is "ece" which its length is 3.

Example 2:
  Input: s = "aa", k = 1
  Output: 2
  Explanation: T is "aa" which its length is 2.

 */
const str = 'abcba';
const k = 2;

// Two Pointers
// Time O(N)
// Space O(K)
const lengthOfLongestSubstring = (str, k) => {
  let start = 0;
  let end = 0;
  let map = {};
  let counter = 0;
  let maxLength = Number.MIN_VALUE;
  let maxStartIndex = 0;

  for (let char of str) {
    map[char] = 0;
  }

  while (end < str.length) {
    if (map[str[end]] === 0) {
      counter++;
    }

    map[str[end]]++;
    end++;

    while (counter > k) {
      map[str[start]]--;

      if (map[str[start]] === 0) {
        counter--;
      }

      start++;
    }

    if (end - start > maxLength) {
      maxLength = end - start;
      maxStartIndex = start;
    }
  }
  return maxLength === Number.MIN_VALUE ? '' : str.substr(maxStartIndex, maxLength);
};

const res = lengthOfLongestSubstring(str, k);
console.log('---', res);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Brute Force
// Time O(N^2 * k) since we use N^2 to generate each possible substring, and then take k to check each character.
const lengthOfLongestSubstring2 = (str, k) => {
  let currentLongestSubstring = '';

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      let substring = str.substring(i, j);
      let set = new Set(substring);
      if (set.size <= k && currentLongestSubstring.length < substring.length) {
        currentLongestSubstring = substring;
      }
    }
  }
  return currentLongestSubstring;
};
const res2 = lengthOfLongestSubstring2(str, k);
console.log('---', res2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const lengthOfLongestSubstring3 = (str, k) => {
  let currentLongestSubstring = '';

  for (let i = 0; i < str.length; i++) {}
  return currentLongestSubstring;
};

const res3 = lengthOfLongestSubstring3(str, k);
console.log('---', res3);
