/*

Given a positive integer, output its complement number. 
The complement strategy is to flip the bits of its binary representation.

 
Example 1:
  Input: 5
  Output: 2
  Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
 

Example 2:
  Input: 1
  Output: 0
  Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
 

Note:
  The given integer is guaranteed to fit within the range of a 32-bit signed integer.
  You could assume no leading zero bit in the integer’s binary representation.
  This question is the same as 1009: https://leetcode.com/problems/complement-of-base-10-integer/

*/

const findComplement = num => {
  let s = [];
  let start = false;

  for (let i = 31; i >= 0; i--) {
    let bit = (num >> i) & 1;

    if (bit == 0 && start == false) {
      s.push(bit);
    } else {
      start = true;
      s.push(bit ^ 1);
    }
  }

  return parseInt(s.join(''), 2);
};
