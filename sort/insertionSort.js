// FIX ERROR
const insertionSort = a => {
  for (let i = 1; i < a.length; i++) {
    let key = a[i];
    let j = i - 1;

    while (j > 0 && a[j] > key) {
      a[j + 1] = a[j];
      j = j - 1;
    }
    a[j + 1] = key;
  }
  return a;
};

const sortedArr = insertionSort([5, 2, 4, 6, 1, 3]);

console.log('---', sortedArr);
