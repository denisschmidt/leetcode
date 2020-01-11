/*
A chess knight can move as indicated in the chess diagram below:

This time, we place our chess knight on any numbered key of a phone pad (indicated above), and the knight makes N-1 hops.
Each hop must be from one key to another numbered key.

Each time it lands on a key (including the initial placement of the knight), 
it presses the number of that key, pressing N digits total.

How many distinct numbers can you dial in this manner?

Since the answer may be large, output the answer modulo 10^9 + 7.

Example 1:
  Input: 1
  Output: 10

Example 2:
  Input: 2
  Output: 20

Example 3:
  Input: 3
  Output: 46
 

Note: 1 <= N <= 5000

*/

let mod = 1e9 + 7;
let neighbors = {
  '1': ['8', '6'],
  '2': ['7', '9'],
  '3': ['4', '8'],
  '4': ['0', '9', '3'],
  '5': [],
  '6': ['1', '7', '0'],
  '7': ['2', '6'],
  '8': ['1', '3'],
  '9': ['4', '2'],
  '0': ['4', '6'],
};

// DFS
// Time O(N)
// Space O(N)
const knightDialer_II = N => {
  let cnt = 0;
  let cache = {};

  for (let i = 0; i < 10; i++) {
    cnt += helper(i, N);
  }
  return cnt % mod;

  function helper(position, hops) {
    let key = [position, hops].join('|');

    if (!cache[key]) {
      if (hops === 1) {
        return 1;
      }

      let ways = 0;

      for (let neighbor of neighbors[position]) {
        ways += helper(neighbor, hops - 1);
      }

      cache[key] = ways % mod;
    }

    return cache[key];
  }
};

// DP
// Time O(n * m * k)
// Space O(N)
const knightDialer = N => {
  // Наш базовый случай - 1 прыжок для каждого возможного числа
  let currentCounts = Array.from({ length: 10 }, () => 1);

  for (let hops = 1; hops < N; hops++) {
    let nextCounts = Array.from({ length: 10 }, () => 0);

    for (let number = 0; number < 10; number++) {
      for (let neighbor of neighbors[number]) {
        nextCounts[neighbor] += currentCounts[number] % mod;
      }
    }
    currentCounts = nextCounts;
  }

  return currentCounts.reduce((acc, v) => acc + v, 0) % mod;
};
