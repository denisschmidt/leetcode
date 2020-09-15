/*

Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

Example:
  MovingAverage m = new MovingAverage(3);
  m.next(1) = 1
  m.next(10) = (1 + 10) / 2
  m.next(3) = (1 + 10 + 3) / 3
  m.next(5) = (10 + 3 + 5) / 3

*/

// Circular Queue
class MovingAverage {
  constructor(size) {
    this.maxLen = size;
    this.sum = 0;
    this.queue = Array(size).fill(0);
    this.cnt = 0;
    this.head = 0;
  }

  next(val) {
    this.cnt++;

    let tail = (this.head + 1) % this.maxLen;

    this.sum = this.sum - this.queue[tail] + val;

    this.queue[tail] = val;

    this.head = tail;

    return this.sum / Math.min(this.cnt, this.maxLen);
  }
}
