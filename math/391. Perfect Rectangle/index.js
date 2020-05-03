/*

Given N axis-aligned rectangles where N > 0, determine if they all together form an exact cover of a rectangular region.

Each rectangle is represented as a bottom-left point and a top-right point. 

For example, a unit square is represented as [1,1,2,2]. (coordinate of bottom-left point is (1, 1) and top-right point is (2, 2)).


Example 1:
  rectangles = [
    [1,1,3,3],
    [3,1,4,2],
    [3,2,4,4],
    [1,3,2,4],
    [2,3,3,4]
  ]

  Return true. All 5 rectangles together form an exact cover of a rectangular region.
 
Example 2:
  rectangles = [
    [1,1,2,3],
    [1,3,2,4],
    [3,1,4,2],
    [3,2,4,4]
  ]

  Return false. Because there is a gap between the two rectangular regions.
  
Example 3:
  rectangles = [
    [1,1,3,3],
    [3,1,4,2],
    [1,3,2,4],
    [3,2,4,4]
  ]

  Return false. Because there is a gap in the top center.
 
Example 4:
  rectangles = [
    [1,1,3,3],
    [3,1,4,2],
    [1,3,2,4],
    [2,2,4,4]
  ]

  Return false. Because two of the rectangles overlap with each other.

*/

/*

  Условия валидности:

  1) Большая площадь прямоугольника должна быть равна сумме маленьких прямоугольников

  2) Количество всех точек должно быть четным
  
  3) Число всех четырех угловых точек должно встречаться в мапе только 1 раз

  В противном случае если условия не валидны возможны совпадения.

*/

// Time O(N)
// Space O(N)
const isRectangleCover = function(rectangles) {
  let map = new Map();
  let area = 0;

  for (let rec of rectangles) {
    addToSet(rec[0], rec[1]);
    addToSet(rec[0], rec[3]);
    addToSet(rec[2], rec[3]);
    addToSet(rec[2], rec[1]);

    area += (rec[2] - rec[0]) * (rec[3] - rec[1]);
  }

  let corners = [];

  for (let [coord, cnt] of map.entries()) {
    // добавляем только те углы которые появляются только 1 раз
    // если прямоугольник валиден эти углы будут определять максимальный прямоугольник
    if (cnt == 1) {
      corners.push(coord);
    } else if (cnt % 2 != 0) {
      return false;
    }
  }

  if (corners.length != 4) return false;

  let INF = Number.MAX_VALUE;
  let x1 = INF;
  let y1 = INF;

  let x2 = -INF;
  let y2 = -INF;

  // считаем площадь фигуры у которой углы появляются только 1 раз
  for (let corner of corners) {
    let [start, end] = corner.split('#');

    x1 = Math.min(x1, start);
    y1 = Math.min(y1, end);

    x2 = Math.max(x2, start);
    y2 = Math.max(y2, end);
  }

  return area == (x2 - x1) * (y2 - y1);

  function addToSet(x, y) {
    let key = x + '#' + y;

    if (!map.has(key)) {
      map.set(key, 1);
    } else {
      map.set(key, map.get(key) + 1);
    }
  }
};

// Time O(N)
// Space O(N)
const isRectangleCover_II = rectangles => {
  if (rectangles.length == 0) return true;

  let set = new Set();

  let INF = Number.MAX_VALUE;

  let x1 = INF;
  let y1 = INF;

  let x2 = -INF;
  let y2 = -INF;

  let area = 0;

  for (let rec of rectangles) {
    x1 = Math.min(x1, rec[0]);
    y1 = Math.min(y1, rec[1]);

    x2 = Math.max(x2, rec[2]);
    y2 = Math.max(y2, rec[3]);

    area += (rec[2] - rec[0]) * (rec[3] - rec[1]);

    addToSet(rec[0], rec[1]);
    addToSet(rec[0], rec[3]);
    addToSet(rec[2], rec[3]);
    addToSet(rec[2], rec[1]);
  }

  if (!set.has(x1 + '#' + y1) || !set.has(x1 + '#' + y2) || !set.has(x2 + '#' + y1) || !set.has(x2 + '#' + y2) || set.size != 4) {
    return false;
  }

  return area == (x2 - x1) * (y2 - y1);

  function addToSet(x, y) {
    let key = x + '#' + y;

    if (!set.has(key)) {
      set.add(key);
    } else {
      set.delete(key);
    }
  }
};

// Time O(N^2)
// Space O(1)
const isRectangleCover_III = function(rectangles) {
  if (rectangles.length == 0) return true;
  if (rectangles.length == 1) return true;

  let minX1 = Number.MAX_VALUE;
  let maxX2 = -1;

  let minY1 = Number.MAX_VALUE;
  let maxY2 = -1;

  for (let i = 0; i < rectangles.length; i++) {
    let [A, B, C, D] = rectangles[i];

    minX1 = Math.min(minX1, A);
    maxX2 = Math.max(maxX2, C);

    minY1 = Math.min(minY1, B);
    maxY2 = Math.max(maxY2, D);
  }

  let width = maxX2 - minX1;
  let height = maxY2 - minY1;

  let sum = 0;
  let minusSum = 0;

  for (let i = 0; i < rectangles.length; i++) {
    let [A, B, C, D] = rectangles[i];

    let cur = (C - A) * (D - B);

    for (let j = i + 1; j < rectangles.length; j++) {
      let [E, F, G, H] = rectangles[j];

      let minX = Math.max(A, E);
      let maxX = Math.min(G, C);

      let minY = Math.max(F, B);
      let maxY = Math.min(D, H);

      if (maxX > minX && maxY > minY) {
        minusSum = (maxX - minX) * (maxY - minY);
        break;
      }
    }

    sum += cur - minusSum;
  }

  return sum == width * height;
};
