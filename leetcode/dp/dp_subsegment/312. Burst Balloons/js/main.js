// Time O(N^3)
// Space O(N^2)
const maxCoins = nums => {
  let n = nums.length;

  if (n === 0) return 0;

  let dp = Array(n)
    .fill(null)
    .map(() => Array(n).fill(0));

  // i и j - значения subarray для данного len
  // Например при len= 2, i = 0, j = 1 если у нас 3 1 5 8  то выбираем ====> [3, 1]
  for (let l = 1; l <= n; l++) {
    for (let i = 0; i <= n - l; i++) {
      let j = l + i - 1;

      // k - это у нас текущий индекс на котором мы находимся в промежутке между i и j
      for (let k = i; k <= j; k++) {
        //начало расчета стоимости удаление шарика

        // расчитываем стоимость для уравнения ===> nums[left] * nums[i] * nums[right]
        // расчитываем именно значения left и right
        let left = 1;
        let right = 1;

        if (i !== 0) {
          left = nums[i - 1];
        }

        if (j !== n - 1) {
          right = nums[j + 1];
        }

        // расчитываем сумму всего подмассива минус того числа на котором находимся
        // допустим подмассив [3, 1] где i = 0, j = 1 при к = i сумма будет за исключением того числа на котором находимся

        // для k !== i сумма будет по формуле dp[i][k - 1]
        // для k !== j сумма будет по формуле dp[k + 1][j]
        let before = 0;
        let after = 0;

        if (i !== k) {
          before = dp[i][k - 1];
        }

        if (j !== k) {
          after = dp[k + 1][j];
        }

        // Нам нужен именно максимум для подстроки
        // У нас идет расчет dp[i][j], для кадого k по итогу нам нужна самая большая сумма
        dp[i][j] = Math.max(dp[i][j], after + before + left * nums[k] * right);
      }
    }
  }

  return dp[0][n - 1];
};
