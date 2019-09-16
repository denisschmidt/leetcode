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
const swap = (nums, i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

const partition = (nums, loIndex, hiIndex) => {
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
};

// Time O(N)
// Worth case O(N^2)

// E.g. if the array is reversely sorted and you pick the pivot always as the first element of the partition,
// complexity's going to be O(n^2), because on every iteration you don't gain a lot of information other than the fact that all numbers
// in the subarray are bigger than the pivot.

// Binary Search + Quick Select
const findKthLargest2 = (nums, k) => {
  let loIndex = 0;
  let hiIndex = nums.length - 1;
  let targetIndex = nums.length - k;

  while (true) {
    let partitionIndex = partition(nums, loIndex, hiIndex);

    if (targetIndex > partitionIndex) {
      loIndex = partitionIndex + 1;
    } else if (targetIndex < partitionIndex) {
      hiIndex = partitionIndex - 1;
    } else {
      // hiIndex = partitionIndex-1;
      break;
    }
  }

  return nums[targetIndex];
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N Log N)
// Space O(1)
var findKthLargest = function(nums, k) {
  let size = nums.length;
  nums.sort((a, b) => a - b);
  return nums[size - k];
};
