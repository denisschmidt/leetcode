const minWindow = (s, t) => {
  let start = 0;
  let end = 0;
  let counter = t.length;
  let minLength = Number.MAX_VALUE;
  let minStartIndex = 0;

  const map = t.split('').reduce(
    (acc, val) => ({
      ...acc,
      [val]: ++acc[val] || 1,
    }),
    {},
  );

  while (end < s.length) {
    const currentChart = s[end];

    if (map[currentChart] > 0) {
      counter--;
    }

    map[currentChart]--;
    end++;

    while (counter === 0) {
      if (end - start < minLength) {
        minLength = end - start;
        minStartIndex = start;
      }

      map[s[start]]++;

      if (map[s[start]] > 0) {
        counter++;
      }
      start++;
    }
  }

  return minLength === Number.MAX_VALUE ? '' : s.substr(minStartIndex, minLength);
};

const res = minWindow('ADOBECODEBANC', 'ABC');
console.log('---', res);
