/*
Given n balloons, indexed from 0 to n-1.
Each balloon is painted with a number on it represented by array nums.
You are asked to burst all the balloons.

If the you burst balloon i you will get nums[left] * nums[i] * nums[right] coins.

Here left and right are adjacent indices of i.
After the burst, the left and right then becomes adjacent. //смежными

Find the maximum coins you can collect by bursting the balloons wisely.

Note:
  You may imagine nums[-1] = nums[n] = 1.
  They are not real therefore you can not burst them.
  0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100


Example:
  Input: [3,1,5,8]
  Output: 167
  Explanation: nums = [3,1,5,8] --> [3,5,8] -->  [3,8]  -->  [8]  --> []
               coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
 */

// Complexity Analysis
//
// Time Complexity: O(N^3)
//
// Space Complexity: O(N^2)

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxCoins = function(nums) {
  const size = nums.length;
  if (!size) {
    return 0;
  }

  const matrix = [...Array(size)].map((v, i) => {
    return Array(size).fill(null);
  });

  // i и j - значения subarray для данного len
  // Например при len= 2, i = 0, j = 1 если у нас 3 1 5 8  то выбираем ====> [3, 1]
  // k - это у нас текущий индекс на котором мы находимся в промежутке между i и j
  for (let len = 1; len <= size; len++) {
    for (let i = 0; i <= size - len; i++) {
      let j = i + len - 1;

      for (let k = i; k <= j; k++) {
        //начало расчета стоимости удаление шарика

        // расчитываем стоимость для уравнения ===> nums[left] * nums[i] * nums[right]
        // расчитываем именно значения left и right
        let leftValue = 1;
        let rightValue = 1;

        if (i !== 0) {
          leftValue = nums[i - 1];
        }
        if (j !== size - 1) {
          rightValue = nums[j + 1];
        }

        // расчитываем сумму всего подмассива минус того числа на котором находимся
        // допустим подмассив [3, 1] где i = 0, j = 1 при к = i сумма будет за исключением того числа на котором находимся
        // итого ===> matrix[k+1][j] ====> matrix[1][1]
        // для k = j сумма будет по формуле matrix[i][k - 1] ===> matrix[0][0]
        let before = 0;
        let after = 0;

        if (i !== k) {
          before = matrix[i][k - 1];
        }

        if (j !== k) {
          after = matrix[k + 1][j];
        }

        // Нам нужен именно максимум для подстроки
        // У нас идет расчет matrix[i][j], для кадого k по итогу нам нужна самая большая сумма
        matrix[i][j] = Math.max(before + after + leftValue * nums[k] * rightValue, matrix[i][j]);
      }
    }
  }

  return matrix[0][size - 1];
};

const res = maxCoins([3, 1, 5, 8]);
console.log('---', res);

// ================================================================================================================
const maxCoins2 = arr => {
  const size = arr.length;

  const matrix = [...Array(size)].map(() => Array(size).fill(null));

  for (let len = 0; len <= size; len++) {
    for (let i = 0; i <= size - len; i++) {
      let j = i + len - 1;

      for (let k = i; k <= j; k++) {
        let leftValue = 1;
        let rightValue = 1;

        if (i !== 0) {
          leftValue = arr[i - 1];
        }

        if (j !== size - 1) {
          rightValue = arr[j + 1];
        }

        let before = 0;
        let after = 0;

        if (i !== k) {
          before = matrix[i][k - 1];
        }

        if (j !== k) {
          after = matrix[k + 1][j];
        }

        matrix[i][j] = Math.max(after + before + leftValue * arr[k] * rightValue, matrix[i][j]);
      }
    }
  }

  return matrix[0][size - 1];
};

const res2 = maxCoins2([3, 1, 5, 8]);
console.log('---', res2);
