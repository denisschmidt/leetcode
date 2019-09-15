/*

Есть отсортированный массив чисел

Найти первое число которое >= target

target = 4;
nums = [2, 3, 5, 6, 8, 10, 12]
answer = 6;

 */

// Time O(LogN)
// Space O(1)
const findFirstValue = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let ans = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] >= target) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
};
