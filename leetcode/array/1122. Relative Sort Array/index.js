/*

Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  

Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

Example 1:
  Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
  Output: [2,2,2,1,4,3,3,9,6,7,19]
 

Constraints:
  arr1.length, arr2.length <= 1000
  0 <= arr1[i], arr2[i] <= 1000
  Each arr2[i] is distinct.
  Each arr2[i] is in arr1.

*/

// Time O(N * M)
// Space O(N)
const relativeSortArray = (arr1, arr2) => {
  let map = {};
  for (let x of arr1) {
    map[x] = ~~map[x] + 1;
  }

  let pos = 0;
  for (let x of arr2) {
    while (map[x]-- > 0) arr1[pos++] = x;
  }

  for (let x of Object.keys(map)) {
    while (map[x]-- > 0) arr1[pos++] = x;
  }

  return arr1;
};

// Time O(N * M) N - arr1.length M - arr2.length
// Space O(N)
const relativeSortArray_II = (arr1, arr2) => {
  let first = [];
  let second = [];
  let visited = Array(arr1.length).fill(false);

  for (let x of arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] == x) {
        first.push(arr1[i]);
        visited[i] = true;
      }
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!visited[i]) {
      second.push(arr1[i]);
    }
  }

  second.sort((a, b) => a - b);

  return [...first, ...second];
};
