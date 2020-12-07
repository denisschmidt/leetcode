/*

  Мы отслеживаем maxReach который можем достигнуть итерируясь по массиву. 
  
  При каждой итерации мы проверяем все пересекающиеся клипы и выбираем тот, который продвигает нашу позицию.

  Алгоритм:
    1) Мы сортируем наши клипы по начальной точке. 
    
    2) Поскольку клипы отсортированы, нам нужно анализировать каждый клип только один раз.

      Начинаем поиск с 0 точки. Ищем локальный максимум чтобы потом получить глобальный максимум.

      При каждой итерации мы проверяем все пересекающиеся клипы ( clips[i][0] <= maxReach).
      
      Продвигаем нашу позицию настолько далеко, насколько только мы можем и обновляем локальный максимум
      (maxLocalReach = Math.max(maxLocalReach, clips[i][1])) 
      
    3) Вернуть -1, если мы не можем двигаться дальше

    4) Обновить глобальный максимум maxReach = maxLocalReach

*/

// Time O(NLogN)
// Space O(N)
const videoStitching = function (clips, T) {
  clips.sort((a, b) => a[0] - b[0]);

  let i = 0;
  let maxReach = 0;
  let cnt = 0;

  while (maxReach < T) {
    let localMaxReach = 0;

    while (i < clips.length && maxReach >= clips[i][0]) {
      localMaxReach = Math.max(localMaxReach, clips[i++][1]);
    }

    if (localMaxReach <= maxReach) {
      return -1;
    }

    maxReach = localMaxReach;
    cnt++;
  }

  return cnt;
};
