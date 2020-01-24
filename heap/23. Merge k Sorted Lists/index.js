/*
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:
  Input:
  [
    1->4->5,
    1->3->4,
    2->6
  ]
  Output: 1->1->2->3->4->4->5->6
 */

const { makeLinkNodes } = require('../../algorithms/linkNode');
const { PriorityQueue } = require('../../algorithms/priorityQueue');

const l1 = makeLinkNodes([1, 4, 5]);
const l2 = makeLinkNodes([1, 3, 4]);
const l3 = makeLinkNodes([2, 6]);

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// Time:
// O(N*Log * K) где k - количество связанных списков
// Стоимость сравнения будет уменьшена до O(Log k) для каждого удаления и вставки в приоритетную очередь.
// Но нахождение узла с наименьшим значением O(1) времени.
// В окончательном связанном списке есть N узлов.

// Space:
// Создание нового связанного списка стоит O(N)
// В приведенном выше коде применяется метод на месте, стоимость которого O (1).
// А очередь с приоритетами (часто реализуемая с помощью куч) стоит O (k) пространства
// В большинстве случаев она намного меньше, чем N).
const mergeKLists = lists => {
  let pq = new PriorityQueue({ comparator: (a, b) => a.val - b.val });

  // инициализируем min кучу
  for (const list of lists) {
    if (list) {
      pq.offer(list);
    }
  }

  let dummy = new ListNode();
  let a = dummy;

  while (pq.size() > 0) {
    let list = pq.poll();

    if (list && list.next) {
      pq.offer(list);
    }

    a.next = list;
    a = a.next;
  }

  return dummy.next;
};
