/*

Given an array of integers arr, you are initially positioned at the first index of the array.

In one step you can jump from index i to index:

i + 1 where: i + 1 < arr.length.
i - 1 where: i - 1 >= 0.
j where: arr[i] == arr[j] and i != j.
Return the minimum number of steps to reach the last index of the array.

Notice that you can not jump outside of the array at any time.

Example 1:
  Input: arr = [100,-23,-23,404,100,23,23,23,3,404]
  Output: 3
  Explanation: You need three jumps from index 0 --> 4 --> 3 --> 9. Note that index 9 is the last index of the array.

Example 2:
  Input: arr = [7]
  Output: 0
  Explanation: Start index is the last index. You don't need to jump.

Example 3:
  Input: arr = [7,6,9,6,9,6,9,7]
  Output: 1
  Explanation: You can jump directly from index 0 to index 7 which is last index of the array.

Example 4:
  Input: arr = [6,1,9]
  Output: 2

Example 5:
  Input: arr = [11,22,7,7,7,7,7,7,7,22,13]
  Output: 3
 
Constraints:
  1 <= arr.length <= 5 * 10^4
  -10^8 <= arr[i] <= 10^8

*/

/* 
  BFS solution

  BFS traversal give us the shortest path to the end of the array

  1) Create a queue initializing it index = 0
  2) Create a map of all occurrences of the value in the array. Example -> 100: have next indexes [0, 4]

  In the loop, we have 2 conditions:

  1) In a queue add prev and next indexes only if they do't go beyond array range and indexes was not visited.
  2) If map with current arr[i] is not empty then these indexes were not yet in a queue. We add them to a queue.  
  3) After adding all indexes we can increase cnt since 1 step has already been completed. 
  
*/

// Time O(N)
// Space O(N)
const minJumps = arr => {
  let queue = [0];
  let n = arr.length;
  let cnt = 0;
  let visited = [];

  visited[0] = true;

  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], []);
    }

    map.get(arr[i]).push(i);
  }

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let i = queue.shift();

      if (i === n - 1) {
        return cnt;
      }

      if (i - 1 >= 0 && !visited[i - 1]) {
        visited[i - 1] = true;
        queue.push(i - 1);
      }

      if (i + 1 < n && !visited[i + 1]) {
        visited[i + 1] = true;
        queue.push(i + 1);
      }

      if (map.has(arr[i]) && map.get(arr[i]).length > 0) {
        let x = map.get(arr[i]).length;

        for (let k = 0; k < x; k++) {
          let j = map.get(arr[i]).pop();
          if (i == j) continue;
          queue.push(j);
          visited[j] = true;
        }
      }
    }

    cnt++;
  }

  return cnt;
};
