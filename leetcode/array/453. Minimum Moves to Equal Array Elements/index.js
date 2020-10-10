/*

Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

Example:
  Input:
  [1,2,3]

  Output:
  3

Explanation:
  Only three moves are needed (remember each move increments two elements):

  [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

*/

/*

  Этот подход основан на идее, что добавление 1 ко всем элементам, кроме одного эквивалентно уменьшению на 1 от одного элемента, 
  
  поскольку нас интересуют относительные уровни элементов, которые необходимо выровнять.
  
  Таким образом, задача упрощается, чтобы найти количество операций декремента, необходимых для выравнивания всех элементов данного массива. 
  
  Для нахождения этого очевидно, что мы сведем все элементы массива к минимальному элементу. 
  
  Но, чтобы найти решение, нам не нужно уменьшать элементы. 
  
  Итак, лучший способ сделать это - сделать все элементы в массиве равными элементу min.

  Тогда мин кол-во операций будет равно sum(array) - n * minimum

*/

// Time O(N)
// Space O(1)
const minMoves = nums => {
  let min = Math.min(...nums);
  let sum = nums.reduce((acc, x) => acc + x, 0);

  return sum - min * nums.length;
};

// Time O(N)
// Space O(1)
const minMoves_II = nums => {
  let cnt = 0;
  let min = Math.min(...nums);

  for (let x of nums) {
    cnt += x - min;
  }

  return cnt;
};

// Time O(NLogN)
// Space O(N)
const minMoves_III = nums => {
  let n = nums.length;
  let cnt = 0;
  nums.sort((a, b) => a - b);

  for (let i = n - 1; i > 0; i--) {
    cnt += nums[i] - nums[0];
  }

  return cnt;
};
