/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//1248. Count Number of Nice Subarrays

var numberOfSubarrays = function(nums, k) {
  let ans = 0;

  let start = 0;
  let end = 0;
  let cnt = 0;

  while (end < nums.length) {
    if (nums[end] % 2 === 1) {
      k--;
      cnt = 0;
    }

    while (k == 0) {
      if (nums[start] % 2 === 1) {
        k++;
      }
      start++;
      cnt++;
    }

    ans += cnt;
    end++;
  }

  return ans;
};
