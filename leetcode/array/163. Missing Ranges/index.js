/*
Given a sorted integer array nums, where the range of elements are in the inclusive range [lower, upper], return its missing ranges.

Example:
  Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
  Output: ["2", "4->49", "51->74", "76->99"]

 */

// Time O(N)
// Space O(N)
const findMissingRanges = (nums, lower, upper) => {
  const ans = [];

  let next = lower;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < next) continue;

    if (next === nums[i]) {
      next++;
      continue;
    }

    ans.push(getRange(next, nums[i] - 1));

    next = nums[i] + 1;
  }

  if (next <= upper) {
    ans.push(getRange(next, upper));
  }

  return ans;

  function getRange(start, end) {
    return end - start === 0 ? `${start}` : `${start}->${end}`;
  }
};

// TLE
// Time O(N)
// Space O(N)
const findMissingRanges2 = (nums, lower, upper) => {
  if (nums.length === 0) {
    return upper - lower === 0 ? `${lower}` : `${lower}->${upper}`;
  }
  const ans = [];
  const set = new Set(nums);
  let start = Math.min(nums[0], lower);
  for (let i = start; i <= upper; i++) {
    if (set.has(i)) continue;
    let j = i + 1;
    while (set.has(j) === false && j <= upper) {
      j++;
    }
    let str = j - i === 1 ? `${i}` : `${i}->${j - 1}`;
    i = j;
    ans.push(str);
  }
  return ans;
};
