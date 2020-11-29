// Time O(1690) 1690×5=8450 operations
// Space O(1690)
const nthUglyNumber = n => {
  let nums = Array(1690).fill(0);
  let i2 = 0;
  let i3 = 0;
  let i5 = 0;

  nums[0] = 1;

  for (let i = 1; i < 1690; i++) {
    let ugly = Math.min(nums[i2] * 2, nums[i3] * 3, nums[i5] * 5);

    nums[i] = ugly;

    if (nums[i2] * 2 == ugly) {
      i2++;
    }

    if (nums[i3] * 3 == ugly) {
      i3++;
    }

    if (nums[i5] * 5 == ugly) {
      i5++;
    }
  }

  return nums[n - 1];
};
