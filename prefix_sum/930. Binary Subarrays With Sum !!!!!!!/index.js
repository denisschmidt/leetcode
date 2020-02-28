/*

In an array A of 0s and 1s, how many non-empty subarrays have sum S?

Example 1:
  Input: A = [1,0,1,0,1], S = 2
  Output: 4
  Explanation:
    The 4 subarrays are bolded below:
    [1,0,1,0,1] -> 1, 0, 1
    [1,0,1,0,1] -> 1, 0, 1, 0
    [1,0,1,0,1] -> 0, 1, 0, 1
    [1,0,1,0,1] -> 1, 0, 1

*/

// Time O(N)
// Space O(N)
const numSubarraysWithSum = (nums, target) => {
  let size = nums.length;
  let sum = 0;
  let ans = 0;

  // используем мапу для нахождения всех пар
  let map = new Map();

  for (let i = 0; i < size; i++) {
    sum += nums[i];

    if (map.has(sum - target)) {
      ans += map.get(sum - target);
    }

    // Проверяем кейс, когда текущая сумма равна taget (для получения суммы интервал не требуется)
    if (sum === target) {
      ans++;
    }

    if (!map.has(sum)) {
      map.set(sum, 1);
    } else {
      map.set(sum, map.get(sum) + 1);
    }
  }

  return ans;
};

// Time O(N)
// Space O(1)
const numSubarraysWithSum_II = (nums, s) => {
  return atMost(nums, s) - atMost(nums, s - 1);

  function atMost(nums, s) {
    if (s < 0) return 0;
    let start = 0;
    let ans = 0;

    for (let end = 0; end < nums.length; end++) {
      s -= nums[end];

      while (s < 0) {
        s += nums[start];
        start++;
      }

      ans += end - start + 1;
    }

    return ans;
  }
};

// Time O(N)
// Space O(N)
const numSubarraysWithSum_III = function(nums, target) {
  const size = nums.length;
  let sum = 0;
  let ans = 0;
  let count = Array(size).fill(0);
  count[0] = 1;

  for (let i = 0; i < size; i++) {
    sum += nums[i];

    if (sum >= target) {
      ans += count[sum - target];
    }

    count[sum]++;
  }
  return ans;
};
