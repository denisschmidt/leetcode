/*

Given 2 integers n and start. Your task is return any permutation p of (0,1,2.....,2^n -1) such that :

p[0] = start
p[i] and p[i+1] differ by only one bit in their binary representation.
p[0] and p[2^n -1] must also differ by only one bit in their binary representation.
 
Example 1:
  Input: n = 2, start = 3
  Output: [3,2,0,1]
  Explanation: The binary representation of the permutation is (11,10,00,01). 
  All the adjacent element differ by one bit. Another valid permutation is [3,1,0,2]

Example 2:
  Input: n = 3, start = 2
  Output: [2,6,7,5,4,0,1,3]
  Explanation: The binary representation of the permutation is (010,110,111,101,100,000,001,011).
 

Constraints:
  1 <= n <= 16
  0 <= start < 2 ^ n

*/

// Time O(2^N)
// Space O(2^N)
const circularPermutation = (n, start) => {
  let total = 1 << n;
  let ans = [];

  // i ^ i >> 1 сгенерирует gray code для всех чисел, то есть чисел, которые отличаются только одним битом.
  // 0 ^ start = start (например, start = 110, у нас 0 ^ start = 110)
  // Если b1 и b2 отличаются только одним битом, start ^ b1 и start ^ b2 также будут отличаются только одним битом.
  // Например, start = 110, b1 = 111, b2 = 101, тогда start ^ b1 = 001, start ^ b2 = 011).

  for (let i = 0; i < total; i++) {
    ans.push(start ^ i ^ (i >> 1));
  }
  return ans;
};

// Time O(2^N)
// Space O(2^N)
const circularPermutation_II = (n, start) => {
  let total = 1 << n;
  let grayCodes = helper(n);
  let index = 0;

  for (let i = 0; i < total; i++) {
    if (grayCodes[i] == start) {
      index = i;
      break;
    }
  }

  return [...grayCodes.slice(index), ...grayCodes.slice(0, index)];

  function helper(n) {
    let ans = [];

    for (let i = 0; i < total; i++) {
      ans.push(i ^ (i >> 1));
    }

    return ans;
  }
};

// TLE
const circularPermutation_II = function(n, start) {
  let maxLen = Math.pow(2, n);
  let ans = [];

  helper(maxLen - 1, [start]);

  return ans;

  function helper(index, comb) {
    if (comb.length == maxLen && getCountOnes(comb[0], comb[comb.length - 1])) {
      ans = [...comb];
      return true;
    }

    for (let num = 0; num < maxLen; num++) {
      if (comb.includes(num)) continue;

      if (getCountOnes(comb[comb.length - 1], num)) {
        comb.push(num);

        let res = helper(index - 1, comb);

        if (res == true) return ans;

        comb.pop();
      }
    }
  }

  function getCountOnes(x, y) {
    let xor = x ^ y;
    let cnt = 0;

    for (let i = 0; i < 32; i++) {
      let k = (xor >> i) & 1;

      if (k == 1) cnt++;
      if (cnt > 1) return false;
    }

    return cnt == 1;
  }
};
