/*
22. Generate Parentheses

Given n pairs of parentheses, write a function to generate all strinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

Recursion solution.

Добавляем '(' или ')' только тогда, когда мы знаем, что это останется действительной последовательностью. 
Мы можем сделать это, отслеживая количество открывающих и закрывающих скобок.

Мы можем открыть скобку, если у нас open < n. 
Мы можем закрыть скобку, если она не будет превышать количество открывающих скобок.

*/

// Time: Оказывается, что это n-е каталонское число O(4^N / sqrt(n)) и O(N)
// Time worst: O(N!)

// Space: Aнализ сложности основан на понимании количества элементов в generateParenthesis(n).
// Оказывается, что это n-е каталонское число O(4^N / sqrt(n))

const generateParenthesis = n => {
  const ans = [];

  helper();

  return ans;

  // когда рекурсивный вызов выходит из условии open < max
  // следующий вызов backtrack() в условии close < open выполняется без «(»
  function helper(str = '', open = 0, close = 0, max = n) {
    if (max * 2 === str.length) {
      ans.push(str);
      return;
    }

    if (open < max) {
      helper(str + '(', open + 1, close, max);
    }

    if (close < open) {
      helper(str + ')', open, close + 1, max);
    }
  }
};
