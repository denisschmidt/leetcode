/*
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
  Input: "hello"
  Output: "holle"

Example 2:
  Input: "leetcode"
  Output: "leotcede"

 */

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
  if (!s) {
    return s;
  }
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let start = 0, end = s.length - 1;
  let charArr = s.split('');

  while (start < end) {
    while (start < end && !vowels.includes(charArr[start])) {
      start++;
    }

    while (start < end && !vowels.includes(charArr[end])) {
      end--;
    }

    let temp = charArr[start];
    charArr[start] = charArr[end];
    charArr[end] = temp;

    start++;
    end--;
  }
  return charArr.join('');
};

const res = reverseVowels('leetcode');
console.log('--', res);








