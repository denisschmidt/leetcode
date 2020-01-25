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
const findKthLargest = (nums, k) => {
  let loIndex = 0;
  let hiIndex = nums.length - 1;
  let targetIndex = nums.length - k;

  while (true) {
    // получаем index отсортированного значения
    const partitionIndex = quickSelect(nums, loIndex, hiIndex);

    if (partitionIndex > targetIndex) {
      hiIndex = partitionIndex - 1;
    } else if (partitionIndex < targetIndex) {
      loIndex = partitionIndex + 1;
    } else {
      return nums[targetIndex];
    }
  }
};

function quickSelect(nums, loIndex, hiIndex) {
  let pivotValue = nums[loIndex];
  let pivotIndex = loIndex;
  loIndex++;

  while (loIndex <= hiIndex) {
    if (nums[loIndex] < pivotValue) {
      loIndex++;
    } else if (nums[hiIndex] >= pivotValue) {
      hiIndex--;
    } else {
      swap(nums, loIndex, hiIndex);
    }
  }

  swap(nums, pivotIndex, hiIndex);

  return hiIndex;
}

function swap(nums, i, j) {
  return ([nums[i], nums[j]] = [nums[j], nums[i]]);
}
