/*




 */

// Heap Helpers functions
// NOTE A lot of these are very similar to the methods used on Djikstra's Algorithm

// Simple formula for getting child indices
const getChildIndices = index => {
  return [2 * index + 1, 2 * index + 2];
};

// Returns the index of the smaller child, or undefined if there are no children
const findMinChildIndex = (minHeap, leftIndex, rightIndex) => {
  let minChildIndex;
  let leftChild = minHeap[leftIndex];
  let rightChild = minHeap[rightIndex];

  if (leftChild !== undefined) {
    if (rightChild === undefined) {
      minChildIndex = leftIndex;
    } else {
      minChildIndex = rightChild.value < leftChild.value ? rightIndex : leftIndex;
    }
  }
  return minChildIndex;
};

// Takes in an index since we want to use it for heapify
// When removing the top, just pass in index 0
const bubbleDown = (minHeap, index) => {
  let currentIndex = index;
  let current = minHeap[currentIndex];

  let [leftIndex, rightIndex] = getChildIndices(currentIndex);
  let minChildIndex = findMinChildIndex(minHeap, leftIndex, rightIndex);
  let minChild = minChildIndex === undefined ? undefined : minHeap[minChildIndex];

  while (minChild !== undefined && current.value > minChild.value) {
    [minHeap[currentIndex], minHeap[minChildIndex]] = [minHeap[minChildIndex], minHeap[currentIndex]];

    currentIndex = minChildIndex;

    [leftIndex, rightIndex] = getChildIndices(currentIndex);
    minChildIndex = findMinChildIndex(minHeap, leftIndex, rightIndex);
    minChild = minChildIndex === undefined ? undefined : minHeap[minChildIndex];
  }
};

// Just calls bubble down for every element in the heap, starting from the back
const heapify = minHeap => {
  for (let i = minHeap.length - 1; i >= 0; i--) {
    bubbleDown(minHeap, i);
  }
};

module.exports = {
  heapify,
  bubbleDown,
};
