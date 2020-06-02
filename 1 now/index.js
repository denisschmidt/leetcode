const test = s => {
  for (let i = 0; i < s.length; i++) {
    let left = s.substring(0, i);
    let right = s.substring(i + 1);

    console.log(left, s[i], right);
  }
};

test('abcd');
