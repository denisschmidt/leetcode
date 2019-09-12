/*
22. Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 */

// Space: Aнализ сложности основан на понимании количества элементов в generateParenthesis(n).
// Оказывается, что это n-е каталонское число O(4^N / sqrt(n))

// Time: Оказывается, что это n-е каталонское число O(4^N / sqrt(n)) и O(N)

const generateParenthesis = function(n) {
  let ans = [];

  if (n === 0) return ans;

  backtrack('', 0, 0, n);

  return ans;

  function backtrack(comb, open, close, max) {
    if (max * 2 === comb.length) {
      ans.push(comb);
      return;
    }

    if (open < max) {
      backtrack(comb + '(', open + 1, close, max);
    }

    if (close < open) {
      backtrack(comb + ')', open, close + 1, max);
    }
  }
};

/*
Recursion solution.

В этом способе предполагается, что мы начинаем перебирать последовательности с пустого списка.
После того, как в список добавлена скобка (открывающая или закрывающая),
снова выполняется вызов рекурсии и проверка условий.

Какие могут быть условия?

  Необходимо следить за разницей между открывающими и закрывающими скобками (переменная cnt)

  Нельзя добавить закрывающую скобку в список, если эта разница не является положительной,
  иначе скобочная последовательность перестанет быть правильной.

 */

/**
 * @param {string} k - количество скобок
 * @param {string} list - пустой список, куда кладем скобки
 * @param {string} count - разница между скобками
 * @param {string} index - индекс, по которому кладем скобку в список

 * @return {boolean}
 */
const generateParenthesis2 = n => {
  const res = [];

  const fn = (k = 6, list = [], count = 0, index = 0) => {
    // кладем откр. скобку, только если хватает места
    if (count <= k - index - 2) {
      list[index] = '(';
      fn(k, list, count + 1, index + 1);
    }
    // закр. скобку можно положить всегда, если cnt > 0
    if (count > 0) {
      list[index] = ')';
      fn(k, list, count - 1, index + 1);
    }

    if (index === k && count === 0) {
      res.push(list.join(''));
    }
  };
  fn(n);
  return res;
};
