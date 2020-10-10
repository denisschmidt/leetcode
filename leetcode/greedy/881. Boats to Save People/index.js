/*

The i-th person has weight people[i], and each boat can carry a maximum weight of limit.

Each boat carries at most 2 people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.  
(It is guaranteed each person can be carried by a boat.)

Example 1:
  Input: people = [1,2], limit = 3
  Output: 1
  Explanation: 1 boat (1, 2)

Example 2:
  Input: people = [3,2,2,1], limit = 3
  Output: 3
  Explanation: 3 boats (1, 2), (2) and (3)

Example 3:
  Input: people = [3,5,3,4], limit = 5
  Output: 4
  Explanation: 4 boats (3), (3), (4), (5)

Note:
  1 <= people.length <= 50000
  1 <= people[i] <= limit <= 30000

*/

// Time O(NLogN + N)
// Space O(N)
const numRescueBoats = (people, limit) => {
  people.sort((a, b) => a - b);

  let n = people.length;
  let cnt = 0;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    if (left == right) {
      cnt++;
      break;
    } else if (people[left] + people[right] <= limit) {
      left++;
      right--;
      cnt++;
    } else {
      right--;
      cnt++;
    }
  }

  return cnt;
};

// Time O(NLogN + N^2)
// Space O(N)
const numRescueBoats_II = (people, limit) => {
  people.sort((a, b) => a - b);

  let n = people.length;
  let visited = Array(n).fill(false);
  let cnt = 0;

  for (let i = n - 1; i >= 0; i--) {
    let w = people[i];

    if (visited[i]) continue;

    if (w > limit) {
      cnt++;
      continue;
    }

    for (let j = i - 1; j >= 0; j--) {
      if (visited[j]) continue;

      if (w + people[j] <= limit) {
        w += people[j];
        visited[j] = true;
        break;
      }
    }

    cnt++;
  }
  return cnt;
};
