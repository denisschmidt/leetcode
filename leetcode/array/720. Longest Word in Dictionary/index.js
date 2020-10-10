/*
Given a list of strings words representing an English Dictionary, 
find the longest word in words that can be built one character at a time by other words in words. 

If there is more than one possible answer, return the longest word with the smallest lexicographical order.

If there is no answer, return the empty string.

Example 1:
  Input: words = ["w","wo","wor","worl", "world"]
  Output: "world"

Explanation:
  The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".

Example 2:
  Input: words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
  Output: "apple"

Explanation:
  Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".

All the strings in the input will only contain lowercase letters.

The length of words will be in the range [1, 1000].

The length of words[i] will be in the range [1, 30].
 */

const sortStr = (a, b) => {
  if (a.length === b.length) {
    if (b < a) return -1;
    if (b > a) return 1;
    return 0;
  }
  return a.length - b.length;
};

/**
 * @param {string[]} words
 * @return {string}
 */
const longestWord = function (words) {
  words.sort(sortStr);
  const set = new Set(words);
  let ans = '';
  let isValid = false;

  for (let i = words.length - 1; i >= 0; i--) {
    const wordChars = words[i];
    isValid = true;

    for (let i = 0; i < wordChars.length; i++) {
      if (!set.has(wordChars.slice(0, i + 1))) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      ans = wordChars;
      break;
    }
  }
  return ans;
};

const world = ['english', 'history'];
const res = longestWord(world);
console.log('---', res);
