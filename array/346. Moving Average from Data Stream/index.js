/*

Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

Example:
  MovingAverage m = new MovingAverage(3);
  m.next(1) = 1
  m.next(10) = (1 + 10) / 2
  m.next(3) = (1 + 10 + 3) / 3
  m.next(5) = (10 + 3 + 5) / 3

*/

class MovingAverage {
  constructor(size) {
    this.limit = size;
    this.sum = 0;
    this.nums = [];
  }

  next(val) {
    if (this.nums.length == this.limit) {
      let x = this.nums.shift();
      this.sum -= x;
      this.sum += val;
      this.nums.push(val);
      return this.sum / this.nums.length;
    } else {
      this.nums.push(val);
      this.sum += val;
      return this.sum / this.nums.length;
    }
  }
}
