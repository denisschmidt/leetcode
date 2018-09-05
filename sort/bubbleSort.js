/**
  Сложность - O(N^2)
 */
function bubbleSort(a) {
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j + 1]) {
        let swap = a[j]
        a[j] = a[j + 1]
        a[j + 1] = swap
      }
    }
  }
  return a
}

const arr = [12, 2, 44, 65, 2, 6, 0, 12 , 23, 45, 76]

const newArr = bubbleSort(arr)
