/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function(length, updates) {
  let state = Array(length).fill(false);

  let i = 0;

  while (i < updates.length) {
    let [start, end, inc] = updates[i++];

    for (let k = start; k <= end; k++) {
      state[k] += inc;
    }
  }

  return state;
};

getModifiedArray(5, [
  [1, 3, 2],
  [2, 4, 3],
  [0, 2, -2],
]);
