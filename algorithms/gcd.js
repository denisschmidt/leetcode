const { memoize } = require('./memoize');

// Возвращает наибольший общий делитель двух целых чисел, исполь­зуя
// алгоритм Эвклида: http://en.wikipedia.org/wiki/Euclidean_algorithm
const gcd = (a, b) => {
  // Проверка типов a и b опущена
  let t; // Временная переменная для обмена
  if (a < b) (t = b), (b = a), (a = t); // Убедиться, что a >= b
  while (b != 0) (t = b), (b = a % b), (a = t); // Это алгоритм Эвклида поиска НОД
  return a;
};

const gcdmemo = memoize(gcd);
const res = gcdmemo(85, 187); // => 17
console.log('--', res);
