const minSwaps = nums => {
  let range = 0;

  for (let n of nums) {
    if (n == 1) range++;
  }

  let n = nums.length;
  let lo = 0;
  let hi = 0;
  let cnt = 0;
  let max = 0;

  while (hi < nums.length) {
    while (hi < n && hi - lo < range) {
      if (nums[hi++] == 1) {
        cnt++;
      }
    }

    max = Math.max(max, hi - cnt);

    if (nums[lo++] == 1) {
      cnt--;
    }
  }

  return max;
};
