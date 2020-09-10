/*
There are N rooms and you start in room 0.
Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to
access the next room.

Formally, each room i has a list of keys rooms[i],
and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.
A key rooms[i][j] = v opens the room with number v.

Initially, all the rooms start locked (except for room 0).

You can walk back and forth between rooms freely.

Return true if and only if you can enter every room.

Example 1:
         0   1   2   3
Input: [[1],[2],[3],[]]



Output: true
Explanation:
We start in room 0, and pick up key 1.
We then go to room 1, and pick up key 2.
We then go to room 2, and pick up key 3.
We then go to room 3.  Since we were able to go to every room, we return true.

Example 2:
          0      1     2   3
Input: [[1,3],[3,0,1],[2],[0]]
Output: false
Explanation: We can't enter the room with number 2.


Depth-First Search


Time Complexity: O(N + E)O(N+E), where NN is the number of rooms, and EE is the total number of keys.

Space Complexity: O(N)O(N) in additional space complexity, to store stack and seen.

*/

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let seen = [],
    stack = [];
  seen[0] = true;
  stack.push(0);

  while (stack.length) {
    let node = stack.pop(); // Получаем следующий ключ узла
    let room = rooms[node];

    for (let i = 0; i < room.length; i++) {
      if (!seen[room[i]]) {
        seen[room[i]] = true; // отметка того что мы открыли комнату
        stack.push(room[i]); // добавим ключ в стек
      }
    }
  }
  for (let i = 0; i < rooms.length; i++) {
    if (!seen[i]) return false;
  }
  return true;
};

const p1 = [[1, 1], []];

var a = canVisitAllRooms(p1);
console.log(a);
