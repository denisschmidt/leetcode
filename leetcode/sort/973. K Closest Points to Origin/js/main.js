// Time O(N) worst case O(N^2)
// Space O(1)
// Binary Search + Quick Select
const kClosest = (points, k) => {
  const n = points.length;

  let left = 0;
  let right = n - 1;

  while (left <= right) {
    let pivotIndex = quickSort(points, left, right);

    if (pivotIndex === k) break;

    if (pivotIndex > k) {
      right = pivotIndex - 1;
    } else {
      left = pivotIndex + 1;
    }
  }

  return points.slice(0, k);
};

function swap(nums, l, r) {
  return ([nums[l], nums[r]] = [nums[r], nums[l]]);
}

// Получаем расстояние между двумя точками
function getPointerDistance(p1, p2) {
  return Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2);
}

function quickSort(nums, l, r) {
  let pivotValue = nums[l];
  let pivotIndex = l;

  l++;

  while (l <= r) {
    if (getPointerDistance(pivotValue, nums[l]) <= 0) {
      l++;
    } else if (getPointerDistance(pivotValue, nums[r]) >= 0) {
      r--;
    } else {
      swap(nums, l, r);
    }
  }

  swap(nums, pivotIndex, r);

  return r;
}
