/*
Implement a SnapshotArray that supports the following interface:

SnapshotArray(int length) initializes an array-like data structure with the given length.  
Initially, each element equals 0.

void set(index, val) sets the element at the given index to be equal to val.
int snap() takes a snapshot of the array and returns the snap_id: the total number of times we called snap() minus 1.
int get(index, snap_id) returns the value at the given index, at the time we took the snapshot with the given snap_id
 
Example 1:
  Input: ["SnapshotArray","set","snap","set","get"]
        [[3],[0,5],[],[0,6],[0,0]]
  Output: [null,null,0,null,5]
  
  Explanation: 
    SnapshotArray snapshotArr = new SnapshotArray(3); // set the length to be 3
    snapshotArr.set(0,5);  // Set array[0] = 5
    snapshotArr.snap();  // Take a snapshot, return snap_id = 0
    snapshotArr.set(0,6);
    snapshotArr.get(0,0);  // Get the value of array[0] with snap_id = 0, return 5
 

Constraints:
  1 <= length <= 50000
  At most 50000 calls will be made to set, snap, and get.
  0 <= index < length
  0 <= snap_id < (the total number of times we call snap())
  0 <= val <= 10^9

  */
class SnapshotArray {
  constructor(length) {
    this.storage = Array.from({ length }).map(() => [{ val: 0, snapShot: -1 }]);
    this.snapShot = -1;
  }

  set(index, val) {
    this.storage[index].push({ val, snapShot: this.snapShot });
  }

  snap() {
    this.snapShot += 1;
    return this.snapShot;
  }

  get(index, snap_id) {
    const nums = this.storage[index];

    let left = 0;
    let right = nums.length - 1;
    let mid;

    while (left + 1 < right) {
      mid = left + Math.floor((right - left) / 2);

      if (nums[mid].snapShot < snap_id) {
        left = mid;
      } else {
        right = mid;
      }
    }

    if (nums[right].snapShot < snap_id) {
      return nums[right].val;
    } else {
      return nums[left].val;
    }
  }
}
