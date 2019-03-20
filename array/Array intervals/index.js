/*
  Input Array: [11, 5, 8, 1,2,3,4,5, 9, 20]
  Output: [11, 5, 8, 1 - 5, 9, 20]
 */

const arrayIntervals = arr => {
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    let start = i;
    let end = i + 1;
    while (arr[end] - arr[start] === 1) {
      end++;
      start++;
    }
    let selectedArr = [];
    if (end - i > 1) {
      selectedArr = [`${arr[i]}-${arr[end - 1]}`];
      i = end - 1;
    } else {
      selectedArr.push(arr[i]);
    }
    ans.push(...selectedArr);
  }
  return ans;
  console.log('---', ans);
};

arrayIntervals([11, 5, 8, 1, 2, 3, 4, 5, 9, 20]);
