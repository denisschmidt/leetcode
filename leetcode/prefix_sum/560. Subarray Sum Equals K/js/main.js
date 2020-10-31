// Hashmap solution
// Time O(N)
// Space O(N)
const subarraySum = (nums, k) => {
  let n = nums.length;
  let map = { 0: 1 };
  let sum = 0;
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    sum += nums[i];

    if (map[sum - k] > 0) {
      cnt += map[sum - k];
    }

    map[sum] = ~~map[sum] + 1;
  }

  return cnt;
};
