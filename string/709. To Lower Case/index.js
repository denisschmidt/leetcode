/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.


Example 1:

Input: "Hello"
Output: "hello"
Example 2:

Input: "here"
Output: "here"
Example 3:

Input: "LOVELY"
Output: "lovely"

 */

var toLowerCase = function(str) {
  let ans = '';
  let diff = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      ans += String.fromCharCode(str[i].charCodeAt(0) + diff);
      continue;
    }
    ans += str[i];
  }
  return ans;
};
