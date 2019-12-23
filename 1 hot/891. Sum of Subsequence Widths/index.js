/*
Given an array of integers A, consider all non-empty subsequences of A.

For any sequence S, let the width of S be the difference between the maximum and minimum element of S.

Return the sum of the widths of all subsequences of A.

As the answer may be very large, return the answer modulo 10^9 + 7.

Example 1:
  Input: [2,1,3]
  Output: 6
  Explanation:
    Subsequences are [1], [2], [3], [2,1], [2,3], [1,3], [2,1,3].
    The corresponding widths are 0, 0, 0, 1, 1, 2, 2.
    The sum of these widths is 6.

Note:
  1 <= A.length <= 20000
  1 <= A[i] <= 20000

 */

/*
  Последовательность от мин значения до максимального содержит:
   1) diff * 2 ^(j - i - 1) значений, где diff - разница между макс индексом и минимальным индексом

  Если раскрыть это выражение то получим что имеется 2^i последовательности, в которых nums[i] является максимальным.
  Также есть 2^(n - i - 1) последовательностей, в которых nums[i] минимально.


 */

// Time O(NLogN)
// Space O(1)
const sumSubseqWidths = nums => {
  if (!nums.length) return 0;
  let mod = 1e9 + 7;

  let size = nums.length;
  let result = 0;
  let c = 1;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < size; i++, c = (c << 1) % mod) {
    result += nums[i] * c - nums[size - i - 1] * c;
    result = result % mod;
  }

  return result % mod;
};

// TLE
// Time O(N^2)
// Space O(1)
const sumSubseqWidths_I = nums => {
  if (!nums.length) return 0;
  let mod = 1e9 + 7;

  let size = nums.length;

  nums.sort((a, b) => a - b);

  let result = 0;
  for (let i = 0; i < size; i++) {
    for (let j = size - 1; j > i; j--) {
      // overflow
      result += ((nums[j] - nums[i]) * (Math.pow(2, j - i - 1) % mod)) % mod;
    }
  }

  return result % mod;
};
