/*

<< (Битовый сдвиг влево)
  Операторы битового сдвига принимают два операнда.
  Первый – это число для сдвига, а второй – количество битов, которые нужно сдвинуть в первом операнде.

  Левый сдвиг почти равен умножению на 2
  Битовый сдвиг << N обычно имеет тот же эффект, что и умножение на два N раз,

  Например:
  3 << 1 === 6
  3 << 2 === 12
  3 << 3 === 24

  Конечно, следует иметь в виду, что побитовые операторы работают только с 32-битными числами,
  поэтому верхний порог такого «умножения» ограничен:

  10000000000 << 1 === -1474836480, отброшен крайний-левый бит
  10000000000 * 2 ===  20000000000, обычное умножение


>> (Правый битовый сдвиг, переносящий знак)
  Правый сдвиг почти равен целочисленному делению на 2
  Битовый сдвиг >> N обычно имеет тот же результат, что и целочисленное деление на два N раз:

  Например:
  100 >> 1 === 50, деление на 2
  100 >> 2 === 25, деление на 2 два раза
  100 >> 3 === 12, деление на 2 три раза, целая часть от результата


>>> (Правый сдвиг с заполнением нулями)
  Этот оператор сдвигает биты первого операнда вправо. Лишние биты справа отбрасываются. Слева добавляются нулевые биты.
  Знаковый бит становится равным 0, поэтому результат всегда положителен.

  Для неотрицательных чисел правый сдвиг с заполнением нулями >>> и правый сдвиг с переносом знака >> дадут одинаковый результат
  Для отрицательных чисел – результат работы разный. Например, -9 >>> 2 даст 1073741821, в отличие от -9 >> 2 (даёт -3):


 */

// Как получить значение i-th бита ???
function getIthBit() {
  let num = 10;

  for (let i = 0; i < 32; i++) {
    let bit = (num >> i) & 1; // получили значения i бита

    console.log(bit);
  }
}

// Как вычислить кол-во бит в числе ???

// Вычисляем количество бит в числе
function getBitCount(num = 10) {
  let x = Math.log2(num);

  return x;
}

/*
  Как установить К-тый бит в число ???

  Set the K-th bit of a given number
  
  Given a number n and a value k. 
  From the right, set the kth bit in the binary representation of n. 
  The position of LSB(or last bit) is 0, second last bit is 1 and so on. 
  Also, 0 <= k < x, where x is the number of bits in the binary representation of n.

  Examples:
    Input : n = 10, k = 2
    Output : 14
      (10)10 = (1010)2
      Now, set the 2nd bit from right.
      (14)10 = (1110)2
      2nd bit has been set.

    Input : n = 15, k = 3
    Output : 15 3rd bit of 15 is already set.
 */
function setKthBit(n, k) {
  return (1 << k) | n;
}

/*
  Как изменить К-тый бит ???

  Modify a bit at a given position
  Given a number n, a position p and a binary value b, we need to change the bit at position p in n to value b.

  Examples :
    Input : n = 7, p = 2, b = 0
    Output : 3
      7 is 00000111 after clearing bit at 
      2rd position, it becomes 0000011.

    Input : n = 7, p = 3, b = 1
    Output : 15
      7 is 00000111 after setting bit at 
      3rd position it becomes 00001111.
*/
function modifyBit(num, index, bit) {
  let mask = 1 << index;
  return (num & ~mask) | ((bit << index) & mask);
}

/*
  Как инвертировать все биты у числа ???

  Invert actual bits of a number

  Given a non-negative integer n. 
  The problem is to invert the bits of n and print the number obtained after inverting the bits. 
  Note that the actual binary representation of the number is being considered for inverting the bits, no leading 0’s are being considered.
  
  Examples :
    Input : 11
    Output : 4
      (11)10 = (1011)[2]
      After inverting the bits, we get:
      (0100)2 = (4)10.

    Input : 10
    Output : 5
      (10)10 = (1010)2.
      After reversing the bits we get:
      (0101)2 = (101)2 = (5)10.
*/

// Time O(log n)
// Space O(1)
function invertBits(num) {
  // вычисляем количество бит в числе
  let x = Math.log2(num);

  // или
  // let x = Math.floor(Math.log(num) / Math.log(2) + 1);

  for (let i = 0; i < x; i++) {
    num = num ^ (1 << i);
  }

  return num;
}

// Time O(log2n)
// Space O(1)
function invertBits_II(num) {
  let x = Math.log2(num);

  let m = 1 << x;

  m = m | (m - 1);

  num = num ^ m;

  return num;
}

/*

  Инвертировать по одному биту числа и получить новое числа ???

  2 = 0010 
  Тогда 3 = 0011 и 0 = 0000

*/
function invertByOneBits(num) {
  if (num == 0) return 1;

  let x = Math.log2(num);

  for (let i = 0; i <= x; i++) {
    let mask = 1 << i;
    let bit = num ^ mask;

    let x = (num & ~mask) | ((bit << i) & mask);

    console.log(x);
  }
}

/*

  Конвертировать значение из любой базы в число и наоборот ??? 


  Input number is given as string and output is an integer.

  Input: str = "1100", base = 2 
  Output: 12

  Input: str = "11A", base = 16
  Output: 282

  Input: str = "123",  base = 8
  Output: 83 

*/

const toDeci = (str, base) => {
  let len = str.length;
  let power = 1;

  let num = 0;
  let i;

  for (let i = len - 1; i >= 0; i--) {
    if (getVal(str[i]) >= base) {
      return -1;
    }

    num += getVal(str[i]) * power;
    power = power * base;
  }

  return num;

  function getVal(ch) {
    if (ch >= 0 && ch <= 9) return parseInt(ch);
    return ch - 'A'.charCodeAt(0) + 10;
  }
};

/*

  Функция для преобразования заданного десятичного числа к базе

*/

const fromDeci = (num, base) => {
  let res = '';

  while (num > 0) {
    res += getVal(num % base);

    num = num / base;
  }

  return res
    .split('')
    .reverse()
    .join('');

  function getVal(num) {
    if (num >= 0 && num <= 9) {
      return (num + 48).toString();
    }
    return (num - 10 + 65).toString();
  }
};

// Как получить значение XOR в интервале ???

// Поскольку XOR является коммутативной операцией тогда

/* 
  
  Допустим у нас есть префиксы XOR от 0-i, где i находится в диапазоне от 0..arr.length-1
  
  Например нам нужен результат: диапазона = [4,10]
  Тогда мы можем использовать XOR диапазона 0-10 и сделать XOR его с результатом диапазона 0-3
  
  В итоге получим требуемый диапазон, так как XOR 0-10 будет иметь значения XOR в диапазоне 0-3
  Тогда XOR диапазаона 0-10 с диапазоном 0-3 даст нам результат для [4-10]

 */
