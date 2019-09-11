const { makeLinkNodes } = require('../algorithms/linkNode');

const l1 = makeLinkNodes([1, 2, 3, 4, 5]);

let a = l1;
let b = l1;

let index = 1;
while (index !== 2) {
  a = a.next;
  index++;
}

let index2 = 1;
while (index2 !== 4) {
  b = b.next;
  index2++;
}

let tmp = a.val;
a.val = b.val;
b.val = tmp;

console.log('----', l1);
