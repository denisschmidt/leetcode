// Time O(N)
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

// Time O(N)
// Space O(N)
const relativeSortArray = (arr1, arr2) => {
  let map = new Map();

  for (let i = 0; i < arr2.length; i++) {
    map.set(arr2[i], i);
  }

  let first = arr1.filter(x => map.has(x)).sort((a, b) => map.get(a) - map.get(b));
  let second = arr1.filter(x => !map.has(x)).sort((a, b) => a - b);

  return [...first, ...second];
};
