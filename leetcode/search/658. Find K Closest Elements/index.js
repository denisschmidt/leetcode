/*

Given a sorted array, two integers k and x, find the k closest elements to x in the array. 
The result should also be sorted in ascending order. 
If there is a tie, the smaller elements are always preferred.

Example 1:
  Input: [1,2,3,4,5], k=4, x=3
  Output: [1,2,3,4]

Example 2:
  Input: [1,2,3,4,5], k=4, x=-1
  Output: [1,2,3,4]

Note:
  The value k is positive and will always be smaller than the length of the sorted array.
  Length of the given array is positive and will not exceed 104
  Absolute value of elements in the array and x will not exceed 104

UPDATE (2017/9/19):
  The arr parameter had been changed to an array of integers (instead of a list of integers). 
  Please reload the code definition to get the latest changes.

*/

// Time O(LOGN + K)
// Space O(N)
const findClosestElements = function (nums, k, x) {
  let index = search(nums, x);
  let res = [nums[index]];

  let left = index - 1;
  let right = index + 1;

  while (--k > 0 && left >= 0 && right < nums.length) {
    if (x - nums[left] <= nums[right] - x) {
      res.unshift(nums[left]);
      left--;
    } else {
      res.push(nums[right]);
      right++;
    }
  }

  while (k > 0 && left >= 0) {
    res.unshift(nums[left]);
    left--;
    k--;
  }

  while (k > 0 && right < nums.length) {
    res.push(nums[right]);
    right++;
    k--;
  }

  return res;

  // Шаблона №3 Бинарного поиска
  // Метод возвращает или index target
  // Если target нету в массиве, то самый индекс самого близкого числа к target
  // Цикл заканчивается когда у нас осталось 2 элемента
  function search(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;

    while (lo + 1 < hi) {
      let mid = lo + Math.floor((hi - lo) / 2);

      if (nums[mid] < target) {
        lo = mid;
      } else {
        hi = mid;
      }
    }

    if (nums[lo] == target) return lo;
    if (nums[hi] == target) return hi;

    return Math.abs(nums[lo] - target) < Math.abs(nums[hi] - target) ? lo : hi;
  }
};
