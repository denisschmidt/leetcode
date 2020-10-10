/*

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:
  Input: [100, 4, 200, 1, 3, 2]
  Output: 4
  Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

*/

// Time O(N)
// Space O(N)
const longestConsecutive = nums => {
  let set = new Set(nums);
  let max = 0;

  nums.forEach((num, index) => {
    let cnt = 1;

    // удаляем из сета все элементы слева
    while (set.has(--num)) {
      cnt++;
      set.delete(num);
    }

    // возращаемся опять к текущему значению
    num = nums[index];

    // удаляем из сета все элементы справа
    while (set.has(++num)) {
      cnt++;
      set.delete(num);
    }

    max = Math.max(max, cnt);
  });

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
