// DFS
// Time O(3^N * 4^N) (2,3,4,5,6,8) contains 3 chars (7, 9) contains 4 chars
// Space O(3^N * 4^N)
const letterCombinations = digits => {
  if (digits.length == 0) return [];

  let map = {
    '1': [],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };

  let res = [];

  dfs(0, '');

  return res;

  function dfs(index, comb) {
    if (index == digits.length) {
      res.push(comb);
      return;
    }

    for (let ch of map[digits[index]]) {
      dfs(index + 1, comb + ch);
    }
  }
};

/*
  Алгоритм работы backtrack!

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

// BACKTRACK
// Time O(N!)
// Space O(N)
const letterCombinations_II = digits => {
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
      for (let ch of map[digits[i]]) {
        comb.push(ch);
        helper(i + 1, comb);
        comb.pop();
      }
    }
  }
};
