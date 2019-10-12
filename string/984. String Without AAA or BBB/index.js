/*
Given two integers A and B, return any string S such that:

S has length A + B and contains exactly A 'a' letters, and exactly B 'b' letters;
The substring 'aaa' does not occur in S;
The substring 'bbb' does not occur in S.

Example 1:
  Input: A = 1, B = 2
  Output: "abb"
  Explanation: "abb", "bab" and "bba" are all correct answers.

Example 2:
  Input: A = 4, B = 1
  Output: "aabaa"
 

Note:

0 <= A <= 100
0 <= B <= 100
It is guaranteed such an S exists for the given A and B.

 */

// Time O(A + B)
// Space O(A + B)
const strWithout3a3b = function(A, B) {
  let ans = '';
  let firstChar;
  let firstVal;

  firstChar = A > B ? 'a' : 'b';
  firstVal = A > B ? A : B;

  let secondChar = firstChar === 'a' ? 'b' : 'a';
  let secondVal = firstChar === 'a' ? B : A;

  while (firstVal > 0) {
    ans += firstChar;
    firstVal--;

    if (firstVal > secondVal) {
      ans += firstChar;
      firstVal--;
    }
    if (secondVal > 0) {
      ans += secondChar;
      secondVal--;
    }
  }

  return ans;
};