// Helper
function flatter(arg) {
  return arg.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc.concat(flatter(item));
    }
    return acc.concat([item]);
  }, []);
}

/**
 * @param {number[][]} v
 */
var Vector2D = function(v) {
  this.arr = flatter(v);
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function() {
  return this.arr.pop();
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function() {
  return this.arr.length;
};

/**
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(v)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

var obj = new Vector2D([[1, 1], 2, [1, 1]]);
