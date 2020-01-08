/*
  Тип задач очень похож на 0/1 Knapsack

  Тип задач с монетами и такой же тип задач с сабсетами(с суммами которые могу суммироваться до определенного значения)

  Позволяет на ответить на вопрос, "Есть ли в наборе несколько чисел, которые могут суммироваться до определенного значения"

  Главное тут отпределиться до какого значения суммы нужно проверить суммирование

  В этой реализиции есть одна тонкость
  У нас есть возможность обновлять состояния dp через возрастающий инкремент j или через убывающий 

  1) увеличение j, то предыдущий частичный результат dp[j - coin] - это результат, который уже рассматривал эту монету
  2) уменьшая j, тогда предыдущий частичный результат dp[j - coin] является результатом, который еще не рассматривал монету
  
*/

function coinRepeat(coins, target) {
  // содержит количество способов получить сумму из первых чисел i, используя повторяющиеся монеты
  let dp = Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= target; i++) {
      dp[j] += dp[j - coins[i]];
    }
  }

  return dp[target];
}

function coinNonRepealett(coins, target) {
  // количество способов сделать сумму из первых чисел i с использованием неповторяющихся монет
  let dp = Array(target + 1);
  dp[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    for (let j = target; i >= coins[i]; i--) {
      dp[j] = dp[j] + dp[j - coins[i]];
    }
  }

  return dp[target];
}