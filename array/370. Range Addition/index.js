/*

Assume you have an array of length n initialized with all 0's and are given k update operations.

Each operation is represented as a triplet: [startIndex, endIndex, inc] which increments each element of subarray A[startIndex ... endIndex] (startIndex and endIndex inclusive) with inc.

Return the modified array after all k operations were executed.

Example:
  Input: length = 5, updates = [[1,3,2],[2,4,3],[0,2,-2]]
  Output: [-2,0,3,5,3]
  Explanation:
    Initial state:
    [0,0,0,0,0]

    After applying operation [1,3,2]:
    [0,2,2,2,0]

    After applying operation [2,4,3]:
    [0,2,5,5,3]

    After applying operation [0,2,-2]:
    [-2,0,3,5,3]

*/

// Добавляем заначение инкремента в каждый начальный индекс
// И для баланса всей суммы в массиве в state[end + 1] вычитаем значение инкремента

// Time O(N + K)
// Space O(N)
const getModifiedArray = function(length, updates) {
  let state = Array(length).fill(0);

  for (let i = 0; i < updates.length; i++) {
    let [start, end, value] = updates[i];

    state[start] += value;

    if (end < length - 1) {
      state[end + 1] -= value;
    }
  }

  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += state[i];
    state[i] = sum;
  }

  return state;
};

// Time O(N * K)
// Space O(N)
const getModifiedArray_II = function(length, updates) {
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
