// Time O(N*M)
// Space O(min(N, M))
const findDiagonalOrder = matrix => {
  if (matrix.length === 0) {
    return [];
  }

  let n = matrix.length;
  let m = matrix[0].length;
  let nums = [];

  for (let i = 0; i < n + m - 1; i++) {
    let comb = [];

    // если i > m тогда мы считаем разницу и добавляем + 1
    let row = i < m ? 0 : i - m + 1;

    // если i > m тогда возвращаемся на последнюю ячейку в массиве
    let col = i < m ? i : m - 1;

    while (row < n && col > -1) {
      comb.push(matrix[row][col]);
      col--;
      row++;
    }

    if (i % 2 === 0) {
      comb.reverse();
    }

    nums = [...nums, ...comb];
  }

  return nums;
};
