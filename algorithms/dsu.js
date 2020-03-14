/*
 * Система непересекающихся множеств
 *
 * Используйте Union-Find, чтобы обнаружить цикл в графе
 *
 * Реализация Union-Find
 * */
class DSU {
  constructor(size) {
    this.parent = [];
    this.rank = [];

    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }

    this.rank = this.parent;
  }

  /**
   *  Возвращает идентификатор множества, которому принадлежит элемент X
   *  В качестве идентификатора выбирается один элемент из этого множества — представителя множества.
   *  Гарантируется, что для одного и того же множества представитель будет возвращаться один и тот же
   *
   * @param x
   * @returns {*}
   */
  find(x) {
    if (this.parent[x] !== x) {
      // Path compression
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  /*
   *  Объединить два множества, в которых лежат элементы X и Y, в одно новое.
   *  {1, 4} {3, 5} {2}
   *  где find(x) => find(4) = 4, find(1) = 4, find(2) = 2, find(3) = 5
   * */
  union(x, y) {
    let xr = this.find(x);
    let yr = this.find(y);

    // Если элемент является родителем, он может указывать на себя
    if (xr === yr) {
      return false;
    } else if (this.rank[xr] < this.rank[yr]) {
      this.parent[xr] = yr;
    } else if (this.rank[xr] > this.rank[yr]) {
      this.parent[yr] = xr;
    } else {
      // если не равны xr и yr
      this.parent[yr] = xr;
      this.rank[xr]++;
    }
    return true;
  }
}

module.exports = {
  DSU,
};
