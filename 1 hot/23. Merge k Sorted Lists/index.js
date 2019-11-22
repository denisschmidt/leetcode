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
  if (!lists || lists.length === 0) {
    return null;
  }

  const heap = new PriorityQueue({
    comparator: (a, b) => a.val - b.val,
  });

  const dummy = new ListNode(0);
  let p = dummy;

  // Initialize
  for (let list of lists) {
    if (list) {
      heap.offer(list);
    }
  }

  while (heap.size() > 0) {
    p.next = heap.poll();
    p = p.next;

    if (p && p.next) {
      heap.offer(p.next);
    }
  }

  return dummy.next;
};

mergeKLists([l1, l2, l3]);
