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

const recFibbo = n => {
  if (n === 0 || n === 1) return n;
  return recFibbo(n - 1) + recFibbo(n - 2);
};
const res1 = fibbonacci(5);
const res2 = recFibbonacci(5);
const res3 = recFibbo(5);

console.log('---', res1, res2, res3);

const fact = x => {
  if (x <= 1) {
    return 1;
  }
  return x * fact(x - 1);
};
