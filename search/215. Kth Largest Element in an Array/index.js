/*
Find the kth largest element in an unsorted array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

  Input: [3,2,1,5,6,4] and k = 2
  Output: 5

Example 2:
  Input: [3,2,3,1,2,4,5,5,6] and k = 4
  Output: 4

Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.

 */

// E.g. if the array is reversely sorted and you pick the pivot always as the first element of the partition,
// complexity's going to be O(n^2), because on every iteration you don't gain a lot of information other than the fact that all numbers
// in the subarray are bigger than the pivot.

// Binary Search + Quick Select
// Time O(N)
// Worth case O(N^2)
// Space O(1)
const findKthLargest = (nums, k) => {
  let n = nums.length;
  let left = 0;
  let right = n - 1;
  let targetIndex = n - k;

  while (left <= right) {
    // получаем index отсортированного значения
    let pivotIndex = quickSelect(left, right);

    if (pivotIndex == targetIndex) {
      return nums[targetIndex];
    }

    if (pivotIndex < targetIndex) {
      left = pivotIndex + 1;
    } else {
      right = pivotIndex - 1;
    }
  }

  return nums[left];

  function quickSelect(left, right) {
    let pivotValue = nums[left];
    let pivotIndex = left;
    left++;

    while (left <= right) {
      if (nums[left] < pivotValue) {
        left++;
      } else if (nums[right] >= pivotValue) {
        right--;
      } else {
        swap(left, right);
      }
    }

    swap(pivotIndex, right);

    return right;
  }

  function swap(i, j) {
    return ([nums[i], nums[j]] = [nums[j], nums[i]]);
  }
};
