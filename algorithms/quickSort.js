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

//  O(NlogN)
const quickSort = (nums, low, high) => {
  if (low >= high) {
    return;
  }

  let pivot = partition(nums, low, high);

  quickSort(nums, low, pivot - 1);
  quickSort(nums, pivot + 1, high);
};

const input = [10, 16, 8, 12, 15, 6, 3, 9, 5];
const res = quickSort(input, 0, input.length - 1);
console.log('--', input);
