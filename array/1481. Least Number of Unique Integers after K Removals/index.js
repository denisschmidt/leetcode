/*

Given an array of integers arr and an integer k. 

Find the least number of unique integers after removing exactly k elements.

Example 1:
  Input: arr = [5,5,4], k = 1
  Output: 1
  Explanation: Remove the single 4, only 5 is left.

Example 2:
  Input: arr = [4,3,1,1,3,3,2], k = 3
  Output: 2
  Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.
  

Constraints:
  1 <= arr.length <= 10^5
  1 <= arr[i] <= 10^9
  0 <= k <= arr.length

*/

// Time O(NLogN)
// Space O(N)
const findLeastNumOfUniqueInts = (arr, k) => {
  let map = {};

  for (let x of arr) {
    map[x] = ~~map[x] + 1;
  }

  let sortedMap = Object.keys(map)
    .sort((a, b) => map[a] - map[b])
    .map(k => [k, map[k]]);

  for (let i = 0; i < sortedMap.length && k > 0; i++) {
    let [key, val] = sortedMap[i];
    map[key] = map[key] - k;
    k -= val;
  }

  let res = 0;

  for (let k of Object.keys(map)) {
    if (map[k] > 0) {
      res++;
    }
  }

  return res;
};
