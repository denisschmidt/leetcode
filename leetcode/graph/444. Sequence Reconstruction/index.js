/*

Check whether the original sequence org can be uniquely reconstructed from the sequences in seqs. 

The org sequence is a permutation of the integers from 1 to n, with 1 ≤ n ≤ 104. 

Reconstruction means building a shortest common supersequence of the sequences in seqs (i.e., a shortest sequence so that all sequences in seqs are subsequences of it). 

Determine whether there is only one sequence that can be reconstructed from seqs and it is the org sequence.

Example 1:
  Input: org = [1,2,3], seqs = [[1,2],[1,3]]
  Output: false
  Explanation: [1,2,3] is not the only one sequence that can be reconstructed, because [1,3,2] is also a valid sequence that can be reconstructed.

Example 2:
  Input: org = [1,2,3], seqs = [[1,2]]
  Output: false
  Explanation: The reconstructed sequence can only be [1,2].

Example 3:
  Input: org = [1,2,3], seqs = [[1,2],[1,3],[2,3]]
  Output: true
  Explanation: The sequences [1,2], [1,3], and [2,3] can uniquely reconstruct the original sequence [1,2,3].

Example 4:
  Input: org = [4,1,5,2,6,3], seqs = [[5,2,6,3],[4,1,5,2]]
  Output: true
 

Constraints:
  1 <= n <= 10^4
  org is a permutation of {1,2,...,n}.
  seqs[i][j] fits in a 32-bit signed integer.
 

UPDATE (2017/1/8):
  The seqs parameter had been changed to a list of list of strings (instead of a 2d array of strings). 
  Please reload the code definition to get the latest changes.

*/

// BFS Topological Sort
// Time O(N*K)
// Space O(N)
const sequenceReconstruction = (org, seqs) => {
  // Step 1. Build the graph using adjacency list and indgree map
  let { adjList, indegree } = buildGraph(seqs);

  // Step 2. BFS
  let verticies = [...adjList.keys()];

  if (verticies.length !== org.length) {
    return false;
  }

  // Create a queue and enqueue all vertices with indegree 0
  let queue = verticies.filter(u => indegree.get(u) === 0);

  // Initialize count of visited vertices
  let index = 0;

  while (queue.length > 0) {
    let size = queue.length;

    if (size > 1) {
      return false;
    }

    let u = queue.shift();

    if (u != org[index++]) {
      return false;
    }

    for (let v of adjList.get(u)) {
      indegree.set(v, indegree.get(v) - 1);

      if (indegree.get(v) === 0) {
        queue.push(v);
      }
    }
  }

  return index === org.length;

  function buildGraph(seqs) {
    let adjList = new Map();
    let indegree = new Map();

    seqs.forEach(seq => {
      for (let i = 0; i < seq.length; i++) {
        let v = seq[i];

        if (!adjList.has(v)) {
          adjList.set(v, []);
          indegree.set(v, 0);
        }

        if (i > 0) {
          let u = seq[i - 1];

          adjList.get(u).push(v);
          indegree.set(v, indegree.get(v) + 1);
        }
      }
    });

    return { adjList, indegree };
  }
};

// Time O(N*K)
// Space O(N)
const sequenceReconstruction_II = (org, seqs) => {
  let indexes = new Map();
  let pairs = new Set();

  for (let i = 0; i < org.length; i++) {
    indexes.set(org[i], i);
  }

  for (let seq of seqs) {
    for (let i = 0; i < seq.length; i++) {
      if (!indexes.has(seq[i])) {
        return false;
      }

      if (i > 0 && indexes.get(seq[i - 1]) >= indexes.get(seq[i])) {
        return false;
      }

      pairs.add(`${seq[i - 1]}_${seq[i]}`);
    }
  }

  for (let i = 0; i < org.length; i++) {
    let pairKey = `${org[i - 1]}_${org[i]}`;

    if (!pairs.has(pairKey)) {
      return false;
    }
  }

  return true;
};
