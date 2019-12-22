/*

Что такое монотонное увеличение стека?

Грубо говоря, элементы в монотонном стеке увеличения сохраняют порядок возрастания.

Типичная парадигма монотонного увеличения стека:

Что может сделать монотонное увеличение стека?

1) PLE => Previous Less Element.
   Найти предыдущий элемент меньше текущего элемента в массиве с временем O(n):

  Какой предыдущий элемент меньше текущего?

  Например: [3, 7, 8, 4]
    Предыдущий элемент меньше 7 равен 3.
    Предыдущий элемент меньше 8 равен 7.
    Предыдущий элемент меньше 4 равен 3.
    Нет предыдущего элемента меньше для 3.

 */

let nums = [3, 7, 8, 4];

function findPreviousLessElement() {
  let stack = [];
  let previousLess = [];

  for (let i = 0; i < nums.length; i++) {
    let cnt = 1;

    while (stack.length && stack[stack.length - 1][0] > nums[i]) {
      let item = stack.pop();
      cnt += item[1];
    }

    stack.push([nums[i], cnt]);
    previousLess[i] = i - cnt;
  }

  return previousLess;
}

function findPreviousLessElement_II() {
  let stack = [];
  let previousLess = [];

  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      stack.pop();
    }

    previousLess[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(i);
  }

  return previousLess;
}

/*

2)  NLE => Next Less Element.
    Найти следующий элемент меньше каждого элемента в массиве с O(n) времени:

    Какой следующий элемент меньше текущего?

    Например: [3, 7, 8, 4]
      Следующим меньшим элементом 8 является 4.
      Следующим меньшим элементом 7 является 4.
      Нет следующего элемента меньше для 3 и 4.

 */

// let nums = [3, 7, 8, 4];

function findNextLessElement() {
  let stack = [];
  let nextLess = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    let cnt = 1;

    // next less
    while (stack.length && stack[stack.length - 1][0] >= nums[i]) {
      let item = stack.pop();
      cnt += item[1];
    }

    stack.push([nums[i], cnt]);
    nextLess[i] = i + cnt > nums.length - 1 ? -1 : i + cnt;
  }

  return nextLess;
}

function findNextLessElement_II() {
  let stack = [];
  let nextLess = Array(nums.length).fill(-1);

  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      let index = stack.pop();
      nextLess[index] = i;
    }
    stack.push(i);
  }

  return nextLess;
}

let a = findNextLessElement();
let b = findNextLessElement_II();

console.log(a, b);
