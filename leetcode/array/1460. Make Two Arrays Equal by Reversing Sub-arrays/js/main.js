// Time O(N)
// Space O(N)
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
const canBeEqual = (target, arr) => {
  if (target.length != arr.length) {
    return false;
  }

  let m1 = {};
  let m2 = {};

  for (let i = 0; i < target.length; i++) {
    m1[target[i]] = ~~m1[target[i]] + 1;
    m2[arr[i]] = ~~m2[arr[i]] + 1;
  }

  for (let k of Object.keys(m1)) {
    if (m1[k] != m2[k]) {
      return false;
    }
  }

  return true;
};
