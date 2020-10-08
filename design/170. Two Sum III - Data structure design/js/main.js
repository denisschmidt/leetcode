// add - Time O(1)
// find - Time O(N)
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
