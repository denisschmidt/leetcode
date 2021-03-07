// Time: O(n)
// Space: O(1)

const compress = chars => {
  let ans = 0;
  let index = 0;

  while (index < chars.length) {
    let curChar = chars[index];
    let count = 0;

    while (index < chars.length && curChar === chars[index]) {
      index++;
      count++;
    }

    chars[ans] = curChar;
    ans++;

    if (count !== 1) {
      const countArr = count.toString().split('');

      for (let count of countArr) {
        chars[ans] = count;
        ans++;
      }
    }
  }

  return ans;
};
