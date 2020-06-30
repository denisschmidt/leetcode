/*

Given a non-empty integer array, find the minimum number of moves required to make all array elements equal, where a move is incrementing a selected element by 1 or decrementing a selected element by 1.

You may assume the array's length is at most 10,000.

Example:
  Input: [1,2,3]
  Output: 2

  Explanation: Only two moves are needed (remember each move increments or decrements one element):

  [1,2,3]  =>  [2,2,3]  =>  [2,2,2]

Example:
  Input: [1,1,1,2,2,2,3,3,3,5,8,8,8,10,15,15,15,16]
  Output: 82

*/

/*

  Проблему можно перефразировать 
  
  Дан набор точек найдите такую ​​точку k, чтобы суммарная сумма расстояний между k и остальными точками была минимальной
  
  Это очень распространенная математическая проблема, ответ которой известен. 
  
  Точка k является медианой заданных точек. 
  
  Мы можем просто отсортировать данные точки и найти медиану как элемент в середине массива. 
  
  Таким образом, общее количество ходов, необходимое для выравнивания всех элементов массива, определяется как сумма отличий всех элементов от медианы. 
  
*/

// Time O(NLogN)
// Space O(1)
const minMoves2 = nums => {
  nums.sort((a, b) => a - b);

  let mid = Math.floor(nums.length / 2);
  let res = 0;

  for (let num of nums) {
    res += Math.abs(nums[mid] - num);
  }

  return res;
};

// Time O(N) worst case O(N^2)
// Space O(1)
const minMoves2_II = nums => {
  let res = 0;
  let n = nums.length;
  let k = Math.floor(n / 2);

  let median = searchKthValue(nums, 0, n - 1, k);

  for (let x of nums) {
    res += Math.abs(x - median);
  }

  return res;

  function searchKthValue(nums, left, right, pivot) {
    if (left == right) return nums[left];

    let pivotIndex = quickSelect(nums, left, right);

    if (pivotIndex == pivot) {
      return nums[pivotIndex];
    }

    if (pivotIndex > pivot) {
      return searchKthValue(nums, left, pivotIndex - 1, pivot);
    }

    return searchKthValue(nums, pivotIndex + 1, right, pivot);
  }

  function quickSelect(nums, left, right) {
    let pivotValue = nums[left];
    let pivotIndex = left;
    left++;

    while (left <= right) {
      if (nums[left] < pivotValue) {
        left++;
      } else if (nums[right] >= pivotValue) {
        right--;
      } else {
        swap(nums, left, right);
      }
    }

    swap(nums, pivotIndex, right);

    return right;
  }

  function swap(arr, x, y) {
    return ([arr[x], arr[y]] = [arr[y], arr[x]]);
  }
};

// Time O(NLogN + N^2)
// Space O(1)
const minMoves2_III = nums => {
  let cnt = 0;
  let n = nums.length;

  nums.sort((a, b) => a - b);

  while (true) {
    let min = nums[0];
    let max = nums[n - 1];

    if (min == max) {
      return cnt;
    }

    let minCnt = 0;
    let maxCnt = 0;
    let i = 0;
    let j = n - 1;

    for (; i < n && nums[i] == min; i++) {
      minCnt++;
    }

    for (; j >= 0 && nums[j] == max; j--) {
      maxCnt++;
    }

    if (minCnt > maxCnt) {
      for (let k = n - 1; k > j; k--) {
        cnt += nums[k] - nums[j];
        nums[k] = nums[j];
      }
    } else {
      for (let k = 0; k < i; k++) {
        cnt += nums[i] - nums[k];
        nums[k] = nums[i];
      }
    }
  }
};
