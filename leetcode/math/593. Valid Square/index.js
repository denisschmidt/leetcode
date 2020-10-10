/*

Given the coordinates of four points in 2D space, return whether the four points could construct a square.

The coordinate (x,y) of a point is represented by an integer array with two integers.

Example:
  Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
  Output: True
 
Note:
  All the input integers are in the range [-10000, 10000].
  A valid square has four equal sides with positive length and four equal angles (90-degree angles).
  Input points have no order.

*/

// Time O(1)
// Space O(1)
const validSquare = (p1, p2, p3, p4) => {
  // Если мы вычислим все расстояния между 4 точками, 4 меньших расстояния должны быть равны (стороны)
  // И 2 больших расстояния тоже должны быть равны (диагональ)

  // Поэтому ответ должен содержать только 2 уникальных расстояния в случае квадрата
  // Исключение растояние равное 0
  let set = new Set([
    getPointerDistance(p1, p2),
    getPointerDistance(p1, p3),
    getPointerDistance(p1, p4),
    getPointerDistance(p2, p3),
    getPointerDistance(p2, p4),
    getPointerDistance(p3, p4),
  ]);

  return !set.has(0) && set.size === 2;

  // Получаем расстояние между двумя точками
  function getPointerDistance(p1, p2) {
    return Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2);
  }
};
