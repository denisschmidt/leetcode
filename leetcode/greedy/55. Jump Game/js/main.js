/*

Greedy

Просто итерируемся и обновляем максимальный индекс который можем достичь
 
Выбор локального оптимального значения, чтобы потом достигнуть глобальное оптимальное значение

*/

// Time O(N)
// Space O(1)
const canJump = nums => {
  let index = 0;
  let localMax = 0;
  let totalMax = 0;
  let n = nums.length;

  while (index < n && localMax < n - 1) {
    while (index < n && index <= totalMax) {
      localMax = Math.max(localMax, nums[index] + index);
      index++;
    }

    if (localMax <= totalMax) {
      return false;
    }

    totalMax = localMax;
  }

  return true;
};

// DFS - добавляем в стек все возможные пути
// Допустим шаг [2,3,1,1,4] шаг 2 -> возможные переходы 3 или 1 добавляем их в стек

// Time O(N^2)
// Space O(N)
const canJump_II = nums => {
  let stack = [0];
  let n = nums.length;
  let visited = Array(nums.length);

  while (stack.length) {
    let i = stack.pop();

    if (visited[i]) continue;

    visited[i] = true;

    if (i == n - 1) return true;

    for (let nextPosition = i + 1; nextPosition <= i + nums[i]; nextPosition++) {
      if (visited[nextPosition]) continue;
      stack.push(nextPosition);
    }
  }

  return false;
};
