const { PriorityQueue } = require('../algorithms/priorityQueue');

class Leaderboard {
  constructor() {
    this.board = new Map();
  }

  addScore(playerId, score) {
    if (this.board.has(playerId)) {
      this.board.set(playerId, this.board.get(playerId) + score);
    } else {
      this.board.set(playerId, score);
    }
  }

  top(K) {
    let nums = [];
    let pq = new PriorityQueue({ comparator: (a, b) => a - b });
    let sum = 0;
    let ans = 0;

    for (let val of this.board.values()) {
      pq.offer(val);
      sum += val;
      if (pq.size() > K) {
        sum -= pq.poll();
        Math.max(ans, sum);
      }
    }

    return Math.max(ans, sum);
  }

  reset(playerId) {
    this.board.set(playerId, 0);
  }
}
