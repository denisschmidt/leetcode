// Time O(N)
// Space O(N)
const findPairs = (nums, k) => {
  let map = {};
  let res = 0;

  for (let x of nums) {
    map[x] = ~~map[x] + 1;
  }

  for (let val of Object.keys(map)) {
    if (k > 0 && parseInt(val) + k in map) {
      res++;
    } else if (k == 0 && map[val] > 1) {
      res++;
    }
  }

  return res;
};

// Time O(N)
// Space O(N)
const findPairs_II = (nums, k) => {
  let set = new Set();
  let res = 0;
  let visited = new Set();

  for (let i = 0; i < nums.length; i++) {
    let d1 = nums[i] - k;
    let d2 = nums[i] + k;

    let k11 = `${d1}#${nums[i]}`;
    let k12 = `${nums[i]}#${d1}`;
    let k21 = `${d2}#${nums[i]}`;
    let k22 = `${nums[i]}#${d2}`;

    if (set.has(d1)) {
      if (!visited.has(k11) && !visited.has(k12)) {
        res++;
        visited.add(k11);
        visited.add(k12);
      }
    }

    if (set.has(d2)) {
      if (!visited.has(k21) && !visited.has(k22)) {
        res++;
        visited.add(k21);
        visited.add(k22);
      }
    }

    set.add(nums[i]);
  }

  return res;
};
