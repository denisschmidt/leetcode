// Time O(N * Log(K)) K - сумма элементов в nums
// Space O(1)
const splitArray = (nums, m) => {
  let left = 0;
  let right = 0;

  for (let x of nums) {
    right += x;
    left = Math.max(left, x);
  }

  let ans = right;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (calc(mid) > m) {
      left = mid + 1;
    } else {
      right = mid - 1;
      ans = Math.min(ans, mid);
    }
  }

  return ans;

  function calc(mid) {
    let sum = 0;
    let cnt = 1;

    for (let i = 0; i < nums.length; i++) {
      if (sum + nums[i] <= mid) {
        sum += nums[i];
      } else {
        sum = nums[i];
        cnt++;
      }
    }

    return cnt;
  }
};

const splitArray_II = (nums, m) => {
  let n = nums.length;
  let ans = Number.MAX_VALUE;

  dfs(0, 0, 0, 0);

  return ans;

  /*

    Получения всех вариантов разбиения массива на M подмассивов 

    Алгоритм:

    Для каждого элемента в массиве мы можем 
    
    1) Добавить его к предыдущему подмассиву 
    2) Запустить новый подмассив, начинающийся с этого элемента (если число подмассивов не превышает m). 
    
    Сумма текущего подмассива может быть обновлена ​​одновременно.

  */

  function dfs(i, cntSubarrays, curSum, curMax) {
    if (i == n && cntSubarrays == m) {
      ans = Math.min(ans, curMax);
      return;
    }

    if (i == n) {
      return;
    }

    if (i > 0) {
      dfs(i + 1, cntSubarrays, curSum + nums[i], Math.max(curMax, curSum + nums[i]));
    }

    if (cntSubarrays < m) {
      dfs(i + 1, cntSubarrays + 1, nums[i], Math.max(curSum, nums[i]));
    }
  }
};
