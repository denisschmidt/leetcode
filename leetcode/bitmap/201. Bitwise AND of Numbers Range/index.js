/*

Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

Example 1:
  Input: [5,7]
  Output: 4

Example 2:
  Input: [0,1]
  Output: 0

*/

/*
  Алгоритм:

  Алгоритм можно переформировать так "учитывая два целых числа, нас просят найти общий префикс их двоичных строк".

  Идея состоит в том, чтобы сдвигать оба числа вправо до тех пор, пока числа не станут равными
  И тогда числа будут иметь общий префикс 

  Затем мы добавляем нули к общему префиксу, чтобы получить желаемый результат, сдвигая общий префикс влево.

*/

/*

  Brian Kernighan's Algorithm

  Мы выполняем битовую операцию И между number и number - 1 самый правый бит единицы в исходном числе будет выключен (от одного до нуля).

  n = 12       0 0 0 0 1 1 0 0
  n = 11       0 0 0 0 1 0 1 1
  n & (n - 1)  0 0 0 0 1 0 0 0

  Таким образом мы легко бы могли вычислить общий префикс.

  Идея состоит в том, что для данного диапазона [m, n] мы могли бы итеративно применить трюк к числу n
  чтобы отключить его самый правый бит, равный единице, пока он не станет меньше или равен началу диапазона m.
  
  И наконец, мы делаем операцию И между n & m чтобы получить окончательный результат.

*/

// Time O(1)
// Space O(1)
const rangeBitwiseAnd = (m, n) => {
  while (m < n) {
    // выключаем биты которые не равны друг другу
    n = n & (n - 1);
  }
  return m & n;
};

// Time O(1)
// Space O(1)
const rangeBitwiseAnd_II = (m, n) => {
  let shift = 0;

  while (m != n) {
    // Cдвигаем биты вправо на 1 шаг за раз если m == n значит мы нашли общий префикс
    // Во время итерации мы ведем учет количества shift операций, которые мы выполняем
    m = m >> 1;
    n = n >> 1;
    shift++;
  }

  // Теперь у нас есть общий префикс и мы восстанавливаем его в прежнее положение сдвигая влево
  return m << shift;
};
