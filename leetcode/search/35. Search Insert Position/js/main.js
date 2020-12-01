// Time O(LogN)
// Space O(1)
const searchInsert = (arr, search) => {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] >= search) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return arr[right] < search ? right + 1 : right;
};
