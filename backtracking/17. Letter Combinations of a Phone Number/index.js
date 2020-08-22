/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.
 */

/*
  Алгоритм работы бектрека!

  Довольно важный момент - это увеличение счетчика значений
  
  Пример: 23 
    1) при i = 0 берем ключ 2 и все его значения из мапы 
    добавляем значение в comb и увеличиваем индекс следущей цифры comb = ['a']

    2) при i = 1 берем ключ 3 и все его значения из мапы 
    добавляем значение в comb и увеличиваем индекс следущей цифры comb = ['a', 'd']

    3) достигаем ограничения comb.length === digits.length следовательно 
        добавляем значение comb = ['a', 'd'] в результат

    4) удаляем из стека последнее занчение 'd' comb становится равным comb = ['a']

    5) берем следущее значение из мапы при индексе равным i = 1 добавляем его в comb 
        comb становится равным comb = ['a', 'e'] 

    6) повторяем шаг 3 

    7) когда значения при i = 1 закончатся поднимается по стеку до уровня i = 0 где символ будет равен 'b'

    8) генерируем все последовательности для 'b'
    
*/

// Time O(N!)
// Space O(N)
const letterCombinations = digits => {
  if (digits.length === 0) return [];

  let ans = [];
  let map = {
    '1': '',
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };

  helper(0, []);

  return ans;

  function helper(start, comb) {
    if (comb.length === digits.length) {
      ans.push(comb.join(''));
      return;
    }

    for (let i = start; i < digits.length; i++) {
      let words = map[digits[i]];

      for (let word of words) {
        comb.push(word);

        helper(i + 1, comb);

        comb.pop();
      }
    }
  }
};

// Time O(N!)
// Space O(N)
const letterCombinations_II = digits => {
  if (digits.length === 0) return [];

  let ans = [];
  let n = digits.length;
  let map = {
    '1': '',
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };
  let visited = Array(n).fill(false);

  dfs(0, []);

  return ans;

  function dfs(index, comb) {
    if (index == n) {
      ans.push(comb.join(''));
      return;
    }

    for (let i = index; i < n; i++) {
      visited[i] = true;
      for (let ch of map[digits[i]]) {
        if (i > 0 && !visited[i - 1]) continue;
        comb.push(ch);
        dfs(index + 1, comb);
        comb.pop();
      }
      visited[i] = false;
    }
  }
};
