/*

Given an array w of positive integers, where w[i] describes the weight of index i, write a function pickIndex which randomly picks an index in proportion to its weight.

Note:
  1 <= w.length <= 10000
  1 <= w[i] <= 10^5
  pickIndex will be called at most 10000 times.

Example 1:
  Input: ["Solution","pickIndex"] [[[1]],[]]
  Output: [null,0]

Example 2:
  Input: 
    ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
    [[[1,3]],[],[],[],[],[]]
  Output: [null,0,1,1,1,0]
  Explanation of Input Syntax:


The input is two lists: the subroutines called and their arguments. 
Solution's constructor has one argument, the array w. pickIndex has no arguments. 
Arguments are always wrapped with a list, even if there aren't any.

*/

// Вероятность того, что число было выбрано, пропорциональна значению числа по отношению к общей сумме всех чисел.

// Задача сводится к генерации смещения цели и поиска диапазона, в который попадает эта цель.

// Как случайным образом сгенерировать смещение цели для мяча ???

// «Случайным образом» означает что каждая точка на линии имеет равную возможность быть смещением цели для мяча.
// Функция random () генерирует случайное значение в диапазоне от 0 до 1.
// Мы можем увеличить это случайно сгенерированное значение до всего диапазона строки, умножив его на размер диапазона

// Time O(N)
// Space O(N)
class Solution {
  constructor(w) {
    let prefix = Array(w.length);
    prefix[0] = w[0];

    for (let i = 1; i < w.length; i++) {
      prefix[i] = prefix[i - 1] + w[i];
    }

    this.prefix = prefix;
    this.totalSum = prefix[prefix.length - 1];
  }

  pickIndex() {
    // Генерация значения от 0 до максимальной префикс суммы
    // Math.random() - это double число от (0 до 1) и затем увеличиваем его до totalSum
    let random = this.totalSum * Math.random();

    let i = 0;

    for (; i < this.prefix.length; i++) {
      if (random < this.prefix[i]) {
        return i;
      }
    }
    return i - 1;
  }
}
