/*
Design a data structure that supports all following operations in average O(1) time.

Note: Duplicate elements are allowed.
insert(val): Inserts an item val to the collection.
remove(val): Removes an item val from the collection if present.
getRandom: Returns a random element from current collection of elements.
           The probability of each element being returned is linearly related to the number of same value the collection contains.
Example:

  // Init an empty collection.
  RandomizedCollection collection = new RandomizedCollection();

  // Inserts 1 to the collection. Returns true as the collection did not contain 1.
  collection.insert(1);

  // Inserts another 1 to the collection. Returns false as the collection contained 1. Collection now contains [1,1].
  collection.insert(1);

  // Inserts 2 to the collection, returns true. Collection now contains [1,1,2].
  collection.insert(2);

  // getRandom should return 1 with the probability 2/3, and returns 2 with the probability 1/3.
  collection.getRandom();

  // Removes 1 from the collection, returns true. Collection now contains [1,2].
  collection.remove(1);

  // getRandom should return 1 and 2 both equally likely.
  collection.getRandom();

 */

class RandomizedCollection {
  constructor() {
    this.map = {};
    this.nums = [];
  }

  insert(val) {
    this.nums.push(val);
    if (!this.map[val]) this.map[val] = new Set();
    this.map[val].add(this.nums.length - 1);

    return !(this.map[val] && this.map[val].size);
  }

  remove(val) {
    if (!this.map[val] || !this.map[val].size) return false;

    const removeIndex = this.map[val].values().next().value;

    const lastIndex = this.nums.length - 1;
    const lastValue = this.nums.pop();

    this.map[val].delete(removeIndex);

    if (removeIndex === lastIndex) return true;

    this.nums[removeIndex] = lastValue;
    this.map[lastValue].delete(lastIndex);
    this.map[lastValue].add(removeIndex);

    return true;
  }

  getRandom() {
    const rand = Math.floor(Math.random() * this.nums.length);
    return this.nums[rand];
  }
}
