/*
  Алгоритм:
    Если сведем 2Д массив к 1Д массиву тогда наша задача становится задачей - "560. Subarray Sum Equals K"
    
    Пример: [[1,1,1]] target = 2. Ответ будет 2. 
    
    1) Нам нужны все комбинации колонок и для каждой колонки рассчитаем сумму ее префикса.
    
    2) Как результата мы получаем 1Д массив. Дальше задача состоит в нахождениее подмассива который суммируется c target.

    Считаем префикс сумму уже для 1Д массива.
*/

// Time O(N * M * (M + M))
// Space O(N * M)
const numSubmatrixSumTarget = (matrix, target) => {
  let n = matrix.length;
  let m = matrix[0].length;

  let cnt = 0;

  for (let i = 0; i < n; i++) {
    let nums = Array(m).fill(0);

    for (let j = i; j < n; j++) {
      // считаем сумму во всей строке
      for (let k = 0; k < m; k++) {
        nums[k] += matrix[j][k];
      }

      cnt += subarraySum(nums, target);
    }
  }

  return cnt;
};

function subarraySum(nums, k) {
  let map = { 0: 1 };
  let sum = 0;
  let cnt = 0;

  for (let n of nums) {
    sum += n;

    if (sum - k in map) {
      cnt += map[sum - k];
    }

    map[sum] = ~~map[sum] + 1;
  }

  return cnt;
}
