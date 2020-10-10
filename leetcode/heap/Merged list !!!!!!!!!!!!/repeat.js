/*
 Return a new sorted merged list from K sorted lists, each with size N.
 
 For example, if we had [[10, 15, 30], [12, 15, 20], [17, 20, 32]], 
 the result should be [10, 12, 15, 15, 17, 20, 20, 30, 32].

 */

const input = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

const getIndexes = index => {
  return [index * 2 + 1, index * 2 + 2];
};

const findMinChildIndex = (minHeap, left, right) => {
  let minIndex;
  let leftChild = minHeap[left];
  let rightChild = minHeap[right];

  if (leftChild !== undefined) {
    if (rightChild === undefined) {
      minIndex = left;
    } else {
      minIndex = leftChild.value > rightChild.value ? right : left;
    }
  }
  return minIndex;
};

const bubbleDown = (minHeap, index) => {
  let current = minHeap[index];
  let [left, right] = getIndexes(index);
  let minIndex = findMinChildIndex(minHeap, left, right);
  let minChild = minIndex === undefined ? undefined : minHeap[minIndex];

  while (minChild !== undefined && current.value > minChild.value) {
    [minHeap[index], minHeap[minIndex]] = [minHeap[minIndex], minHeap[index]];

    index = minIndex;
    [left, right] = getIndexes(index);
    minIndex = findMinChildIndex(minHeap, left, right);
    minChild = minIndex === undefined ? undefined : minHeap[minIndex];
  }
};

const heapify = minHeap => {
  for (let i = minHeap.length; i >= 0; i--) {
    bubbleDown(minHeap, i);
  }
};

const mergeHead = nums => {
  const minHeap = [];
  let ans = [];

  nums.forEach((num, index) => {
    minHeap.push({
      arrayIndex: index,
      value: num[0],
      elementIndex: 0,
    });
  });

  heapify(minHeap);

  while (minHeap[0].value !== Infinity) {
    let top = minHeap[0];
    ans.push(top.value);

    top.elementIndex += 1;

    if (top.elementIndex >= nums[top.arrayIndex].length) {
      top.value = Infinity;
    } else {
      top.value = nums[top.arrayIndex][top.elementIndex];
    }
    bubbleDown(minHeap, 0);
  }

  return ans;
};

const res = mergeHead(input);
console.log('====', res);
