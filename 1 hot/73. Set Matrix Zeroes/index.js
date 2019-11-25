/*
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:
  Input:
  [
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]
  Output:
  [
    [1,0,1],
    [0,0,0],
    [1,0,1]
  ]

Example 2:
  Input:
  [
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
  ]
  Output:
  [
    [0,0,0,0],
    [0,4,5,0],
    [0,3,1,0]
  ]

Follow up:
  A straight forward solution using O(mn) space is probably a bad idea.
  A simple improvement uses O(m + n) space, but still not the best solution.
  Could you devise a constant space solution?

 */

// Time O(N)
// Space O(1)
const setZeroes = matrix => {
  const n = matrix.length;
  const m = matrix[0].length;
  let colHasZero = false;
  let rowHasZero = false;

  // Проверить, содержит ли первый столбец 0
  for (let i = 0; i < n; i++) {
    if (matrix[i][0] === 0) {
      colHasZero = true;
      break;
    }
  }

  // Проверить, содержит ли первая строка 0
  for (let i = 0; i < m; i++) {
    if (matrix[0][i] === 0) {
      rowHasZero = true;
      break;
    }
  }

  // Перебрать остальные элементы матрицы и установить в matrix[i][0] и matrix[0][j] нули для всех нулевых элементов matrix[i][j]
  // Это как контрольные точки в позициях i == 0 и j == 0
  // Из этих позиций потом мы очищаем row и column
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // Обнулить строки на основании значений из первого столбца
  for (let i = 1; i < n; i++) {
    if (matrix[i][0] === 0) {
      nullifyRow(i);
    }
  }

  for (let i = 1; i < m; i++) {
    if (matrix[0][i] === 0) {
      nullifyColumn(i);
    }
  }

  if (colHasZero) {
    nullifyColumn(0);
  }

  if (rowHasZero) {
    nullifyRow(0);
  }

  function nullifyRow(row) {
    for (let j = 0; j < m; j++) {
      matrix[row][j] = 0;
    }
  }

  function nullifyColumn(col) {
    for (let j = 0; j < n; j++) {
      matrix[j][col] = 0;
    }
  }
};

// Time O(N * M)
// Space O(N + M)
const setZeroes2 = matrix => {
  const row = [];
  const column = [];
  const n = matrix.length;
  const m = matrix[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        row[i] = true;
        column[j] = true;
      }
    }
  }

  // Обнуление строк
  row.forEach((value, rowIndex) => {
    if (value) {
      for (let i = 0; i < m; i++) {
        matrix[rowIndex][i] = 0;
      }
    }
  });

  // Обнуление столбцов
  column.forEach((value, columnIndex) => {
    if (value) {
      for (let i = 0; i < n; i++) {
        matrix[i][columnIndex] = 0;
      }
    }
  });
};
