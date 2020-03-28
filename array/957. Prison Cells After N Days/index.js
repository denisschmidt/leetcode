/*

There are 8 prison cells in a row, and each cell is either occupied or vacant.

Each day, whether the cell is occupied or vacant changes according to the following rules:

If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
Otherwise, it becomes vacant.
(Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.)

We describe the current state of the prison in the following way: cells[i] == 1 if the i-th cell is occupied, else cells[i] == 0.

Given the initial state of the prison, return the state of the prison after N days (and N such changes described above.)

 
Example 1:

  Input: cells = [0,1,0,1,1,0,0,1], N = 7
  Output: [0,0,1,1,0,0,0,0]
  Explanation: 
  The following table summarizes the state of the prison on each day:
  Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
  Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
  Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
  Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
  Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
  Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
  Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
  Day 7: [0, 0, 1, 1, 0, 0, 0, 0]

Example 2:
  Input: cells = [1,0,0,1,0,0,1,0], N = 1000000000
  Output: [0,0,1,1,1,1,1,0]
  

Note:
  cells.length == 8
  cells[i] is in {0, 1}
  1 <= N <= 10^9

*/

/*

  Алгоритм:

  Сохраняем все увиденные состояния.

  Давайте возьмем пример. 
  Предположим, что у нас спросили состояние через 10 ^ 9 дней. 
  Мы сохраняем каждое новое состояние. 
  
  Затем, когда снова видим то же состояние, мы знаем, что прошли (lastSeen - currVal) состояние между ними. 
  Итак, теперь мы знаем, что состояния повторяются каждый (lastSeen - currVal) раз. 
  
  Итак, наконец, вы можете изменить текущее N с этим значением, чтобы не повторять те же шаги. 
  
  [0,1,0,1,1,0,0,1]
  1000000000

  N -> N % (last_seen - curr_val) ==> result
  999999985 -> 999999985 % (999999999 - 999999985) ==> 5
  4 -> 4 % (999999998 - 4) ==> 4
  3 -> 3 % (999999997 - 3) ==> 3
  2 -> 2 % (999999996 - 2) ==> 2
  1 -> 1 % (999999995 - 1) ==> 1
  0 -> 0 % (999999994 - 0) ==> 0

  Анализ остатка от деления на 14:

  Скажем, N = 1000, мы знаем, что через каждые 14 дней состояние повторится поэтому, 
  N % 14 = 6 (что означает, что до последнего 6-го дня состояния будут повторяться) 
  Так что нет смысла делать повторяющиеся изменения состояний, просто переходите к последнему 6-му. 
  6 % 14 или 5 % 15 или 4 % 14 .... это всего лишь 6, 5, 4 .... что означает, 
  что нужно беспокоиться только о последних нескольких днях.
   
*/

// Time O(N)
// Space O(1)
const prisonAfterNDays_II = (cells, N) => {
  let map = new Map();

  while (N > 0) {
    let copy = Array(8).fill(0);

    map.set(cells.toString(), N--);

    for (let i = 0; i < 7; i++) {
      copy[i] = cells[i - 1] == cells[i + 1] ? 1 : 0;
    }
    cells = copy;

    if (map.has(cells.toString())) {
      N %= map.get(cells.toString()) - N;
    }
  }

  return cells;
};

/*

  Всего у нас есть 2^6 = 64 различных состояний

  Решение через паттерн каждые 14 шагов он повторяется
  Длина клеток четная, поэтому для любого состояния мы можем найти предыдущее состояние. 
  Таким образом, все состояния находятся в цикле.

*/

// Time O(N)
// Space O(1)
const prisonAfterNDays = (cells, N) => {
  for (let k = ((N - 1) % 14) + 1; k > 0; k--) {
    let cells2 = Array(8).fill(0);
    for (let i = 1; i < 7; ++i) {
      cells2[i] = cells[i - 1] == cells[i + 1] ? 1 : 0;
    }
    cells = cells2;
  }
  return cells;
};
