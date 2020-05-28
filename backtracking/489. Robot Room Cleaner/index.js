/*

Given a robot cleaner in a room modeled as a grid.

Each cell in the grid can be empty or blocked.

The robot cleaner with 4 given APIs can move forward, turn left or turn right. 

Each turn it made is 90 degrees.

When it tries to move into a blocked cell, its bumper sensor detects the obstacle and it stays on the current cell.

Design an algorithm to clean the entire room using only the 4 given APIs shown below.

interface Robot {
  // returns true if next cell is open and robot moves into the cell.
  // returns false if next cell is obstacle and robot stays on the current cell.
  boolean move();

  // Robot will stay on the same cell after calling turnLeft/turnRight.
  // Each turn will be 90 degrees.
  void turnLeft();
  void turnRight();

  // Clean the current cell.
  void clean();
}

Example:
  Input:
  room = [
    [1,1,1,1,1,0,1,1],
    [1,1,1,1,1,0,1,1],
    [1,0,1,1,1,1,1,1],
    [0,0,0,1,0,0,0,0],
    [1,1,1,1,1,1,1,1]
  ],
  row = 1,
  col = 3

Explanation:
  All grids in the room are marked by either 0 or 1.
  0 means the cell is blocked, while 1 means the cell is accessible.
  The robot initially starts at the position of row=1, col=3.
  From the top left corner, its position is one row below and three columns right.

Notes:
  The input is only given to initialize the room and the robot's position internally. You must solve this problem "blindfolded". In other words, you must control the robot using only the mentioned 4 APIs, without knowing the room layout and the initial robot's position.
  The robot's initial position will always be in an accessible cell.
  The initial direction of the robot will be facing up.
  All accessible cells are connected, which means the all cells marked as 1 will be accessible by the robot.
  Assume all four edges of the grid are all surrounded by wall.

*/

/*

  Это решение основано на той же идее, что и алгоритм решения лабиринтов, называемый правилом правой руки. 
  
  Идите вперед, убирая и помечая все клетки на пути как посещенные. 
  
  На препятствии поверните направо, снова идите вперед и т. Д. 
  
  Всегда поворачивайте направо на препятствия, а затем идите вперед. 
  
  Считайте уже посещенные клетки виртуальными препятствиями.

  Что делать, если после правого поворота впереди есть препятствие? 
    Поверните направо снова. 
  
  Как исследовать альтернативные пути из клетки? 
    Вернитесь назад к этой ячейке и поверните направо от вашего последнего исследуемого направления. 
    
  Когда остановиться? 
    Остановитесь, когда вы изучите все возможные пути, то есть все 4 направления (вверх, вправо, вниз и влево) для каждой посещенной ячейки.

*/

// Time O(4^(N-M))
// Space O(N - M)
const cleanRoom = robot => {
  // going clockwise : 0: 'up', 1: 'right', 2: 'down', 3: 'left'
  let directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let visited = new Set();

  backtrack(0, 0, 0);

  function backtrack(row, col, d) {
    visited.add(getKey(row, col));
    robot.clean();

    for (let i = 0; i < 4; ++i) {
      let newD = (d + i) % 4;
      let newRow = row + directions[newD][0];
      let newCol = col + directions[newD][1];

      if (!visited.has(getKey(newRow, newCol)) && robot.move()) {
        backtrack(newRow, newCol, newD);

        goBack();
      }

      // turn the robot following chosen direction : clockwise
      robot.turnRight();
    }
  }

  function getKey(x, y) {
    return `${x}@${y}`;
  }

  function goBack() {
    robot.turnRight();
    robot.turnRight();
    robot.move();
    robot.turnRight();
    robot.turnRight();
  }
};
