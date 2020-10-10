// DFS + MEMO
// Time O(M * N!) where  M - workers.length N - bikes.lengths
const assignBikes = (workers, bikes) => {
  let visitedBikes = Array(bikes.length).fill(false);
  let dp = new Map();

  return dfs(0, visitedBikes);

  function dfs(workerIndex, visitedBikes) {
    if (workerIndex == workers.length) {
      return 0;
    }

    let key = visitedBikes.toString();

    if (dp.has(key)) {
      return dp.get(key);
    }

    let min = Number.MAX_VALUE;

    for (let i = 0; i < bikes.length; i++) {
      if (visitedBikes[i]) {
        continue;
      }

      visitedBikes[i] = true;

      let dist = getDist(workers[workerIndex], bikes[i]);

      min = Math.min(min, dist + dfs(workerIndex + 1, visitedBikes));

      visitedBikes[i] = false;
    }

    dp.set(key, min);

    return min;
  }

  function getDist(bike, worker) {
    return Math.abs(bike[0] - worker[0]) + Math.abs(bike[1] - worker[1]);
  }
};
