/*
Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

Note: The input string may contain letters other than the parentheses ( and ).

Example 1:
  Input: "()())()"
  Output: ["()()()", "(())()"]

Example 2:
  Input: "(a)())()"
  Output: ["(a)()()", "(a())()"]

Example 3:
  Input: ")("
  Output: [""]

 */

function isValid(str) {
  let count = 0;
  for (let s of str) {
    if (s !== ')' && s !== '(') continue;
    if (s === '(') {
      count++;
    }
    if (s === ')') {
      count--;
      if (count < 0) return false;
    }
  }

  return count === 0;
}

// Time: O(2^N) поскольку в худшем случае у нас будут только левые скобки в выражении,
// И для каждой скобки у нас будет два варианта то есть удалить или рассмотреть это.
// Учитывая, что выражение содержит N скобок, сложность по времени будет O(2^N)

// Space: O(N), поскольку мы прибегаем к рекурсивному решению, а для рекурсивного решения всегда используется пространство стека,
// поскольку внутренние состояния функций сохраняются в стеке во время рекурсии.
// Максимальная глубина рекурсии определяет используемое пространство стека.
// Поскольку мы обрабатываем по одному символу за раз, а базовый случай для рекурсии - это когда мы обработали все символы строки выражения,
// размер стека будет O(N).
//
// Обратите внимание, что мы не рассматриваем пространство, необходимое для хранения допустимых выражений.
// Мы считаем только промежуточное пространство здесь.

const removeInvalidParentheses = function(str) {
  let n = str.length;
  let ans = [];
  let minRemove = Number.MAX_VALUE;

  backtrack();

  return [...new Set(ans)];

  function backtrack(comb = [], index = 0, open = 0, close = 0, remove = 0) {
    // Если мы достигли конца строки.
    if (index === n) {
      // Если текущее выражение допустимо.

      if (open === close) {
        // Если текущее количество удаленных скобок <= текущее минимальное количество

        if (remove <= minRemove) {
          //Если текущий счет превосходит общий минимум, который у нас есть до сих пор
          let possibleAnswer = comb.join('');
          if (remove < minRemove) {
            ans = [];
            minRemove = remove;
          }

          ans.push(possibleAnswer);

          return;
        }
      }
    } else {
      let currentCharacter = str[index];

      if (currentCharacter !== '(' && currentCharacter !== ')') {
        comb.push(currentCharacter);
        backtrack(comb, index + 1, open, close, remove);
        comb.pop();
      } else {
        //
        // Рекурсия, где мы удаляем текущий символ и движемся вперед
        backtrack(comb, index + 1, open, close, remove + 1);
        comb.push(currentCharacter);

        // Если это открывающая скобка, рассмотрим это рекурсивно
        if (currentCharacter === '(') {
          backtrack(comb, index + 1, open + 1, close, remove);
        } else if (close < open) {
          // только если у нас есть открытые скобки
          backtrack(comb, index + 1, open, close + 1, remove);
        }

        // Отмена операции добавления для других рекурсий.
        comb.pop();
      }
    }
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// В BFS мы обрабатываем состояния по уровням,
// в худшем случае нам нужно обрабатывать все уровни,
// мы можем анализировать временную сложность по уровням и складывать их,
// чтобы получить окончательную сложность.

// На первом уровне есть только одна строка, которая является входной строкой s, скажем, ее длина равна n,
// чтобы проверить, является ли она действительной, нам нужно O(n) время.
//
// На втором уровне мы удаляем одну ( или ) с первого уровня, поэтому есть C(n, n-1) новых строк, каждая из которых имеет n-1 символов,
// и для каждой строки нам нужно проверить, является ли она допустимо или нет, поэтому общая временная сложность на этом уровне составляет
// (n-1) x C (n, n-1).
//
// Переходите на третий уровень, общая сложность времени составляет (n-2) x C (n, n-2), и так далее, и так далее ...

// Конечная формула T(n) = n x C(n, n) + (n-1) x C(n, n-1) + ... + 1 x C(n, 1) = n x 2^(n-1).

// Time O(N * 2^N-1)

// BFS
const removeInvalidParentheses2 = function(str) {
  let ans = [];
  const n = str.length;

  if (!n) return [str];

  const visited = new Set();
  const queue = [];
  let found = false;

  queue.push(str);
  visited.add(str);

  while (queue.length) {
    let s = queue.shift();

    if (isValid(s)) {
      ans.push(s);
      found = true;
    }

    // Это гарантирует, что после того, как мы нашли правильный шаблон скобок, мы не будем делать никаких дальнейших bfs,
    // Используя элементы, ожидающие в очереди, так как любые дальнейшие bfs будут давать только строки меньшей длины.
    // Однако элементы, уже находящиеся в очереди, необходимо обработать, поскольку могут существовать другие решения такой же длины.
    if (found) continue;

    for (let i = 0; i < s.length; i++) {
      if (s[i] !== '(' && s[i] !== ')') continue;

      const newStr = s.substring(0, i) + s.substring(i + 1);

      // для каждого состояния, если оно не посещено, добавить его в очередь
      if (!visited.has(newStr)) {
        queue.push(newStr);
        visited.add(newStr);
      }
    }
  }

  return ans;
};
