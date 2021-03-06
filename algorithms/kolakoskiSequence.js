/*

Последовательность Колакоски

https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C_%D0%9A%D0%BE%D0%BB%D0%B0%D0%BA%D0%BE%D1%81%D0%BA%D0%B8
https://rosettacode.org/wiki/Kolakoski_sequence

Последовательность Колакоски - это бесконечная последовательность чисел 1 и 2, которая является кодированием длин серий 
и прототипом для бесконечного семейства родственных последовательностей.

Начало последовательности Колакоски:

1, 2, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 2, 1, 1, … 

Последовательность, составленная из количества цифр, встречающихся в последовательности подряд, в точности совпадает с исходной последовательностью:

И наоборот, каждое число последовательности Колакоски порождает последующие одно или два числа, чередуя единицы и двойки.

Это свойство самогенерации показывает, что последовательность Колакоски может быть описана как фрактал, то есть математический объект, кодирующий своё представление на других масштабах.

Последовательность Колакоски считается апериодической, то есть не имеет повторяющегося шаблона.

*/

// Time O(N)
// Space O(N)
const magicalString = n => {
  let seq = [1, 2];
  let res = [];
  let i = 0;
  let k = 0;

  while (i < n - 1) {
    res[i] = seq[k % seq.length];

    if (res[k] == 2) {
      i++;
      res[i] = res[i - 1];
    }

    i++;
    k++;
  }

  return res;
};
