/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//1248. Count Number of Nice Subarrays

var numberOfSubarrays = function(nums, k) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    let cnt = nums[i] % 2 !== 0 ? 1 : 0;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] % 2 !== 0) {
        cnt++;
      }

      if (cnt >= k) {
        cnt++;
      }
    }

    ans += cnt;
  }

  return ans;
};
