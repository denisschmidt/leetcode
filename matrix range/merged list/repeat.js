/*
 Return a new sorted merged list from K sorted lists, each with size N.
 
 For example, if we had [[10, 15, 30], [12, 15, 20], [17, 20, 32]], 
 the result should be [10, 12, 15, 15, 17, 20, 20, 30, 32].

 */

const input = [[13, 15, 30], [12, 15, 20], [17, 20, 32]];

const getChildIndexes = index => {
  return [index * 2 + 1, index * 2 + 2];
};

const findMinChildIndex = (minHeap, left, right) => {
  let leftValue = minHeap[left];
  let rightValue = minHeap[right];
  let minChildIndex;

  if (leftValue !== undefined) {
    if (rightValue === undefined) {
      minChildIndex = leftValue;
    } else {
      minChildIndex = rightValue.value < leftValue.value ? right : left;
    }
  }

  return minChildIndex;
};

const bubbleDown = (minHeap, index) => {
  let currentValue = minHeap[index];
  let currentIndex = index;

  let [leftIndex, rightIndex] = getChildIndexes(currentIndex);
  let minIndex = findMinChildIndex(minHeap, leftIndex, rightIndex);
  let minValue = minIndex === undefined ? undefined : minHeap[minIndex];

  while (minValue !== undefined && currentValue.value > minValue.value) {
    [minHeap[currentIndex], minHeap[minIndex]] = [minHeap[minIndex], minHeap[currentIndex]];

    currentIndex = minIndex;

    [leftIndex, rightIndex] = getChildIndexes(currentIndex);
    minIndex = findMinChildIndex(minHeap, leftIndex, rightIndex);
    minValue = minIndex === undefined ? undefined : minHeap[minIndex];
  }
};

const mergeHead = nums => {
  const minHeap = nums.map((num, index) => ({
    arrayIndex: index,
    elementIndex: 0,
    value: num[0],
  }));

  for (let i = minHeap.length - 1; i >= 0; i--) {
    bubbleDown(minHeap, i);
  }

  let ans = [];

  while (minHeap[0].value !== Infinity) {
    let top = minHeap[0];
    ans.push(top.value);
    top.elementIndex++;

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
