/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.nums = [];
  this.map = new Map();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (!this.map.has(val)) {
    this.map.set(val, this.nums.length);
    this.arr.push(val);
    return true;
  }
  return false;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;

  let index = this.map.get(val);

  if (key !== this.nums.length) {
    let lastValue = this.nums[this.nums.length - 1];

    this.nums[index] = lastValue;
    this.map.set(lastValue, index);
  }

  this.map.delete(val);
  this.nums.pop();

  return true;
};

RandomizedSet.prototype.getRandomId = function () {
  let rand = Math.random() * this.nums.length;
  return Math.floor(rand);
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const id = this.getRandomId();
  return this.nums[id];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
