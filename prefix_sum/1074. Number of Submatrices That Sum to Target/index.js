/*

Given a matrix, and a target, return the number of non-empty submatrices that sum to target.

A submatrix x1, y1, x2, y2 is the set of all cells matrix[x][y] with x1 <= x <= x2 and y1 <= y <= y2.

Two submatrices (x1, y1, x2, y2) and (x1', y1', x2', y2') are different if they have some coordinate that is different: for example, if x1 != x1'.

Example 1:
  Input: matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
  Output: 4
  Explanation: The four 1x1 submatrices that only contain 0.

Example 2:
  Input: matrix = [[1,-1],[-1,1]], target = 0
  Output: 5
  Explanation: The two 1x2 submatrices, plus the two 2x1 submatrices, plus the 2x2 submatrix.
 

Note:
  1 <= matrix.length <= 300
  1 <= matrix[0].length <= 300
  -1000 <= matrix[i] <= 1000
  -10^8 <= target <= 10^8

*/

/*

  Алгоритм:
  Если сведем 2Д массив к 1Д массиву тогда наша задача становится задачей - "560. Subarray Sum Equals K"
  
  Пример: [[1,1,1]] target = 2. Ответ будет 2. 
  
  1) Нам нужны все комбинации колонок и для каждой колонки рассчитаем сумму ее префикса.
  
  2) Как результата мы получаем 1Д массив. Дальше задача состоит в нахождениее подмассива который суммируется c target.

  Считаем префикс сумму уже для 1Д массива.

  [[0, 1], [-2, 3]]

  i = 0 j = 0
  prefix - [0, 1]

  i = 0 j = 1
  prefix - [-2, 4]

  i = 1 j = 1
  prefix - [-2, 3]

*/

// Time O(N * M * (M + M))
// Space O(N * M)
const numSubmatrixSumTarget = function(matrix, target) {
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
