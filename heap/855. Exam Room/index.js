/*

In an exam room, there are N seats in a single row, numbered 0, 1, 2, ..., N-1.

When a student enters the room, they must sit in the seat that maximizes the distance to the closest person.  

If there are multiple such seats, they sit in the seat with the lowest number.  

(Also, if no one is in the room, then the student sits at seat number 0.)

Return a class ExamRoom(int N) that exposes two functions: 

ExamRoom.seat() returning an int representing what seat the student sat in, and 

ExamRoom.leave(int p) representing that the student in seat number p now leaves the room.  


It is guaranteed that any calls to ExamRoom.leave(p) have a student sitting in seat p. 

Example 1:
  Input: ["ExamRoom","seat","seat","seat","seat","leave","seat"], [[10],[],[],[],[],[4],[]]
  Output: [null,0,9,4,2,null,5]
  Explanation:
    ExamRoom(10) -> null
    seat() -> 0, no one is in the room, then the student sits at seat number 0.
    seat() -> 9, the student sits at the last seat number 9.
    seat() -> 4, the student sits at the last seat number 4.
    seat() -> 2, the student sits at the last seat number 2.
    leave(4) -> null
    seat() -> 5, the student sits at the last seat number 5.
​​​​​​​

Note:
  1 <= N <= 10^9
  ExamRoom.seat() and ExamRoom.leave() will be called at most 10^4 times across all test cases.
  Calls to ExamRoom.leave(p) are guaranteed to have a student currently sitting in seat number p.

*/

class ExamRoom {
  constructor(N) {
    this.size = N;

    this.pq = new PriorityQueue({
      comparator: (a, b) => {
        let distA = this.calcDist(a);
        let distB = this.calcDist(b);

        if (distA == distB) {
          return a[0] - b[0];
        }
        return distB - distA;
      },
    });

    this.pq.offer([-1, N]);
  }

  seat() {
    let [start, end] = this.pq.poll();
    let index = 0;

    if (start == -1) {
      index = 0;
    } else if (end == this.size) {
      index = this.size - 1;
    } else {
      index = start + Math.floor((end - start) / 2);
    }

    this.pq.offer([index, end]);
    this.pq.offer([start, index]);

    return index;
  }

  leave(index) {
    let copy = [];
    let left = 0;
    let right = 0;

    while (this.pq.size() > 0) {
      let interval = this.pq.poll();

      if (interval[1] == index) {
        left = interval;
      } else if (interval[0] == index) {
        right = interval;
      } else {
        copy.push(interval);
      }
    }

    this.pq.offer([left[0], right[1]]);

    for (let i = 0; i < copy.length; i++) {
      this.pq.offer(copy[i]);
    }
  }

  calcDist(interval) {
    let [start, end] = interval;

    if (start == -1) return end;

    if (end == this.size) return end - start - 1;

    return Math.floor((end - start) / 2);
  }
}

// Time O(N)
// Space - Space Limit
class ExamRoom_II {
  constructor(N) {
    this.visited = [];
    this.N = N;
    this.cnt = 0;
  }

  seat() {
    let i = 0;
    let max = -Number.MAX_VALUE;
    let index = -1;
    this.cnt++;

    while (i < this.N) {
      let cnt = 0;

      while (i < this.N && !this.visited[i]) {
        cnt++;
        i++;
      }

      if (cnt > 0) {
        let [closestCnt, j] = this.calcPoint(cnt, i);

        if (closestCnt > max) {
          max = closestCnt;
          index = j;
        }
      }
      i++;
    }

    this.visited[index] = true;

    return index;
  }

  leave(index) {
    this.visited[index] = false;
  }

  // расчитываем дистанцию после вставки
  // и индекс для вставки в массив
  calcPoint(cnt, index) {
    let sI = index - cnt;

    if (sI == 0 && !this.visited[sI]) {
      return [cnt - 1, 0];
    }

    if (index == this.N && !this.visited[index - 1]) {
      return [cnt - 1, index - 1];
    }

    if (cnt == 1) {
      return [0, index - 1];
    }

    if (cnt % 2 == 0) {
      let x = cnt / 2 - 1;
      return [x, index - cnt + x];
    } else {
      let x = (cnt - 1) / 2;
      return [x, index - cnt + x];
    }
  }
}
