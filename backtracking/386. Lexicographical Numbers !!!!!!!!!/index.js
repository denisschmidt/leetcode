/*
386. Lexicographical Numbers

Given an integer n, return 1 - n in lexicographical order.

For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].

Please optimize your algorithm to use less time and space. The input size may be as large as 5,000,000.

 */

/*

Идея довольно проста.
Если мы посмотрим на порядок, то сможем узнать, что мы просто добавляем цифру от 0 до 9 к каждой цифре и делаем ее деревом.
Затем мы посещаем каждый узел в предзаказе.

       1        2        3 ...
      / \      /  \     / \
   10 ...19   20...29  30...39 ....
 */
// Time O(N) - но не точно

// Да, он быстро раздувает стек, но пока n - разумное целое число, стек в порядке.
// Кроме того, если число n гарантированно будет меньше, чем Number.MAX_VALUE, то глубина стека гарантированно будет меньше 12
// (помните, что пространственная сложность обхода дерева зависит в основном от глубины дерева;
// также помните, это пространство стека «возвращается» в систему при возврате рекурсивного метода).

const lexicalOrder = n => {
  const ans = [];

  for (let i = 1; i <= 9; ++i) {
    backtrack(i);
  }

  return ans;

  function backtrack(root) {
    if (root > n) return;

    ans.push(root);
    if (root > Number.MAX_VALUE / 10) return;

    let nextVal = root * 10;

    for (let i = 0; i <= 9; i++) {
      if (nextVal > Number.MAX_VALUE - i) break;
      backtrack(nextVal + i);
    }
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N)
// Space O(N)
const lexicalOrde2 = n => {
  const ans = [];
  let curr = 1;

  for (let i = 1; i <= n; i++) {
    ans.push(curr);
    if (curr * 10 <= n) {
      curr *= 10;
    } else if (curr % 10 !== 9 && curr + 1 <= n) {
      curr++;
    } else {
      // Допустим n = 600, а текущее число = 499, следующее число равно 5,
      // потому что есть все «9» после «4» в «499», поэтому мы должны делить 499 на 10, пока последняя цифра не будет « 9" .
      while (Math.floor(curr / 10) % 10 === 9) {
        curr = Math.floor(curr / 10);
      }
      // тут на выходе будет 49 / 10 = 4
      curr = Math.floor(curr / 10) + 1;
    }
  }

  return ans;
};
