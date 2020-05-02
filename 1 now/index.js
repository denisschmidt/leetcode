/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
var minAvailableDuration = function(slots1, slots2, duration) {
  let start = new Set();
  let end = new Set();

  for (let i = 0; i < slots1.length; i++) {
    start.add(slots1[i][0]);
    end.add(slots1[i][1]);
  }

  for (let i = 0; i < slots2.length; i++) {
    start.add(slots2[i][0]);
    end.add(slots2[i][1]);
  }

  start = Array.from(start);
  end = Array.from(end);

  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  while (i < start.length && j < end.length) {
    if (start[i] < end[j]) {
      i++;
    } else {
      if (end[j] - start[i - 1] >= duration) {
        return [start[i - 1], start[i - 1] + duration];
      }

      while (start[i] > end[j] && j < end.length) {
        j++;
      }
    }
  }

  return [];
};
