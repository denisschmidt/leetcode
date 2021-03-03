// Time O(LogN)
// Space O(1)
const solution = isBadVersion => {
  return n => {
    let lo = 1;
    let hi = n;
    let ans = n;

    while (lo < hi) {
      let mid = lo + Math.floor((hi - lo) / 2);

      if (!isBadVersion(mid)) {
        lo = mid + 1;
      } else {
        ans = mid;
        hi = mid;
      }
    }

    return ans;
  };
};
