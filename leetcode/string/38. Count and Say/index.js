/*
The count-and-say sequence is the sequence of integers with the first five terms as following:

 1.     1
 2.     11
 3.     21
 4.     1211
 5.     111221
 6.     312211
 7.     13112221
 8.     1113213211
 9.     31131211131221
10.     13211311123113112211

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.
You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.

Note: Each term of the sequence of integers will be represented as a string.

Example 1:
  Input: 1
  Output: "1"
  Explanation: This is the base case.

Example 2:
  Input: 4
  Output: "1211"
  Explanation:
    For n = 3 the term was "21" in which we have two groups "2" and "1", "2" can be read as "12" which means frequency = 1 and value = 2,
    the same way "1" is read as "11", so the answer is the concatenation of "12" and "11" which is "1211".
 */

// Time O(N)
// Space O(1)
const countAndSay = n => {
  let nums = ['1', '1', '11'];
  let current = '11';

  if (n < 3) return nums[n];

  for (let i = 3; i <= n; i++) {
    let next = '';
    let cnt = 1;

    for (let j = 1; j < current.length; j++) {
      if (current[j - 1] === current[j]) {
        cnt++;
      } else {
        next += `${cnt}${current[j - 1]}`;
        cnt = 1;
      }
    }
    if (cnt !== 1) {
      next += `${cnt}${current[current.length - 1]}`;
    }
    if (current[current.length - 1] !== current[current.length - 2]) {
      next += `${1}${current[current.length - 1]}`;
    }
    current = next;
  }
  return current;
};
