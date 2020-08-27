/*

Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

Example 1:
  Input: numerator = 1, denominator = 2
  Output: "0.5"

Example 2:
  Input: numerator = 2, denominator = 1
  Output: "2"

Example 3:
  Input: numerator = 2, denominator = 3
  Output: "0.(6)"

*/

// Time O(N)
// Space O(N)
const fractionToDecimal = (numerator, denominator) => {
  if (denominator === 0) {
    return 'NaN';
  }

  if (numerator === 0) {
    return '0';
  }

  // убираем знак операндов
  let n = Math.abs(numerator);
  let d = Math.abs(denominator);

  let result = [];

  // определить знак
  if ((numerator < 0) ^ (denominator < 0)) {
    result.push('-');
  }

  // добавить неотъемлемую часть
  result.push(Math.floor(n / d));

  if (n % d === 0) {
    return result.join('');
  }

  result.push('.');

  let map = new Map();

  for (let r = n % d; r > 0; r %= d) {
    if (map.has(r)) {
      result.splice(map.get(r), 0, '(');
      result.push(')');
      break;
    }

    // остаток виден первым
    // запоминаем текущую позицию для нее
    map.set(r, result.length);

    r *= 10;

    result.push(Math.floor(r / d));
  }

  return result.join('');
};
