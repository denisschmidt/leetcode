/*

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

The array may contain duplicates.

Example 1:
  Input: [1,3,5]
  Output: 1

Example 2:
  Input: [2,2,2,0,1]
  Output: 0

Note:
  This is a follow up problem to Find Minimum in Rotated Sorted Array.
  Would allow duplicates affect the run-time complexity? How and why?

*/

// https://leetcode.com/articles/find-minimum-in-rotated-sorted-array-ii/

// Time O(LogN) worst case O(N) это как раз дает 3 кейс когда элементы равны
// Space O(1)
const findMin = nums => {
  let lo = 0;
  let hi = nums.length - 1;

  // Второй вариант бинарного поиска
  // Вариант lo <= hi работать не будет
  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] < nums[hi]) {
      hi = mid;
    } else if (nums[mid] > nums[hi]) {
      // Элемент mid находится в другой половине массива как элемент верхней границы
      // Следовательно, требуемый min элемент должен располагаться в правой части массива
      // В результате мы затем перемещаем нижнюю границу вверх рядом с mid индексом
      lo = mid + 1;
    } else {
      // В этом случае мы не уверены, на какой стороне находится минимальный элемент.
      // Чтобы уменьшить область поиска, безопасной мерой было бы уменьшить верхнюю границу на единицу
      // а не агрессивно двигаться к точке mid.
      // Приведенная выше стратегия предотвратит стагнацию алгоритма (то есть бесконечный цикл).
      // Что еще более важно, он поддерживает правильность процедуры, то есть мы не пропустим желаемый элемент
      hi--;
    }
  }

  return nums[lo];
};

// Time O(LogN) worst case O(N)
// Space O(N)
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

      if (nums[mid] > nums[mid + 1]) {
        ans = Math.min(ans, nums[mid + 1]);
        return;
      }

      if (nums[mid - 1] > nums[mid]) {
        ans = Math.min(ans, nums[mid]);
        return;
      }

      if (nums[mid] === nums[lo] && nums[mid] === nums[hi]) {
        ans = Math.min(ans, nums[mid]);
        find(lo, mid - 1);
        find(mid + 1, hi);
      }

      if (nums[mid] <= nums[nums.length - 1]) {
        ans = Math.min(ans, nums[mid]);
        find(lo, mid - 1);
      } else {
        find(mid + 1, hi);
      }
    }
  }
};
