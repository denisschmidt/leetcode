/*

(This problem is an interactive problem.)

On the sea represented by a cartesian plane, each ship is located at an integer point, and each integer point may contain at most 1 ship.

You have a function Sea.hasShips(topRight, bottomLeft) which takes two points as arguments and returns true if and only if there is at least one ship in the rectangle represented by the two points, including on the boundary.

Given two points, which are the top right and bottom left corners of a rectangle, return the number of ships present in that rectangle.  

It is guaranteed that there are at most 10 ships in that rectangle.

Submissions making more than 400 calls to hasShips will be judged Wrong Answer.  

Also, any solutions that attempt to circumvent the judge will result in disqualification.


Example :
  Input: ships = [[1,1],[2,2],[3,3],[5,5]], topRight = [4,4], bottomLeft = [0,0]
  Output: 3
  Explanation: From [0,0] to [4,4] we can count 3 ships within the range.
  
Constraints:
  On the input ships is only given to initialize the map internally. You must solve this problem "blindfolded". In other words, you must find the answer using the given hasShips API, without knowing the ships position.
  0 <= bottomLeft[0] <= topRight[0] <= 1000
  0 <= bottomLeft[1] <= topRight[1] <= 1000

*/

/**
 * // This is Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Sea() {
 *     @param {integer[]} topRight
 *     @param {integer[]} bottomLeft
 *     @return {boolean}
 *     this.hasShips = function(topRight, bottomLeft) {
 *         ...
 *     };
 * };
 */

// Разобьем текущий прямоугольник на 4 части посередине.
// Базовый случай: когда topRight == bottomLeft, то есть наш прямоугольник сводится к точке на карте.
// Мы возвращаем 1, если hasShips (topRight, bottomLeft) == true

// Time O(10logMN)
const countShips = (sea, topRight, bottomLeft) => {
  if (!sea.hasShips(topRight, bottomLeft)) return 0;

  let [x2, y2] = topRight;
  let [x1, y1] = bottomLeft;

  if (x2 == x1 && y2 == y1) return 1;

  let midX = Math.floor((x2 + x1) / 2);
  let midY = Math.floor((y2 + y1) / 2);

  return (
    countShips(sea, [midX, midY], bottomLeft) +
    countShips(sea, topRight, [midX + 1, midY + 1]) +
    countShips(sea, [midX, y2], [x1, midY + 1]) +
    countShips(sea, [x2, midY], [midX + 1, y1])
  );
};
