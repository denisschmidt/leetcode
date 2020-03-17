/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  // Если мы вычислим все расстояния между 4 точками, 4 меньших расстояния должны быть равны (стороны),
  // И 2 больших расстояния тоже должны быть равны (диагональ)

  let set = new Set([
    getPointerDistance(p1, p2),
    getPointerDistance(p1, p3),
    getPointerDistance(p1, p4),
    getPointerDistance(p2, p3),
    getPointerDistance(p2, p4),
    getPointerDistance(p3, p4),
  ]);

  return !set.has(0) && set.size === 2;
};

function getPointerDistance(p1, p2) {
  return Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2);
}
