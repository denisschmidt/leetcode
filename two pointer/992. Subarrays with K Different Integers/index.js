/*

Given an array A of positive integers, call a (contiguous, not necessarily distinct) subarray of A good
if the number of different integers in that subarray is exactly K.

(For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.)

Return the number of good subarrays of A.

Example 1:
  Input: A = [1,2,1,2,3], K = 2
  Output: 7
  Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2].

Example 2:
  Input: A = [1,2,1,3,4], K = 3
  Output: 3
  Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
 
Note:
  1 <= A.length <= 20000
  1 <= A[i] <= A.length
  1 <= K <= A.length

 */

// Two Pointers
// Time O(N)
// Space O(K)
const subarraysWithKDistinct = function(nums, k) {
  // Стандарный подход two pointers рассчитывает atMostK вместо ровно K.
  return atMostK(nums, k) - atMostK(nums, k - 1);
};

function atMostK(nums, k) {
  let start = 0;
  let end = 0;
  let ans = 0;
  let counts = [];

  nums.forEach(val => {
    counts[val] = 0;
  });

  while (end < nums.length) {
    if (counts[nums[end]] === 0) {
      k--;
    }

    counts[nums[end++]]++;

    while (k < 0) {
      if (counts[nums[start]] === 1) {
        k++;
      }

      counts[nums[start++]]--;
    }

    ans += end - start;
  }

  return ans;
}
