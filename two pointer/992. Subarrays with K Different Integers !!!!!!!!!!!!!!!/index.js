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

const atMostK = (nums, k) => {
  const n = nums.length;
  let start = 0;
  let end = 0;
  let ans = 0;

  const arr = [];

  while (end < n) {
    let val = arr[nums[end]] || 0;

    if (val === 0) {
      k--;
    }

    arr[nums[end]] = val + 1;

    while (k < 0) {
      val = arr[nums[start]] || 0;
      arr[nums[start]] = val - 1;

      if (arr[nums[start]] === 0) {
        k++;
      }
      start++;
    }

    // [1, 2, 1, 2, 3] i = 0, j = 2  result = j - i + 1 = 3
    // so because we have 3 cases 121, 12, 1
    ans += end - start + 1;
    end++;
  }

  return ans;
};

// Time O(N)
// Space O(K)
const subarraysWithKDistinct = function(nums, k) {
  // используем такое решение так как стандарный подход two pointers рассчитывает atMostK вместо ровно K.
  return atMostK(nums, k) - atMostK(nums, k - 1);
};

let A = [2, 1, 2, 1, 2],
  K = 2;

const res = subarraysWithKDistinct(A, K);
console.log('---', res);
