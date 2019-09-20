/*
Implement a MyCalendarTwo class to store your events. A new event can be added if adding the event will not cause a triple booking.

Your class will have one method, book(int start, int end).
Formally, this represents a booking on the half open interval [start, end), the range of real numbers x such that start <= x < end.

A triple booking happens when three events have some non-empty intersection (ie., there is some time that is common to all 3 events.)

For each call to the method MyCalendar.book, return true if the event can be added to the calendar successfully without causing a triple booking.
 Otherwise, return false and do not add the event to the calendar.

Your class will be called like this:

MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)

Example 1:

  MyCalendar();
  MyCalendar.book(10, 20); // returns true
  MyCalendar.book(50, 60); // returns true
  MyCalendar.book(10, 40); // returns true
  MyCalendar.book(5, 15); // returns false
  MyCalendar.book(5, 10); // returns true
  MyCalendar.book(25, 55); // returns true

Explanation:
  The first two events can be booked.  The third event can be double booked.
  The fourth event (5, 15) can't be booked, because it would result in a triple booking.
  The fifth event (5, 10) can be booked, as it does not use time 10 which is already double booked.
  The sixth event (25, 55) can be booked, as the time in [25, 40) will be double booked with the third event;
  the time [40, 50) will be single booked, and the time [50, 55) will be double booked with the second event.
 

Note:
  The number of calls to MyCalendar.book per test case will be at most 1000.
  In calls to MyCalendar.book(start, end), start and end are integers in the range [0, 10^9].

 */

class MyCalendarTwo {
  constructor() {
    this.calendar = [];
    this.overlaps = [];
  }

  hasOverlap([x, y], [u, z]) {
    return z > x && y > u;
  }

  book(start, end) {
    for (let interval of this.overlaps) {
      if (this.hasOverlap(interval, [start, end])) {
        return false;
      }
    }

    for (let interval of this.calendar) {
      if (this.hasOverlap(interval, [start, end])) {
        this.overlaps.push([Math.max(start, interval[0]), Math.min(end, interval[1])]);
      }
    }

    this.calendar.push([start, end]);

    return true;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class MyCalendarTwo2 {
  constructor() {
    this.nums = [];
  }

  book(s, e) {
    this.nums.push([s, e]);

    const starts = [];
    const ends = [];

    for (let i = 0; i < this.nums.length; i++) {
      const [start, end] = this.nums[i];
      starts[i] = start;
      ends[i] = end;
    }

    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);

    let room = 0;
    let endIndex = 0;
    for (let start of starts) {
      if (start < ends[endIndex]) {
        room++;
      } else {
        endIndex++;
      }

      if (room > 2) {
        this.nums.pop();
        return false;
      }
    }
    return true;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Нам нужна структура данных, которая сортирует элементы и поддерживает быструю вставку.
В Java TreeMap является идеальным кандидатом.
В JS мы можем построить нашу собственную структуру двоичного дерева.
 */

// Time (Java): O(Nlog N), где N - количество забронированных событий. Вставка в TreeMap O(LogN)

// Time (JS): O (N^2) наихудший случай с O (NlogN) на случайных данных.
// Для каждого нового события мы вставляем событие в наше двоичное дерево.
// Поскольку это дерево может быть не сбалансировано, для добавления каждого события может потребоваться линейное количество шагов.

// Space O(N)
class MyCalendarTwo3 {
  constructor() {
    this.nums = [];
  }

  book(s, e) {
    this.nums.push([s, e]);
    const map = {};

    for (let [start, end] of this.nums) {
      map[start] = map[start] ? map[start] + 1 : 1;
      map[end] = map[end] ? map[end] - 1 : -1;
    }

    let room = 0;
    let ans = 0;
    for (let value of Object.values(map)) {
      room = room + value;
      ans = Math.max(ans, room);
      if (ans > 2) {
        this.nums.pop();
        return false;
      }
    }

    return true;
  }
}
