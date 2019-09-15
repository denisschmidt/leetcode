// На каждом шаге мы делим N => N / 2 -> N / 4 -> ... -> 1 -> 0 что дает O(logN)

// Time O(logN)
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
