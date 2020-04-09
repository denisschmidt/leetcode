/*

Given a non-empty 2D matrix matrix and an integer k, find the max sum of a rectangle in the matrix such that its sum is no larger than k.

Example:
  Input: matrix = [[1,0,1],[0,-2,3]], k = 2
  Output: 2 
  Explanation: Because the sum of rectangle [[0, 1], [-2, 3]] is 2,
             and 2 is the max number no larger than k (k = 2).
Note:
  The rectangle inside the matrix must have an area > 0.
  What if the number of rows is much larger than the number of columns?

*/

/*

  Алгорим аналогичный задаче 1074

  1) Используем префикс сумму для рассчета колонок 
  2) После расчета получаем 1Д массив
  3) Используем алгорим из задачи 560 для поиска подмассива который <= target 

*/

const maxSumSubmatrix = (matrix, target) => {
  let n = matrix.length;
  let m = matrix[0].length;
  let set = new Set();
  let INF = Number.MAX_VALUE;
  let max = -INF;

  for (let i = 0; i < n; i++) {
    let nums = Array(m).fill(0);
    for (let j = i; j < n; j++) {
      let sum = 0;

      for (let k = 0; k < m; k++) {
        nums[k] += matrix[j][k];
      }

      set.add(0);

      for (let n of nums) {
        sum += n;

        let curMax = INF;
        for (let x of set.values()) {
          if (x >= sum - target) {
            curMax = Math.min(curMax, x);
          }
        }

        if (curMax != INF) {
          max = Math.max(max, sum - curMax);
        }

        set.add(sum);
      }

      set.clear();
    }
  }

  return max;
};
