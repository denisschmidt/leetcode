/*

We sampled integers between 0 and 255, and stored the results in an array count:  count[k] is the number of integers we sampled equal to k.

Return the minimum, maximum, mean, median, and mode of the sample respectively, as an array of floating point numbers.  

The mode is guaranteed to be unique.

(Recall that the median of a sample is:

The middle element, if the elements of the sample were sorted and the number of elements is odd;
The average of the middle two elements, if the elements of the sample were sorted and the number of elements is even.)
 
Example 1:
  Input: count = [0,1,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  Output: [1.00000,3.00000,2.37500,2.50000,3.00000]

Example 2:
  Input: count = [0,4,3,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  Output: [1.00000,4.00000,2.18182,2.00000,1.00000]
 

Constraints:
  count.length == 256
  1 <= sum(count) <= 10^9
  The mode of the sample that count represents is unique.
  Answers within 10^-5 of the true value will be accepted as correct.

*/

/*

  [0,1,3,4 .

  0 - []
  1- [1]
  2 - [2, 2, 2]
  3 - [3,3,3,3]
  
  [1,2,2,   2,3,    3,3,3]

   [3, 4] 



  Output: [1.00000,3.00000,2.37500,2.50000,3.00000]




  [0,4,3,2,2

  0 - []
  1 - [1,1,1,1]
  2 - [2,2,2]
  3 - [3,3]
  4 - [4,4]  

*/

// Time O(255 * K)
// Space O(1)
const sampleStats = count => {
  let cnt = 0;
  let min = Number.MAX_VALUE;
  let max = -Number.MAX_VALUE;
  let modCnt = -Number.MAX_VALUE;
  let modVal = 0;
  let total = 0;

  for (let i = 0; i <= 255; i++) {
    if (count[i] > 0) {
      min = Math.min(min, i);
      max = Math.max(max, i);

      if (modCnt < count[i]) {
        modCnt = count[i];
        modVal = i;
      }

      total += count[i] * i;
      cnt += count[i];
    }
  }

  let mid = Math.floor(cnt / 2);
  let prev = null;
  let median = 0;
  let index = 0;

  for (let i = 0; i < 255; i++) {
    if (count[i] > 0) {
      if (index + count[i] >= mid + 1) {
        let k = 0;

        for (; k < count[i] && index < mid; k++) {
          index++;
        }

        if (cnt % 2 == 0) {
          median = k == 0 ? (i + prev) / 2 : (i + i) / 2;
        } else {
          median = i;
        }

        break;
      } else {
        index += count[i];
      }
      prev = i;
    }
  }

  return [min, max, total / cnt, median, modVal];
};
