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
  n - число последовательностей
 */

const generateSequence = (num, n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(num);
  }
  return arr;
};

const generateCodes = (n, k) => {
  let index;
  let arr = generateSequence(0, 3);
  let direction = generateSequence(1, 3);
  if (!n || !k) return null;
  while (true) {
    index = n - 1;
    while (index >= 0) {
      if ((arr[index] === 0 && direction[index] === 0) || (arr[index] === k - 1 && direction[index] === 1)) {
        direction[index] = (direction[index] + 1) % 2;
      } else {
        break;
      }
      index -= 1
    }
    if (index < 0) {
      break;
    }
    arr[index] += direction[index]*2 - 1;

    console.log('----', arr)
  }
};

const res = generateCodes(3, 3);
console.log('---', res);


