/*
Given an array arr of positive integers, consider all binary trees such that:

  1) Each node has either 0 or 2 children;
  2) The values of arr correspond to the values of each leaf in an in-order traversal of the tree.
    (Recall that a node is a leaf if and only if it has 0 children.)

left - root - right обход

Array: [6, 2, 4]

1)

        24 (6 * 4)
       /  \
(6*2) 12    4
     /  \
    6    2

2)

    24 (6 * 4)
   /  \
  6    8 (2 * 4)
      / \
     2   4
 */

// Time O(N^2)
// Space O(N)
// Алгоритм: Найти maxIndex, затем сократить массив до 3 частей. [Low, maxIndex -1] [maxIndex] [maxIndex + 1, high].
const mctFromLeafValues_II = arr => {
  let ans = 0;

  helper(0, arr.length - 1);

  return ans;

  function helper(low, high) {
    if (low > high) return 0;
    if (low === high) return arr[low];

    // если осталось два элемента, то добавить умножение этих двух чисел и вернуть max
    if (low + 1 === high) {
      ans += arr[low] * arr[high];
      return Math.max(arr[low], arr[high]);
    }

    let maxIndex = low;
    for (let i = low; i <= high; i++) {
      if (arr[i] > arr[maxIndex]) {
        maxIndex = i;
      }
    }

    let left = helper(low, maxIndex - 1);
    let right = helper(maxIndex + 1, high);

    // проверяем, осталось ли == 0, если нет, умножаем
    if (left !== 0) ans += arr[maxIndex] * left;

    // сделать то же самое на правой стороне.
    if (right !== 0) ans += arr[maxIndex] * right;

    return arr[maxIndex];
  }
};
