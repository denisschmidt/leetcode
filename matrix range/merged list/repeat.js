/*
 Return a new sorted merged list from K sorted lists, each with size N.
 
 For example, if we had [[10, 15, 30], [12, 15, 20], [17, 20, 32]], 
 the result should be [10, 12, 15, 15, 17, 20, 20, 30, 32].

 */

const input = [[13, 15, 30], [12, 15, 20], [17, 20, 32]];

const getChildIndices = index => {
  return [2 * index + 1, 2 * index + 2];
};

const findMinChildIndex = (minHeap, left, right) => {
  let leftChild = minHeap[left];
  let rightChild = minHeap[right];
  let minChildIndex;

  if (leftChild !== undefined) {
    if (rightChild === undefined) {
      minChildIndex = left;
    } else {
      minChildIndex = rightChild.value < leftChild.value ? right : left;
    }
  }
  return minChildIndex;
};

const bubbleDown = (minHeap, index) => {
  const [leftIndex, rightIndex] = getChildIndices(index);
  let current = minHeap[index];

  let minChildIndex = findMinChildIndex(minHeap, leftIndex, rightIndex);
  let minChild = minChildIndex === undefined ? undefined : minHeap[minChildIndex];

  while (minChild !== undefined && current.value > minChild.value) {
    [minHeap[index], minHeap[minChildIndex]] = [minHeap[minChildIndex], minHeap[index]];

    index = minChildIndex;

    [leftIndex, rightIndex] = getChildIndices(index);
    minChildIndex = findMinChildIndex(minHeap, leftIndex, rightIndex);
    minChild = minChildIndex === undefined ? undefined : minHeap[minChildIndex];
  }
};

const heapify = nums => {
  for (let i = nums.length - 1; i >= 0; i--) {
    bubbleDown(nums, i);
  }
};

const mergeHead = nums => {
  const minHeap = [];

  nums.forEach((num, index) => {
    minHeap.push({
      arrayIndex: index,
      value: num[0],
      elementIndex: 0,
    });
  });

  heapify(minHeap);

  const ans = [];

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
