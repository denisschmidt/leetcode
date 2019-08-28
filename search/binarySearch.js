// Time O(logN) делим  N / 2 N = 2^f(N)
// Space O(1)
function binarySearch(arr, search) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] >= search) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return arr[right] === search ? right : -1;
}
