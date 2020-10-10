// Time O(LogN)
// Space O(1)
const findPeakElement = nums => {
  let n = nums.length;

  let lo = 0;
  let hi = n - 1;

  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid;
    }

    if (mid == n - 1 && nums[mid] > nums[mid - 1]) {
      return mid;
    }

    if (mid == 0 && nums[mid] > nums[mid + 1]) {
      return mid;
    }

    // Если nums[mid + 1] > nums[mid] частично решение уже найдено и нужно идти в правую сторону и искать дальше
    if (nums[mid] < nums[mid + 1]) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return lo;
};
