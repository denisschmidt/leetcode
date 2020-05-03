/*

Median is the middle value in an ordered integer list. 
If the size of the list is even, there is no middle value. 
So the median is the mean of the two middle value.

Examples:
  [2,3,4] , the median is 3

  [2,3], the median is (2 + 3) / 2 = 2.5

Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right.
You can only see the k numbers in the window. 
Each time the sliding window moves right by one position. 
Your job is to output the median array for each window in the original array.

For example,
Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

Window position                Median
---------------               -----
[1  3  -1] -3  5  3  6  7       1
 1 [3  -1  -3] 5  3  6  7       -1
 1  3 [-1  -3  5] 3  6  7       -1
 1  3  -1 [-3  5  3] 6  7       3
 1  3  -1  -3 [5  3  6] 7       5
 1  3  -1  -3  5 [3  6  7]      6

Therefore, return the median sliding window as [1,-1,-1,3,5,6].

Note:
  You may assume k is always valid, ie: k is always smaller than input array's size for non-empty array.
  Answers within 10^-5 of the actual value will be accepted as correct.

*/

/*

  Для поддержании сбалансированности куч, фактические размеры куч не имеют значения. 
  Только количество допустимых элементов в обеих кучах имеет значение.

  Сохраняйте balance. Balance указывает на три ситуации: 
  
    1) balance = 0: обе кучи сбалансированы или почти сбалансированы. 
    
    2) balance < 0: maxHeap нуждается в большем количестве допустимых элементов. 
      Элементы из minHeap перемещены в maxHeap. 
    
    3) balance > 0: minHeap требует больше допустимых элементов. Элементы из maxHeap перемещаются в minHeap.

  
  Вставка входящего номера inNum: 
  
    1) Если inNum меньше или равно top элементу maxHeap, его можно вставить в maxHeap.
      Однако это приводит к дисбалансу minHeap (minHeap теперь имеет меньше допустимых элементов).
      Следовательно, баланс увеличивается. 
      
    2)  В противном случае, inNum должен быть добавлен в minHeap. 
        Очевидно, что теперь maxHeap неуравновешенный. Следовательно, баланс уменьшается.


  Lazy removal исходящего номера outNum:

    1) Если outNum присутствует в maxHeap, то аннулирование этого вхождения нарушит равновесие самого maxHeap.
      Следовательно, баланс должен быть уменьшен.

    2) Если outNum присутствует в minHeap, то аннулирование этого вхождения нарушит баланс самого minHeap. 
      Следовательно, баланс должен быть увеличен.
  
    3) Записываем кол-во вхождений недопустимого числа outNum в map.

    4) Как только недопустимое outNum число достигает одной из вершин кучи, мы удаляем его из кучи и уменьшаем количество вхождений в map.
    
*/

// Time O(N * LogK)
// Space O(N)
// Кучи все вместе требуют пространства O(K).
// Хеш-таблице нужно около O(N - K) пространства.
const medianSlidingWindow = function(nums, k) {
  let min = new PriorityQueue({ comparator: (a, b) => a - b });
  let max = new PriorityQueue({ comparator: (a, b) => b - a });

  let i = 0;
  let n = nums.length;

  while (i < k) {
    max.offer(nums[i++]);
  }

  for (let j = 0; j < Math.floor(k / 2); j++) {
    min.offer(max.poll());
  }

  let map = {};
  let ans = [];

  while (true) {
    ans.push(k % 2 != 0 ? max.peek() : (max.peek() + min.peek()) * 0.5);

    if (i >= n) {
      break;
    }

    let outNum = nums[i - k];
    let inNum = nums[i++];
    let balance = 0;

    balance += outNum <= max.peek() ? -1 : 1;

    map[outNum] = ~~map[outNum] + 1;

    if (!max.isEmpty() && inNum <= max.peek()) {
      balance++;
      max.offer(inNum);
    } else {
      balance--;
      min.offer(inNum);
    }

    if (balance < 0) {
      max.offer(min.poll());
      balance++;
    }

    if (balance > 0) {
      min.offer(max.poll());
      balance--;
    }

    while (map[max.peek()]) {
      map[max.peek()] = ~~map[max.peek()] - 1;
      max.poll();
    }

    while (!min.isEmpty() && map[min.peek()]) {
      map[min.peek()] = ~~map[min.peek()] - 1;
      min.poll();
    }
  }

  return ans;
};

// Time O(N * K*Log*K) -> O(N*K)
// Space O(K)
const medianSlidingWindow_II = function(nums, k) {
  let n = nums.length;
  let ans = [];

  for (let i = 0; i <= n - k; i++) {
    let window = nums.slice(i, i + k).sort((a, b) => a - b);

    if (k % 2 != 0) {
      ans.push(window[Math.floor(k / 2)]);
    } else {
      ans.push((window[Math.floor(k / 2) - 1] + window[Math.floor(k / 2)]) / 2.0);
    }
  }

  return ans;
};
