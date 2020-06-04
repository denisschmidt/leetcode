/*

Сгенерировать все двумерные коды Грея длиной n.

*/

// Time O(N)
// Space O(N)
function generateGray_I(n) {
  let grayCodes = [];
  let total = 1 << n;

  for (let i = 0; i < total; i++) {
    grayCodes.push(i ^ (i >> 1));
  }

  return grayCodes;
}

/*

Сгенерировать все k-мерные коды Грея длиной n.

Код Грея - двоичный код, в котором две «соседние» (в упорядоченном, то есть лексикографическом, наборе)
кодовые комбинации различаются только цифрой в одном двоичном разряде.

Иными словами, расстояние Хэмминга между соседними кодовыми комбинациями равно 1.

2-битный код Грея
  00
  01
  11
  10

3-битный код Грея
  000
  001
  011
  010
  110
  111
  101
  100

Кол-во таких последовательностей 2 ^ n

 */

/*
  
  Сгенерировать все k-мерные коды Грея длиной n.

  n - длинна кода для 4 = [0, 0, 0, 1]
  k - мерные коды для 2 коды могут содержать только 1 и 0

 */
const generateCodes = (n = 3, k = 3) => {
  let index;
  let arr = generateSequence(0, n);
  let direction = generateSequence(1, n);
  let res = [];

  while (true) {
    index = n - 1;

    while (index >= 0) {
      // условие на нахождение столбца, который можно двигать
      if ((arr[index] === 0 && direction[index] === 0) || (arr[index] === k - 1 && direction[index] === 1)) {
        direction[index] = (direction[index] + 1) % 2;
      } else {
        break;
      }
      index--;
    }

    // если не нашли такого столбца, то алгоритм закончил работу
    if (index < 0) {
      break;
    }

    // либо двигаем на 1 вперед, либо на 1 назад
    arr[index] += direction[index] * 2 - 1;
    res.push(arr);
  }

  return res;

  function generateSequence(num, n) {
    let arr = [];
    for (let i = 0; i < n; i++) arr.push(num);
    return arr;
  }
};

const encode = number => {
  return number ^ (number >> 1);
};

const decode = encodedNumber => {
  let number = encodedNumber;

  while ((encodedNumber >>= 1)) {
    number ^= encodedNumber;
  }

  return number;
};
