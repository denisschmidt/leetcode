/*
Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia:

"A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."


Example:
  Input: citations = [3,0,6,1,5]
  Output: 3
  Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had
             received 3, 0, 6, 1, 5 citations respectively. 
             Since the researcher has 3 papers with at least 3 citations each and the remaining 
             two with no more than 3 citations each, her h-index is 3.
N
ote: If there are several possible values for h, the maximum one is taken as the h-index.
 */

// Time O(NLogN)
// Space O(1)
const hIndex = citations => {
  citations.sort((a, b) => a - b);

  const n = citations.length;
  let max = 0;

  for (let i = 0; i < n; i++) {
    max = Math.max(max, Math.min(citations[i], n - i));
  }
  return max;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(NLogN)
// Space O(1)
const hIndex2 = citations => {
  citations.sort((a, b) => a - b);

  const n = citations.length;
  let i = 0;

  while (i < n) {
    if (citations[n - 1 - i] > i) i++;
    else break;
  }

  return i;
};
