/*
Given a time represented in the format "HH:MM", form the next closest time by reusing the current digits. 
There is no limit on how many times a digit can be reused.

You may assume the given input string is always valid. 

For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.

Example 1:
  Input: "19:34"
  Output: "19:39"
  Explanation: 
    The next closest time choosing from digits 1, 9, 3, 4, is 19:39, which occurs 5 minutes later.  
    It is not 19:33, because this occurs 23 hours and 59 minutes later.

Example 2:
  Input: "23:59"
  Output: "22:22"
  Explanation: 
    The next closest time choosing from digits 2, 3, 5, 9, is 22:22. 
    It may be assumed that the returned time is next day's time since it is smaller than the input time numerically.

 */

// BackTrack
const nextClosestTime = time => {
  const results = [];
  const nums = [time[0], time[1], time[3], time[4]];
  const targetTime = nums.join('');
  const targetDate = createDate(nums);

  helper([]);

  if (results.length === 0) {
    return time;
  }

  let ans1;
  let ans2;
  let minPlus = Number.MAX_VALUE;
  let minMinus = Number.MAX_VALUE;

  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    const date = createDate(result);
    const diff = date - targetDate;

    if (diff > 0) {
      if (minPlus > diff) {
        minPlus = diff;
        ans1 = result;
      }
    } else {
      if (minMinus > diff) {
        minMinus = diff;
        ans2 = result;
      }
    }
  }

  if (minPlus !== Number.MAX_VALUE) {
    return getAns(ans1);
  }

  return getAns(ans2);

  function helper(comb) {
    if (comb.length === nums.length) {
      const hours = parseInt(comb[0].toString() + comb[1].toString());
      const minutes = parseInt(comb[2].toString() + comb[3].toString());
      if (hours >= 0 && hours <= 24 && minutes >= 0 && minutes <= 59 && comb.join('') !== targetTime) {
        results.push([...comb]);
      }
    } else {
      for (let i = 0; i < nums.length; i++) {
        comb.push(nums[i]);
        helper(comb);
        comb.pop();
      }
    }
  }

  function getAns([h1, h2, m1, m2]) {
    return `${h1}${h2}:${m1}${m2}`;
  }

  function createDate(time) {
    const date = new Date();
    const hours = parseInt(time[0].toString() + time[1].toString());
    const minutes = parseInt(time[2].toString() + time[3].toString());
    date.setHours(date.getHours() + hours);
    date.setMinutes(date.getMinutes() + minutes);
    return date.getTime();
  }
};
