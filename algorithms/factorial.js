const { memoize } = require('./memoize');

const factorial = x => {
  if (x === 1) return 1;

  return x * factorial(x - 1);
};

// Обратите внимание, что при мемоизации рекурсивных функций желательно,
// чтобы рекурсия выполнялась в мемоизованной версии, а не в оригинале.

const fact = memoize(function (n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
});
