/*

Given a string S, consider all duplicated substrings: (contiguous) substrings of S that occur 2 or more times.  
(The occurrences may overlap.)

Return any duplicated substring that has the longest possible length.  
(If S does not have a duplicated substring, the answer is "".)

Example 1:
  Input: "banana"
  Output: "ana"

Example 2:
  Input: "abcd"
  Output: ""
 

Note:
  2 <= S.length <= 10^5
  S consists of lowercase English letters.

*/

/*

  Алгоритм Rabin-Karp + Binary Search by string length:

  Алгоритм можно разделить на две задачи:
    1) Выполнить поиск по длине подстроки в интервале от 1 до N.
    2) Проверить, есть ли дублирующаяся подстрока заданной длины L.

  Задача 1: 
    Если есть дублирующаяся подстрока длины k, это означает, что также есть дублирующаяся подстрока длины k - 1.
    Следовательно, здесь можно использовать бинарный поиск по длине строки.

  Задача 2:
    Чтобы проверить, есть ли дублирующаяся подстрока заданной длины, будем использовать алгоритм Rabin-Karp 
    
    Который работает за линейное время

    Идея очень проста:
      Чтобы проверить, есть ли дублирующаяся подстрока заданной длины
        1) Итерируемся по строке в интервале от 1 до N - L.
        2) Перемещаем скользящее окно длины L
        3) Вычисляем rolling hash на основе предыдущего значения хеша.  
        4) Если в сете уже существую подстрока заданной длины L значит такая подстрока уже существует
        5) В противном случае добавляем сгенерированный хэш в хэш-сет.

*/

// Time O(NLogN) O(LogN) - binary search algorithm. O(N) - Rabin-Karp algorithm.
// Space O(N)
const longestDupSubstring = str => {
  let n = str.length;

  // преобразовываем строку в массив целых чисел
  // чтобы получать подстроки с постоянным временем
  let nums = Array(n);

  for (let i = 0; i < n; i++) {
    nums[i] = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
  }

  // базовое значение для скользящей хеш-функции
  let base = 26;

  // значение модуля для скользящей хеш-функции, чтобы избежать переполнения
  let modules = Math.pow(2, 32);

  let lo = 1;
  let hi = n;

  while (lo <= hi) {
    let len = lo + Math.floor((hi - lo) / 2);

    // Если мы уже нашли подстроку длины len допустим 3, тогда мы увеличиваем длину подстроки до 4
    // Чтобы проверить дублирование более длинной подстроки
    if (RabinKarpSearch(len, nums, base, modules) != -1) {
      lo = len + 1;
    } else {
      // Если не нашли, то уменьшаем длину подстроки
      hi = len - 1;
    }
  }

  let start = RabinKarpSearch(lo - 1, nums, base, modules);

  return str.substring(start, start + lo - 1);

  function RabinKarpSearch(len, nums, base, modules) {
    // вычисляем хеш строки str[:len]

    let h = 0;

    for (let i = 0; i < len; i++) {
      h = (h * base + nums[i]) % modules;
    }

    let seen = new Set();
    seen.add(h);

    // постоянное значение, которое будет часто использоваться: модуль ** L%
    let aL = 1;

    for (let i = 1; i <= len; i++) {
      aL = (aL * base) % modules;
    }

    for (let i = 1; i < n - len + 1; i++) {
      // вычисляем скользящий хеш за O (1) раз
      h = (h * base - ((nums[i - 1] * aL) % modules) + modules) % modules;

      h = (h + nums[i + len - 1]) % modules;

      if (seen.has(h)) {
        return i;
      }

      seen.add(h);
    }

    return -1;
  }
};
