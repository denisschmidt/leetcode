/*

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Now your job is to find the total Hamming distance between all pairs of the given numbers.

Example:
  Input: 4, 14, 2
  Output: 6
  Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
    showing the four bits relevant in this case). So the answer will be:
    HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.

Note:
  Elements of the given array are in the range of 0 to 10^9
  Length of the array will not exceed 10^4.

*/

// Time O(N)
// Space O(1)
const totalHammingDistance = nums => {
  let n = nums.length;
  let countOfOnes = Array(32).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 32; j++) {
      let ithBit = (nums[i] >> j) & 1;

      countOfOnes[j] += ithBit;
    }
  }

  let res = 0;
  for (let i = 0; i < 32; i++) {
    res += countOfOnes[i] * (n - countOfOnes[i]);
  }

  return res;
};

// Time O(N^2)
// Space O(1)
const totalHammingDistance_II = nums => {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      res += hammingDistance(nums[i], nums[j]);
    }
  }

  return res;

  function hammingDistance(x, y) {
    let xor = x ^ y;
    let cnt = 0;
    for (let i = 0; i < 32; i++) {
      let ithBit = (xor >> i) & 1;

      if (ithBit == 1) {
        cnt++;
      }
    }
    return cnt;
  }
};
