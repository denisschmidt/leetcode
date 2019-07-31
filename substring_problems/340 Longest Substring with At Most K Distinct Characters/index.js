/*
This problem was asked by Amazon.

Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

 */

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

const res = lengthOfLongestSubstring('abcba', 2);
console.log('---', res);
