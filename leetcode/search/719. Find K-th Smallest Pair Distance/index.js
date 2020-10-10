/*
Given an integer array, return the k-th smallest distance among all the pairs. 
The distance of a pair (A, B) is defined as the absolute difference between A and B.

Example 1:
  Input: nums = [1,3,1] k = 1
  Output: 0
  Explanation:
    Here are all the pairs:
    (1,3) -> 2
    (1,1) -> 0
    (3,1) -> 2

Then the 1st smallest distance pair is (1,1), and its distance is 0.

Note:
  2 <= len(nums) <= 10000.
  0 <= nums[i] < 1000000.
  1 <= k <= len(nums) * (len(nums) - 1) / 2.

 */

// Time O(N*Log*D + N*Log*N)
// Space O(1)
const smallestDistancePair = (nums, k) => {
  let n = nums.length;
  nums.sort((a, b) => a - b);

  let lo = nums[0];
  let hi = nums[n - 1] - nums[0];

  for (let i = 1; i < n; i++) {
    lo = Math.min(lo, nums[i] - nums[i - 1]);
  }

  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    let cnt = 0;

    // Возвращаем количество пар, у которых разница будет меньше или равна mid.
    for (let i = 0; i < n; i++) {
      let j = i;
      while (j < n && nums[j] - nums[i] <= mid) j++;
      cnt += j - i - 1;
    }

    if (cnt < k) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  return lo;
};
