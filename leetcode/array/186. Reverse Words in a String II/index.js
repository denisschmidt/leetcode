/*
Given an input string , reverse the string word by word. 

Example:

Input:  ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]

Note:
  A word is defined as a sequence of non-space characters.
  The input string does not contain leading or trailing spaces.
  The words are always separated by a single space.

Follow up: Could you do it in-place without allocating extra space?


["b","l","u","e", " ", "i", "s", " ", "s", "k", "y", ]


 */

// Time O(N)
// Space O(N)
const reverseWords = function (str) {
  if (str.length === 0) return str;
  let i = str.length - 1;

  while (str[i] !== ' ' && i >= 0) i--;

  if (i === 0) return str;

  let cur = i - 1;
  let prev = i;

  while (cur >= 0) {
    if (str[cur] !== ' ') {
      cur--;
    } else {
      for (let j = cur; j < prev; j++) str.push(str[j]);

      prev = cur;
      cur--;
    }
  }

  for (let j = cur + 1; j < prev; j++) {
    if (j === cur + 1) str.push(' ');
    str.push(str[j]);
  }

  str.splice(0, i + 1);
};

/*

Алгоритм 2

1) Реверснуть всю строку

2) Потом реверснуть каждое слово

3) Реверснуть последнее слово, если есть только одно слово, это решит угловой случай

 */
