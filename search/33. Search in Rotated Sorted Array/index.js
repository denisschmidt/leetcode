/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:
  Input: nums = [4,5,6,7,0,1,2], target = 0
  Output: 4

Example 2:

  Input: nums = [4,5,6,7,0,1,2], target = 3
  Output: -1

 */
//

// Оцениваем именно интервал в который попадает значение target
// И потом выбираем в какую часть массива идти

// Time O(LogN)
// Space O(1)
const search = (nums, target) => {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] >= nums[lo]) {
      if (target >= nums[lo] && target < nums[mid]) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    } else {
      if (target >= nums[mid] && target <= nums[hi]) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
  }

  return -1;
};

// Time O(LogN)
// Space O(1)
const search_II = function(nums, target) {
  const n = nums.length;

  if (n === 0) return -1;
  if (n === 1) return nums[0] === target ? 0 : -1;

  // получаем самый маленький элемент
  let rotateIndex = findRotateIndex(nums, 0, n - 1);

  if (nums[rotateIndex] === target) return rotateIndex;

  // елси массив не развернут
  if (rotateIndex === 0) return binarySearch(nums, 0, n - 1, target);

  // если поиск по правой стороне
  if (target < nums[0]) return binarySearch(nums, rotateIndex, n - 1, target);

  // поиск по левой стороне
  return binarySearch(nums, 0, rotateIndex, target);
};

const findRotateIndex = (nums, left, right) => {
  if (nums[left] < nums[right]) return 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid + 1]) {
      return mid + 1;
    } else {
      if (nums[mid] < nums[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return 0;
};

const binarySearch = (nums, left, right, target) => {
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[right] === target ? right : -1;
};
