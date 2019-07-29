/*
 Return a new sorted merged list from K sorted lists, each with size N.
 
 For example, if we had [[10, 15, 30], [12, 15, 20], [17, 20, 32]], the result should be [10, 12, 15, 15, 17, 20, 20, 30, 32].

Time Complexity:
O(KN log KN), since we have K * N total elements.

 */

const { bubbleDown, heapify } = require('../../algorithms/binaryHeap');

const input = [[10, 15, 30], [12, 15, 20], [17, 20, 32]];

// Brute Force
const mergeBruteForce = nums => {
  let mergeArr = [];

  for (let i = 0; i < nums.length; i++) {
    mergeArr.push(...nums[i]);
  }

  for (let i = 0; i < mergeArr.length; i++) {
    for (let j = i + 1; j < mergeArr.length; j++) {
      if (mergeArr[i] > mergeArr[j]) {
        let swap = mergeArr[i];
        mergeArr[i] = mergeArr[j];
        mergeArr[j] = swap;
      }
    }
  }
  return mergeArr;
};

const res = mergeBruteForce(input);
console.log('===', res);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Binary Head

// Space: O(NK) (Plus O(K) for the heap)

// Time: O(NK log(K))
const mergeHead = nums => {
  let minHeap = [];
  let result = [];

  nums.forEach((list, index) => {
    minHeap.push({
      arrayIndex: index,
      elementIndex: 0,
      value: list[0],
    });
  });

  heapify(minHeap);

  console.log('---', minHeap);

  /* 
  NOTE: Key Insight
    Each one of the K arrays will have one element in the heap at all times.
    One trick we're using is that once we've added all the elements from a given array
    to the result, we set the value property on its "node" in the heap to Infinity,
    so it bubbles down to the bottom.
    The goal here is to eventually fill the heap up with "nodes" with values of Infinity.
    Once the top node's value is Infinity, we break out of the while loop.
  */

  // Run every element in the arrays through the minHeap         O(NK log(K))

  // While the value at the top is not equal to infinity         O(N K) elements
  // Retrieve the top element in the heap                      O(1)
  // Insert value from top element into result                 O(1)
  // Increment the elementIndex                                O(1)
  // If the elementIndex is greater than the length of the array at arrayIndex:
  // Set the top's value to Infinity                         O(1)
  // Otherwise:
  // Update the value to reflect next element in the array   O(1)

  // Then bubble down the top element                          O(log(K)) for each element

  while (minHeap[0].value !== Infinity) {
    let top = minHeap[0];
    result.push(top.value);

    top.elementIndex += 1;
    if (top.elementIndex >= nums[top.arrayIndex].length) {
      top.value = Infinity;
    } else {
      top.value = nums[top.arrayIndex][top.elementIndex];
    }
    bubbleDown(minHeap, 0);
  }

  return result;
};

const res2 = mergeHead(input);
console.log('---', res2);
