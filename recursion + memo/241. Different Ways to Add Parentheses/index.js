/*

Given a string of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. 

The valid operators are +, - and *.

Example 1:
  Input: "2-1-1"
  Output: [0, 2]
  Explanation: 
  ((2-1)-1) = 0 
  (2-(1-1)) = 2

Example 2:
  Input: "2*3-4*5"
  Output: [-34, -14, -10, -10, 10]
  Explanation: 
  (2*(3-(4*5))) = -34 
  ((2*3)-(4*5)) = -14 
  ((2*(3-4))*5) = -10 
  (2*((3-4)*5)) = -10 
  (((2*3)-4)*5) = 10

*/

// https://en.wikipedia.org/wiki/Catalan_number
// Time O(N!)
// Space O(N!)
const diffWaysToCompute = input => {
  return helper(input);

  function helper(str) {
    let res = [];

    for (let i = 0; i < str.length; i++) {
      if (isNaN(str[i])) {
        let left = helper(str.slice(0, i));
        let right = helper(str.slice(i + 1));

        for (let l of left) {
          for (let r of right) {
            l = Number(l);
            r = Number(r);

            if (str[i] == '+') {
              res.push(l + r);
            } else if (str[i] == '-') {
              res.push(l - r);
            } else {
              res.push(l * r);
            }
          }
        }
      }
    }

    return res.length ? res : [str];
  }
};
