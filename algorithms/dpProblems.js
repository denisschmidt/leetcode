/*

  0-1 Knapsack problem
  
  Тип задач очень похож на 0/1 Knapsack

  Тип задач с монетами и такой же тип задач с сабсетами(с суммами которые могу суммироваться до определенного значения)

  Позволяет на ответить на вопрос, "Есть ли в наборе несколько чисел, которые могут суммироваться до определенного значения"

  Главное тут отпределиться до какого значения суммы нужно проверить суммирование

  В этой реализиции есть одна тонкость
  У нас есть возможность обновлять состояния dp через возрастающий инкремент j или через убывающий 

  1) увеличение j, то предыдущий частичный результат dp[j - coin] - это результат, который уже рассматривал эту монету
  2) уменьшая j, тогда предыдущий частичный результат dp[j - coin] является результатом, который еще не рассматривал монету
  

  Хороший пост по dp
  https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns

*/

function coinRepeat(coins, target) {
  // содержит количество способов получить сумму из первых чисел i, используя повторяющиеся монеты
  // Пример задача 377 518
  let dp = Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= target; j++) {
      // считаем кол-во
      dp[j] = dp[j] + dp[j - coins[i]];
    }
  }

  return dp[target];
}

function coinNonRepealett(coins, target) {
  // количество способов сделать сумму из первых чисел i с использованием неповторяющихся монет
  let dp = Array(target + 1);
  dp[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    for (let j = target; i >= coins[i]; j--) {
      // Если предидущий шаг положителен dp[j - coins[i]]
      // То и текущий шаг dp[j] будет положителен
      dp[j] = dp[j] + dp[j - coins[i]];
    }
  }

  return dp[target];
}

// Пример задача 322
function minCoinRepeat(coins, target) {
  // содержит минимальное кол-во монет необходимое чтобы получить сумму target
  let dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      // сумма меньше coins[j] тут никак не получить такую сумму
      if (i < coins[j]) continue;

      // считаем мин путь до target
      dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
    }
  }

  return dp[amount];
}

/*
  Объединение интервалов DP
  
  Для dp есть также опреденный тип проблем 
  
  Имеется слудующее утверждение:
    По заданному набору чисел найдите оптимальное решение проблемы, учитывая текущее число.
    И лучшее, что вы можете получить с левой и правой сторон.

  Решение:
    Найди все оптимальные решения для каждого интервала и получить наилучший ответ.
  
  // from i to j
  dp[i][j] = dp[i][k] + result[k] + dp[k+1][j]  

  */

/* 
  Получите лучшее с левой и правой сторон и добавьте решение для текущей позиции.
  
  Примеры задач: 1039, 312, 1000

*/
function getBestFromLeftAndRight(nums) {
  let dp = Array(nums.length)
    .fill(null)
    .map(() => Array(nums.length).fill(null));
  let n = nums.length;

  for (let l = 1; l < n; l++) {
    for (let i = 0; i < n - l; i++) {
      let j = i + l;

      for (let k = i; k < j; k++) {
        dp[i][j] = max(dp[i][j], dp[i][k] + result[k] + dp[k + 1][j]);
      }
    }
  }

  return dp[0][n - 1];
}

/*
  Общая формулировка проблемы для этого шаблона может варьироваться, но большую часть времени вам дают две строки, где длина этих строк невелика

  
  Задание:
    Если даны две строки s1 и s2, вернуть некоторый результат.

  Большинство проблем в этом шаблоне требует решения, которое может быть принято в сложности O(n^2).
  

 */

function getDpTwoString(s1, s2) {
  // i - indexing string s1
  // j - indexing string s2

  let n = s1.length;
  let m = s2.length;

  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= m; ++j) {
      if (s1[i - 1] == s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]; // условия будут различные
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1]; // условия будут различные
      }
    }
  }
}

// Если вам дают одну строку s, подход может немного отличаться

function getDpOneString(s) {
  let n = s.length;

  for (let l = 1; l < n; ++l) {
    for (let i = 0; i < n - l; ++i) {
      let j = i + l;
      if (s[i] == s[j]) {
        dp[i][j] = dp[i - 1][j - 1]; // условия будут различные
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1]; // условия будут различные
      }
    }
  }
}

/*
  Принимать решение

  Общая формулировка проблемы для этого шаблона - ситуация, решающая, использовать или не использовать текущее состояние. 
  Итак, проблема требует от вас принятия решения в текущем состоянии.

  По заданному набору значений решите выбрать или игнорировать текущее значения.


  Если вы решили выбрать текущее значение, используйте предыдущий результат, в котором значение было проигнорировано; 
  и наоборот, если вы решили игнорировать текущее значение, используйте предыдущий результат, в котором использовалось значение.



*/
