// Time O(N)
// Space O(N)
const longestConsecutive = nums => {
  let set = new Set(nums);
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let cnt = 1;

    // удаляем из сета все элементы слева
    while (set.has(--num)) {
      cnt++;
      set.delete(num);
    }

    num = nums[i];

    // удаляем из сета все элементы справа
    while (set.has(++num)) {
      cnt++;
      set.delete(num);
    }

    max = Math.max(max, cnt);
  }

  return max;
};

/*
  Union Find:  
  
  1) Объединяем последовательность чисел в одно подмножетсво. Например [1,2,3,4] будет являться одним подмножеством.
  2) Итерируется по массиву
  3) Для каждого значения находим представителя множества и подсчитываем кол-во вхождений. 

*/
// Time O(N^2)
// Space O(N)
const longestConsecutive_II = nums => {
  let parent = {};

  for (let num of nums) {
    if (!parent.hasOwnProperty(num)) {
      parent[num] = num;
    }

    if (parent.hasOwnProperty(num - 1)) {
      union(num - 1, num);
    }

    if (parent.hasOwnProperty(num + 1)) {
      union(num + 1, num);
    }
  }

  let f = {};
  let max = 0;
  let visited = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (visited.has(nums[i])) {
      continue;
    }
    visited.add(nums[i]);
    let v = find(nums[i]);

    f[v] = ~~f[v] + 1;
    max = Math.max(max, f[v]);
  }

  return max;

  function find(x) {
    if (x !== parent[x]) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(x, y) {
    let xr = find(x);
    let yr = find(y);

    if (xr !== yr) {
      parent[yr] = xr;
      return true;
    } else {
      return false;
    }
  }
};

const longestConsecutive_III = nums => {
  let map = new Map();
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    ans = Math.max(ans, dfs(i));
  }

  return ans;

  function dfs(index) {
    if (map.has(nums[index])) {
      return map.get(nums[index]);
    }

    let max = 1;

    for (let i = 0; i < nums.length; i++) {
      if (i == index) continue;

      if (nums[i] - nums[index] == 1) {
        max = Math.max(max, 1 + dfs(i));
      }
    }

    map.set(nums[index], max);

    return map.get(nums[index]);
  }
};
