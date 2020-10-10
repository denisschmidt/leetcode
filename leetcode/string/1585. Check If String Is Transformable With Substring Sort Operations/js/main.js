// Time O(N)
// Space O(N)
const isTransformable = (s, t) => {
  let map = new Map();
  let n = s.length;

  for (let i = n; i >= 0; i--) {
    let x = parseInt(s[i]);
    if (!map.has(x)) map.set(x, []);
    map.get(x).push(i);
  }

  for (let i = 0; i < n; i++) {
    let num = parseInt(t[i]);

    if (!map.has(num)) {
      return false;
    }

    for (let prevNum = num - 1; prevNum >= 0; prevNum--) {
      if (!map.has(prevNum)) continue;

      if (map.get(prevNum).length && last(map.get(prevNum)) < last(map.get(num))) {
        return false;
      }
    }

    map.get(num).pop();
  }

  return true;

  function last(x) {
    return x[x.length - 1];
  }
};
