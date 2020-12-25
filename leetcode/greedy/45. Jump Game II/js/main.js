// Time O(N)
// Space O(1)
const jump = nums => {
  let i = 0;
  let maxReach = 0;
  let localMaxReach = 0;
  let cnt = 0;

  while (i < nums.length && localMaxReach < nums.length - 1) {
    // ищем новый максимум в пределах до текущего максимума
    while (i < nums.length && i <= maxReach) {
      localMaxReach = Math.max(localMaxReach, i + nums[i]);
      i++;
    }

    if (localMaxReach <= maxReach) {
      return -1;
    }

    cnt++;
    maxReach = localMaxReach;
  }

  return cnt;
};

// Time O(N)
// Space O(N)
const jump_II = nums => {
  let queue = [0];
  let cnt = 0;
  let end = 0;
  let start = 0;

  while (queue.length) {
    let size = queue.length;

    for (let k = 0; k < size; k++) {
      let i = queue.shift();

      if (i === nums.length - 1) return cnt;

      // Получаем максимальный рендж [start, end]
      // Добавляем все итемы которые в этом рендже опять в очередь
      // Делаем это пока не дойдем до конца массива
      start = Math.max(start, i);
      end = Math.max(end, i + nums[i]);
    }

    for (let j = start; j <= end; j++) {
      queue.push(j);
    }
    cnt++;
  }

  return -1;
};
