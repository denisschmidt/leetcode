/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  let temp = [];

  if (pushed.length !== popped.length) {
    return false;
  }

  let j = 0;
  for (let i = 0; i < pushed.length; i++) {
    temp.push(pushed[i]);

    while (temp.length > 0 && temp[temp.length - 1] === popped[j]) {
      temp.pop();
      j++;
    }
  }

  while (temp.length > 0 && temp[temp.length - 1] === popped[j]) {
    temp.pop();
    j++;
  }

  return temp.length > 0 ? false : true;
};
