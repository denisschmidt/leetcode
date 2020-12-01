// Time O(N)
// Space O(1)
const arrangeCoins = n => {
  let i = 1;
  let cnt = 0;

  while (true) {
    n = n - i;
    i++;

    if (n < 0) {
      return cnt;
    }

    cnt++;
  }
};
