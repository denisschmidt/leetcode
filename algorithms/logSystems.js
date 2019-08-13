/*

This problem was asked by Twitter.

You run an e-commerce website and want to record the last N order ids in a log.

Implement a data structure to accomplish this, with the following API:
  record(order_id): adds the order_id to the log
  get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.

You should be as efficient with time and space as possible.
 */

class LogSystems {
  constructor(size) {
    this.log = [];
    this.size = size;
    this.lastIndex = 0;
  }

  record(orderId) {
    // main problem time this operation O(N)
    if (this.log.length === this.size) {
      this.log[this.lastIndex] = orderId;
    } else {
      this.log.push(orderId);
    }
    // main solution
    this.lastIndex = (this.lastIndex + 1) % this.size;
  }

  getLast(i) {
    return this.log(this.log.length - i);
  }
}
