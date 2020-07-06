/*

Given an Iterator class interface with methods: 
  next() and hasNext(), 
  design and implement a PeekingIterator that support the peek() operation -- it essentially peek() at the element that will be returned by the next call to next().

Example:
  Assume that the iterator is initialized to the beginning of the list: [1,2,3].

  Call next() gets you 1, the first element in the list.
  Now you call peek() and it returns 2, the next element. Calling next() after that still return 2. 
  You call next() the final time and it returns 3, the last element. 
  Calling hasNext() after that should return false.

Follow up: How would you extend your design to be generic and work with all types, not just integer?

*/

// One variable
class PeekingIterator {
  constructor(iterator) {
    this.iterator = iterator;
    this.peekElement = null;
  }

  peek() {
    if (this.peekElement == null) {
      this.peekElement = this.iterator.next();
    }
    return this.peekElement;
  }

  next() {
    if (this.peekElement != null) {
      let ans = this.peekElement;
      this.peekElement = null;
      return ans;
    }

    return this.iterator.next();
  }

  hasNext() {
    return this.iterator.hasNext() ? this.iterator.hasNext() : this.peekElement != null;
  }
}

// Two variable
class PeekingIterator_II {
  constructor(iterator) {
    this.iterator = iterator;
    this.peekedElement = null;
    this.hasPeeked = false;
  }

  peek() {
    if (!this.hasPeeked) {
      this.peekedElement = this.iterator.next();
      this.hasPeeked = true;
    }
    return this.peekedElement;
  }

  next() {
    if (!this.hasPeeked) {
      return this.iterator.next();
    }

    let ans = this.peekedElement;
    this.hasPeeked = false;
    this.peekedElement = null;
    return ans;
  }

  hasNext() {
    return this.hasPeeked || this.iterator.hasNext();
  }
}
