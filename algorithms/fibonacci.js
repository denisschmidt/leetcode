const fibbonacci = n => {
  if (n === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 2; i < n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return a + b;
};

const recFibbonacci = (i, memo = []) => {
  if (i === 0 || i === 1) return i;

  if (!memo[i]) {
    memo[i] = recFibbonacci(i - 1, memo) + recFibbonacci(i - 2, memo);
  }
  return memo[i];
};
