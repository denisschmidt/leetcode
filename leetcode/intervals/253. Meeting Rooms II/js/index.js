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
  поэтому нам не нужно увеличивать комнаты в это время и перемещаем оба указателя вперед.

  [2, 11] [11, 16]

  1 < 11 rooms++
  11 < 11 false
  total 1

*/

// Time O(NLogN)
// Space O(N)
const minMeetingRooms = intervals => {
  let start = [];
  let end = [];

  for (let [s, e] of intervals) {
    start.push(s);
    end.push(e);
  }

  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  let index = 0;
  let rooms = 0;

  for (let i = 0; i < start.length; i++) {
    if (start[i] < end[index]) {
      rooms++;
    } else {
      index++;
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

const { PriorityQueue } = require('../algorithms/priorityQueue');

// Time O(NLogN)
// Space O(N)
const minMeetingRooms_II = intervals => {
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

// Time O(NlogN) - это такая сложность если у тебя TreeMap как в Java
// Space O(N)
const minMeetingRooms_III = intervals => {
  let map = {};

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
