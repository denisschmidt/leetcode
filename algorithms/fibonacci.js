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
