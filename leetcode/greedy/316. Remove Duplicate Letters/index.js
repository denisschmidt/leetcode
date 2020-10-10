/*

Given a string which contains only lowercase letters, remove duplicate letters so that every letter appears once and only once.
You must make sure your result is the smallest in lexicographical order among all possible results.

Example 1:
  Input: "bcabc"
  Output: "abc"

Example 2:
  Input: "cbacdcbc"
  Output: "acdb"



Много проблем может быть решено с помощью dp.
Решить, используя жадную стратегию, труднее, поскольку вам нужно доказать, что жадность будет работать для этой проблемы.
Есть некоторые явные признаки проблемы, где жадность может быть применима, но не сразу очевидна.

Пример:
1) Выбор элемента зависит только от его непосредственных соседей (wiggle sort).
2) Ответ монотонно не убывает или не увеличивается (сортировка). Это также применимо для LIS.
3) Все, что требует лексикографически наибольшего или наименьшего чего-либо.
4) Все, что требует ввод в отсортированном порядке, поможет.
5) Все, что требует ввод в прямом или обратном направлении
6) Все, что требует от вас отслеживания минимума или максимума чего-либо (подумайте о проблемах со скользящим окном).

Все это свидетельствует о том, что жадная стратегия может быть применима.

 */

// Time O(N)
// Space O(N)
const removeDuplicateLetters = str => {
  const map = {};

  // сохраняем кол-во встречающихся симолов
  for (let s of str) {
    map[s] = ~~map[s] + 1;
  }

  const visited = new Set();
  const ans = [];

  for (let s of str) {
    map[s]--;

    if (visited.has(s)) {
      continue;
    }

    // нужно ли нам удалять символ из стека или нет
    while (ans[ans.length - 1] > s && map[ans[ans.length - 1]] > 0) {
      visited.delete(ans[ans.length - 1]);
      ans.pop();
    }

    visited.add(s);
    ans.push(s);
  }

  return ans.join('');
};
