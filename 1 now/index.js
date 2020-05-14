/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */

// Time O(NLogN)
// Space O(N)
var minTaps = function(n, ranges) {
  let nums = [];
  for (let i = 0; i < ranges.length; i++) {
    nums.push([i - ranges[i], i + ranges[i]]);
  }

  nums.sort((a, b) => a[0] - b[0]);

  let i = 0;
  let start = 0;
  let end = 0;
  let cnt = 0;

  while (i < ranges.length && start < n) {
    while (i < nums.length && start >= nums[i][0]) {
      end = Math.max(end, nums[i++][1]);
    }

    if (start == end) {
      return -1;
    }

    cnt++;
    start = end;
  }

  return cnt;
};

minTaps(7, [1, 2, 1, 0, 2, 1, 0, 1]);
