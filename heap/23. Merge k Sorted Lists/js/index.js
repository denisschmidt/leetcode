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

// Time:
// O(N * Log * K) где k - количество связанных списков
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

  // init minHeap
  for (let list of lists) {
    if (list) pq.offer(list);
  }

  let dummy = new ListNode();
  let p = dummy;

  while (pq.size() > 0) {
    let list = pq.poll();

    if (list && list.next) {
      pq.offer(list.next);
    }

    p.next = list;
    p = p.next;
  }

  return dummy.next;
};
