/*
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  let result = '';
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;

  while (i >= 0 || j >= 0 || carry > 0) {
    carry += i >= 0 ? parseInt(a[i--]) : 0;
    carry += j >= 0 ? parseInt(b[j--]) : 0;
    result = (carry % 2) + result;
    carry = parseInt(carry / 2);
  }
  return result;
};

const res = addBinary('11', '1');

console.log('---', res);
