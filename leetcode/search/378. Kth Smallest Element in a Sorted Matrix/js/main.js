/*

Нужно найти K наименьшее значение

Ключевым моментом для любого двоичного поиска является выяснение «Search Space». 
Для меня, я думаю, есть два вида «Search Space» - index и range (диапазон от наименьшего числа до самого большого числа).
Чаще всего, когда массив сортируется в одном направлении, мы можем использовать index как «Search Space», 
когда массив не отсортирован, и мы собираемся найти конкретное число, мы можем использовать «range».

Причина, по которой мы не использовали индекс в качестве «Search Space» для этой задачи, заключается в том, что матрица отсортирована по двум направлениям, мы не можем найти линейный способ сопоставления числа и его индекса.

Возможное решение: в этом случае решение представляет собой просто целое число.

Search Space: в этом случае пространство поиска задается как [MIN, MAX], где MIN и MAX являются минимальным и максимальным элементами в матрице соответственно.

Метод обхода: в этом случае мы можем выполнить бинарный поиск, поскольку пространство поиска сортируется естественным образом в порядке возрастания.

Алгоритм проверки: в этом случае алгоритм проверки реализуется путем сравнения количества элементов в матрице, 
  меньшего или равного возможному решению, обозначенному как cnt, с рангом k: 

Если cnt < k, мы отбрасываем левую половину пространства поиска в противном случае мы отбрасываем правую половину.



https://leetcode.com/problems/k-th-smallest-prime-fraction/discuss/115819/Summary-of-solutions-for-problems-%22reducible%22-to-LeetCode-378

*/

// Time O(N * Log(MAX - MIN))
// Space O(1)
const kthSmallest = (matrix, k) => {
  let n = matrix.length;
  let m = matrix[0].length;

  // Берем самое маленькое и максимально возможное число
  // Затем мы уменьшаем пространство поиска в соответствии с двумя числами
  let left = matrix[0][0];
  let right = matrix[n - 1][m - 1];

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    let cnt = calc(mid);

    // Получаем кол-во чисел меньше mid
    // Если cnt < k необходимо чтобы большее кол-во чисел было меньше mid
    // Чтобы получить больше чисел которые меньше mid нужно увеличивать левую сторону
    if (cnt < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;

  // получаем кол-во значений которые меньше mid
  function calc(num) {
    let res = 0;
    for (let i = n - 1; i >= 0; i--) {
      let j = m - 1;

      // указатель j будет двигаться только в одном направлении
      while (j >= 0 && matrix[i][j] > num) {
        j--;
      }
      res += j + 1;
    }
    return res;
  }
};

const { PriorityQueue } = require('../../../algorithms/priorityQueue');

// Time O(min(K,N)+K∗logN)
// Space O(N)
// Min Heap
const kthSmallest_II = (matrix, k) => {
  // create a min heap that stores { val, i, j }
  const pq = new PriorityQueue({ comparator: (a, b) => a.val - b.val });

  // put matrix[0][0] to the min heap
  pq.offer({ val: matrix[0][0], i: 0, j: 0 });

  while (--k > 0) {
    const { i, j } = pq.poll();

    // put matrix[i + 1][j] to the min heap if it hasn't been visited
    if (i < matrix.length - 1 && matrix[i + 1][j] !== null) {
      pq.offer({ val: matrix[i + 1][j], i: i + 1, j });
      matrix[i + 1][j] = null;
    }

    // put matrix[i][j + 1] to the min heap if it hasn't been visited
    if (j < matrix[0].length - 1 && matrix[i][j + 1] !== null) {
      pq.offer({ val: matrix[i][j + 1], i, j: j + 1 });
      matrix[i][j + 1] = null;
    }
  }

  return pq.peek().val;
};
