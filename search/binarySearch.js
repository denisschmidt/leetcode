// На каждом шаге мы делим N => N / 2  -> N / 4 -> ... -> 1 -> 0 что дает O(logN)

// A iterative binary search
// Time O(logN)
// Space O(1)
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    // так же середину можно найти вот так: let mid = (right + left) >>> 1;
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return nums[left] === target ? left : -1;
}

// A recursive binary search function
function binarySearch_II(nums, target) {
  let index = find(0, nums.length - 1);

  return index;

  function find(lo, hi) {
    if (lo <= hi) {
      let mid = lo + Math.floor((hi - lo) / 2);

      if (nums[mid] === target) {
        return mid;
      }

      if (nums[mid] > target) {
        return find(lo, mid - 1);
      } else {
        return find(mid + 1, hi);
      }
    }
    return -1;
  }
}
