// Чи́сла Фибона́ччи — элементы числовой последовательности

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, … (последовательность A000045 в OEIS),
// в которой первые два числа равны либо 1 и 1, либо 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел.

// Названы в честь средневекового математика Леонардо Пизанского (известного как Фибоначчи).

// Функция получения N - числа Фибона́ччи: где 0 число = 0, 1 число = 1, 3 числоа = 2

// Time O(N)
// Space O(1)
const fibbonacci = n => {
  if (n <= 1) return n;

  if (n === 2) return 1;

  // b - большее число
  let a = 0;
  let b = 1;

  for (let i = 2; i < n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return a + b;
};

/*
  Мы можем использовать мемоизацию, чтобы избежать повторных вычислений

  Например Fib(4)

        F(4)
       /     \
    F(3)      F(2)
   /   \     /    \
  F(2)  F(1) F(1)  F(0)
 /   \
F(1)  F(0)

 */

// Time O(N)
// Space O(N)
// Без мемоизации верхняя граница рекурсии будет O(2^N)
const recFibbonacci = (i, memo = []) => {
  if (i === 0 || i === 1) return i;

  if (!memo[i]) {
    memo[i] = recFibbonacci(i - 1, memo) + recFibbonacci(i - 2, memo);
  }

  return memo[i];
};

// Используя золотое сечение, формула Бине
// Time O(1)
// Space O(1)
const fib = N => {
  const sqrt5 = Math.sqrt(5);
  const goldenRatio = (1 + sqrt5) / 2;

  return Math.round(Math.pow(goldenRatio, N) / sqrt5);
};
