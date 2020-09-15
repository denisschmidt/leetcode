class MyCircularQueue {
  constructor(size) {
    this.size = size;
    this.queue = Array(size);
    this.headIndex = 0;
    this.count = 0;
  }

  /**
   * Insert an element into the circular queue. Return true if the operation is successful.
   * @param {number} value
   * @return {boolean}
   */
  enQueue(value) {
    if (this.isFull()) return false;

    let tailIndex = (this.headIndex + this.count) % this.size;
    this.queue[tailIndex] = value;
    this.count++;

    return true;
  }

  /**
   * Delete an element from the circular queue. Return true if the operation is successful.
   * @return {boolean}
   */
  deQueue() {
    if (this.isEmpty()) return false;

    this.headIndex = (this.headIndex + 1) % this.size;
    this.count--;

    return true;
  }

  /**
   * Get the front item from the queue.
   * @return {number}
   */
  Front() {
    if (this.isEmpty()) return -1;
    return this.queue[this.headIndex];
  }

  /**
   * Get the last item from the queue.
   * @return {number}
   */
  Rear() {
    if (this.isEmpty()) return -1;

    let tailIndex = (this.headIndex + this.count - 1) % this.size;

    return this.queue[tailIndex];
  }

  /**
   * Checks whether the circular queue is empty or not.
   * @return {boolean}
   */
  isEmpty() {
    return this.count === 0;
  }

  /**
   * Checks whether the circular queue is full or not.
   * @return {boolean}
   */
  isFull() {
    return this.count === this.size;
  }
}
