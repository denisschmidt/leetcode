/*

Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.

Example 1:
  Input: [[1,1],[2,2],[3,3]]
  Output: 3
  Explanation:
  ^
  |
  |        o
  |     o
  |  o  
  +------------->
  0  1  2  3  4

Example 2:
  Input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
  Output: 4
  Explanation:
  ^
  |
  |  o
  |     o        o
  |        o
  |  o        o
  +------------------->
  0  1  2  3  4  5  6

NOTE: input types have been changed on April 15, 2019. 
Please reset to default code definition to get new method signature.


*/

/*

  Уравнение прямой: (x - x1) / (x2 - x1) = (y - y1) / (y2 - y1)

  Решение через O(N^3) интуитивное, но нам нужно улучшить время
  
  Алгоритм работы с улучшенным временем:

  Учитывая точку p, мы пересекаем и вычисляем наклоны всех линий, соединяющих p и другие точки. 
  
  Точки, соответствующие одному и тому же наклону, попадут на одну и ту же линию !!!! 
  
  На что нужно обратить внимание при реализации: 
  
  1) Для двух точек (x1, y1) и (x2, y2) их наклон равен (y2 - y1) / (x2 - x1), что может вызвать проблемы с точностью при больших числах. 

    Чтобы избавиться от проблем точности, мы рассматриваем наклон как пару ((y2 - y1), (x2 - x1)) 
    
    И вместо обычного деления (dy / dx) мы уменьшаем пару на их gcd перед вставкой в ​​мапу 
  
    И кодируем (dx и dy) в строку типа «dx_dy» 
  
  Пример: 
    dy = 4, dx = 2 и dy = 8, dx = 4 представляет один и тот же наклон 
    Поэтому мы должны разделить их на их gcd перед кодированием.

  2) Также нам все еще нужно обработать случай дубликатов, просто добавив количество дубликатов к результату.

*/

// Time O(N^2)
// Space O(N)
const maxPoints = function (points) {
  let total = 0;

  for (let i = 0; i < points.length; i++) {
    let map = {};
    let samePointers = 0;
    let max = 0;

    for (let j = i + 1; j < points.length; j++) {
      if (i === j) continue;

      if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) {
        samePointers++;
        continue;
      }

      let dx = points[j][0] - points[i][0];
      let dy = points[j][1] - points[i][1];

      let g = getGDC(dx, dy);
      let key = dx / g + '_' + dy / g;

      map[key] = ~~map[key] + 1;

      max = Math.max(max, map[key]);
    }

    total = Math.max(total, max + samePointers + 1);
  }

  return total;

  function getGDC(a, b) {
    if (b === 0) return a;

    return getGDC(b, a % b);
  }
};

// Time (O^3)
// Space O(1)
const maxPoints_II = function (points) {
  if (points.length <= 2) return points.length;

  let max = 0;

  for (let i = 0; i < points.length; ++i) {
    for (let j = i + 1; j < points.length; ++j) {
      if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) continue;
      let count = 2;

      let dy = points[j][1] - points[i][1];
      let dx = points[j][0] - points[i][0];

      for (let k = 0; k < points.length; ++k) {
        if (k != i && k != j) {
          let dy0 = points[i][1] - points[k][1];
          let dx0 = points[i][0] - points[k][0];

          if (BigInt(dy) * BigInt(dx0) == BigInt(dy0) * BigInt(dx)) {
            ++count;
          }
        }
      }

      max = Math.max(max, count);
    }
  }

  return max === 0 ? points.length : max;
};
