/*
This problem was asked by Amazon.

Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

 */
const str = 'abcba';
const k = 2;

// Two Pointers
// Time O(N)
// Space O(N)
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
