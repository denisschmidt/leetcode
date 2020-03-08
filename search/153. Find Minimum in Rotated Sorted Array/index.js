/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:
  Input: [3,4,5,1,2]
  Output: 1

Example 2:
  Input: [4,5,6,7,0,1,2]
  Output: 0


Основная проблема что там нужно сделать это за O(logN)

Тут сразу напрашивается бинарный поиск в качестве основого решения


[4, 5, 6, 7, 2, 3] 

left = 0 right = 5
mid -> 2


left = 3 right = 5 
mid -> 4

left = 3 right = 3
mid -> 3

Выходим из цикла

*/

// Time O(LogN)
// Space O(1)
const findMin = nums => {
  let left = 0;
  let right = nums.length - 1;
  let ans = -1;

  // массив уже отсортирван
  if (nums[right] > nums[left]) {
    return nums[left];
  }

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    // правая часть уже отсортирована
    // и следовательно минимальный элемент будет nums[mid]
    // для правой части самый минимум мы нашли тогда попробудем сделать поиск в левой части
    if (nums[mid] <= nums[nums.length - 1]) {
      ans = nums[mid];
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
};

// Time O(LogN)
// Space O(1)
const findMin_II = nums => {
  if (nums[0] < nums[nums.length - 1]) {
    return nums[0];
  }

  let INF = Number.MAX_VALUE;
  let ans = INF;
  find(0, nums.length - 1);

  return ans;

  function find(lo, hi) {
    if (lo <= hi) {
      let mid = lo + Math.floor((hi - lo) / 2);

      if (nums[mid] <= nums[nums.length - 1]) {
        ans = Math.min(ans, nums[mid]);
        return find(lo, mid - 1);
      } else {
        return find(mid + 1, hi);
      }
    }
    return -1;
  }
};
