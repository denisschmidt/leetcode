/*

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:
  Input: x = 1, y = 4
  Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.

*/

/*

  Расстояние Хэмминга между двумя целыми числами - это число позиций, в которых соответствующие биты различны.

  Учитывая приведенное выше определение, оно может напоминать одну из битовых операций, называемых XOR
  
  Которая выводит 1 тогда и только тогда, когда входные биты отличаются.

  9  =       1 0 0 1
  12 =       1 1 0 0
  
  9 XOR 12 = 0 1 0 1

  Поэтому мы используем операцию XOR, а затем считаем полученные биты 

*/

// Time O(1)
// Space O(1)
const hammingDistance = function (x, y) {
  let xor = x ^ y;
  let cnt = 0;

  for (let i = 0; i < 32; i++) {
    let k = (xor >> i) & 1;

    if (k == 1) {
      cnt++;
    }
  }

  return cnt;
};

// Более быстрый способ посчета битов 1

// Brian Kernighan's Algorithm

/*
  
  Более эффективно подсчитать можно если бы мы могли пропустить нулевые биты между битами 1
  Например, 10001000.

  В приведенном выше примере, после обнаружения первого бита единицы в крайней правой позиции, 
  было бы более эффективно, если бы мы просто перепрыгнули на следующий бит единицы, 
  пропуская все нули между ними.
  

  Когда мы выполняем битовую операцию AND между num и num - 1 самый правый бит единицы в исходном числе будет очищен.

  Основываясь на вышеупомянутой идее, мы можем посчитать биты 1 для ввода 10001000 за 2 итерации, а не за 8.

*/

// Time O(1)
// Space O(1)
const hammingDistance_II = (x, y) => {
  let xor = x ^ y;
  let cnt = 0;

  while (xor != 0) {
    cnt++;

    xor = xor & (xor - 1);
  }

  return cnt;
};
