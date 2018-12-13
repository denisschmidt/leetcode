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

const generateParenthesis = n => {
  const res = [];

  const fn = (k = 6, list = [], count = 0, index = 0 ) => {
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


generateParenthesis(6);

/*



 */
const generateParenthesis2 = n => {
  const ans = [];
  if (!n) {
    return [];
  }
  const backtrack = (ans, cur, open, close, max) => {
    if (cur.length === max * 2) {
      ans.push(cur);
      return;
    }
    // Мы можем открыть скобку, если у нас еще есть один (из n) для размещения.
    if (open < max) {
      backtrack(ans, cur + '(', open + 1, close, max);
    }
    // не должно привышать кол-во открытых скобок
    if (close < open) {
      backtrack(ans, cur + ')', open, close + 1, max);
    }
  };

  backtrack(ans, '', 0, 0, n);
  return ans;
};

const res = generateParenthesis2(3);
console.log('---', res);
