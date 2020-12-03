// Two pointers

// Complexity analysis
// Time complexity: O(N)
// Each element can be visited atmost twice, once by the right pointer(i) and (atmost)once by the left pointer.
// Space complexity: O(1) extra space. Only constant space required for left, sum, ans and i.
const minSubArrayLen = (s, nums) => {
  let start = 0;
  let end = 0;
  let sum = 0;
  let min = Number.MAX_VALUE;

  while (end < nums.length) {
    sum += nums[end++];

    while (sum >= s) {
      if (end - start < min) {
        min = end - start;
      }
      sum -= nums[start++];
    }
  }

  return min == Number.MAX_VALUE ? 0 : min;
};

// Complexity analysis
// Time complexity: O(N^2)
// Time complexity to find all the subarrays is O(n^2)

// Sum of the subarrays is calculated in O(1) time.
// Thus, the total time complexity: O(n^2 * 1)
// Space complexity: O(N) extra space.
const minSubArrayLen3 = function (target, nums) {
  let sums = [];
  sums.push(nums[0]);
  let ans = Number.MAX_VALUE;

  for (let i = 1; i < nums.length; i++) {
    sums[i] += sums[i - 1] + nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      // важный момент
      // sums[j] - sums[i] as => sum i + 1 to j
      let sum = sums[j] - sums[i] + nums[i];

      if (sum >= target) {
        ans = Math.min(ans, j - i + 1);
        break;
      }
    }
  }

  return ans === Number.MAX_VALUE ? 0 : ans;
};
