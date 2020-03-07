/*

Design and implement a TwoSum class. It should support the following operations: add and find.

add - Add the number to an internal data structure.
find - Find if there exists any pair of numbers which sum is equal to the value.

Example 1:
  add(1); add(3); add(5);
  find(4) -> true
  find(7) -> false

Example 2:
  add(3); add(1); add(2);
  find(3) -> true
  find(6) -> false

*/

class TwoSum {
  constructor() {
    this.cnt = 0;
    this.map = new Map();
  }

  add(number) {
    this.map.set(number, this.map.has(number) ? this.map.get(number) + 1 : 1);
  }

  find(value) {
    for (let key of this.map.keys()) {
      let diff = value - key;

      if (diff === key && this.map.get(diff) > 1) {
        return true;
      } else if (diff !== key && this.map.has(diff)) {
        return true;
      }
    }
    return false;
  }
}
