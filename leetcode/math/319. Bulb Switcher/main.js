/*

There are n bulbs that are initially off. You first turn on all the bulbs. 

Then, you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). 

For the i-th round, you toggle every i bulb. For the n-th round, you only toggle the last bulb. 

Find how many bulbs are on after n rounds.

Example:
  Input: 3
  Output: 1 
  Explanation: 
    At first, the three bulbs are [off, off, off].
    After first round, the three bulbs are [on, on, on].
    After second round, the three bulbs are [on, off, on].
    After third round, the three bulbs are [on, off, off]. 

So you should return 1, because there is only one bulb is on.

*/

// Time O(LogN)
// Space O(1)
const bulbSwitch = n => {
  if (n <= 1) return n;
  if (n <= 3) return 1;

  let res = 2;
  let step = 5;
  let start = 4;
  let next = start + step;

  while (next <= n) {
    step = step + 2;
    next = next + step;
    res++;
  }

  return res;
};
