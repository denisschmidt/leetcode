/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
const furthestBuilding = function (heights, bricks, ladders) {
  let memo = new Map();

  let ans = dfs(0, bricks, ladders);

  return ans;

  function dfs(index, bricks, ladders) {
    if (index == heights.length - 1) {
      return 0;
    }

    if (memo.has(index)) {
      return memo.get(index);
    }

    let max = 0;

    if (heights[index] >= heights[index + 1]) {
      max = Math.max(max, 1 + dfs(index + 1, bricks, ladders));
    } else {
      if (heights[index + 1] > heights[index]) {
        if (heights[index + 1] - heights[index] <= bricks && bricks >= 0) {
          let d = heights[index + 1] - heights[index];
          max = Math.max(max, 1 + dfs(index + 1, bricks - d, ladders));
        }

        if (ladders > 0) {
          max = Math.max(max, 1 + dfs(index + 1, bricks, ladders - 1));
        }
      }
    }

    memo.set(index, max);

    return memo.get(index);
  }
};

/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
const furthestBuilding_II = (heights, bricks, ladders) => {
  let pq = new PriorityQueue({ comparator: (a, b) => b[0] - a[0] });
  let res = 0;

  pq.offer([0, bricks, ladders]);

  while (!pq.isEmpty()) {
    let [index, b, l] = pq.poll();

    if (index == heights.length - 1) {
      return index;
    }

    res = Math.max(res, index);

    let d = heights[index + 1] - heights[index];

    if (d > 0) {
      if (b >= d) {
        pq.offer([index + 1, b - d, l]);
      }

      if (l > 0) {
        pq.offer([index + 1, b, l - 1]);
      }
    } else {
      pq.offer([index + 1, b, l]);
    }
  }

  return res;
};
