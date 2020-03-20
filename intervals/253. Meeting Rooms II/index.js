/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei),
find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
 */

const { PriorityQueue } = require('../algorithms/priorityQueue');

// Time O(NLogN)
// Space O(N)
const minMeetingRooms = function(intervals) {
  if (!intervals || intervals.length == 0) return 0;

  // Сортировка интервалов по времени начала
  intervals.sort((a, b) => a[0] - b[0]);

  // Использование минимальной кучи для отслеживания минимального времени окончания объединенных интервалов
  let pq = new PriorityQueue({ comparator: (a, b) => a[1] - b[1] });

  pq.offer(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];

    // получить конференц-зал, который заканчивается раньше
    let interval = pq.poll();

    if (current[0] >= interval[1]) {
      // если текущая встреча начинается сразу после
      // нет необходимости в новой комнате, объединить интервал
      interval[1] = current[1];
    } else {
      // в противном случае эта встреча нуждается в новой комнате
      pq.offer(current);
    }

    // не забыть вернуть комнату собраний в очередь
    pq.offer(interval);
  }

  return pq.size();
};

/*

Алгоритм

  [1- 10, 2 - 12, 14-15]

  Разделяем интервалы на два массива
  Массив начал и массив концов интервалов

  Изучая начальные события, мы обнаружим, что первые два начальных события произойдут до конечного события, 
  на которое указывает endIndex, поэтому нам нужны две комнаты.

  Затем, когда я укажу на третье начальное событие, мы обнаружим, что это событие происходит после конечного события, 
  на которое указывает endIndex, затем мы увеличиваем значение endIndex так, чтобы оно указывало на следующее конечное событие.

  То, что здесь происходит, можно считать завершением одного из двух предыдущих совещаний, и мы перенесли недавно начатое совещание в эту свободную комнату,
  поэтому нам не нужно увеличивать комнаты в это время и перемещать оба указателя вперед.

  [2, 11] [11, 16]

  1 < 11 rooms++
  11 < 11 false
  total 1

 */

// Time O(NLogN)
// Space O(N)
const minMeetingRooms_II = intervals => {
  const starts = [];
  const ends = [];

  for (let i = 0; i < intervals.length; i++) {
    let [start, end] = intervals[i];
    starts[i] = start;
    ends[i] = end;
  }

  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  let rooms = 0;
  let endIndex = 0;
  for (let i = 0; i < starts.length; i++) {
    if (starts[i] < ends[endIndex]) {
      rooms++;
    } else {
      endIndex++;
    }
  }

  return rooms;
};

/*
  Алгоритм HashMap / TreeMap для сортировки интервалов и записи перекрытий.

  Нам нужна структура данных, которая сортирует элементы и поддерживает быструю вставку.
  В Java TreeMap является идеальным кандидатом.
  В JS мы можем построить нашу собственную структуру двоичного дерева.

  Вот идея:
    - Загрузи все интервалы в TreeMap, где ключи являются границами (начала/конца) интервалов, 
        а значения накапливают изменения в этот момент времени.
    - Пройди через TreeMap (другими словами, пройти по временной шкале).
    - Если начинается новый интервал, увеличить счетчик этого значения на 1
    - Для конца интервала уменьшить счетчик на 1.
    - Вычислите количество активных текущих интервалов.

https://leetcode.com/problems/meeting-rooms-ii/discuss/203658/HashMapTreeMap-resolves-Scheduling-Problem


 */

// Time O(NlogN) - это такая сложность если у тебя TreeMap как в Java
// Space O(N)
const minMeetingRooms_III = function(intervals) {
  const map = {};

  for (let [start, end] of intervals) {
    // 1 новое событие будет начинаться с [start]
    map[start] = ~~map[start] + 1;

    // 1 новое событие закончится в [end];
    map[end] = ~~map[end] - 1;
  }

  let room = 0;
  let ans = 0;

  Object.values(map).forEach(value => {
    room = room + value;
    ans = Math.max(ans, room);
  });

  return ans;
};

// Time O(N^2)
// Space O(N)
const minMeetingRooms_IV = intervals => {
  if (!intervals.length) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  let count = intervals.length;
  const visited = new Set();
  let prev = [];

  for (let i = 0; i < intervals.length; i++) {
    if (visited.has(i)) continue;
    for (let j = i + 1; j < intervals.length; j++) {
      if (!overlaps(intervals[i], intervals[j]) && !visited.has(j)) {
        if (!prev.length) {
          count--;
          visited.add(j);
          prev.push(intervals[j]);
        } else {
          if (!overlaps(prev[prev.length - 1], intervals[j])) {
            count--;
            visited.add(j);
            prev.pop();
            prev.push(intervals[j]);
          }
        }
      }
    }
    prev = [];
  }

  return count;
};

function overlaps([x, y], [u, z]) {
  return y > u && x < z;
}
