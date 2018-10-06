'use strict';

const _ = require('lodash');

class LinkNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/*
* Система непересекающихся множеств
*
* Реализация Union-Find.
* */
class DSU {
  constructor(size) {
    this.parent = []
    this.rank = []
    for (let i = 0; i < size; i++) {
      this.parent[i] = i
    }
    this.rank = this.parent
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
      this.parent[x] = this.find(this.parent[x])
    }
    return this.parent[x]
  }

  /*
  *  Объединить два множества, в которых лежат элементы X и Y, в одно новое.
  *  {1, 4} {3, 5} {2}
  *  где find(x) => find(4) = 4, find(1) = 4, find(2) = 2, find(3) = 5
  * */
  union(x, y) {
    let xr = this.find(x), yr = this.find(y)

    console.log('---', xr, this.rank[xr],  yr, this.rank[yr])

    if (xr === yr) {
      return false
    } else if (this.rank[xr] < this.rank[yr]) {
      this.parent[xr] = yr
    } else if (this.rank[xr] > this.rank[yr]) {
      this.parent[yr] = xr
    } else {
      this.parent[yr] = xr
      this.rank[xr]++
    }
    return true
  }
}


function makeTestLinkNodes(tests, name = 'root') {
  makeTestNodes(makeLinkNodes, tests, name);
}

function makeTestTreeNodes(tests, name = 'root') {
  makeTestNodes(makeTreeNodes, tests, name);
}

function makeTestNodes(iterator, tests, name = 'root') {
  _.forEach(tests, test => {
    const array = test[name];
    const root = iterator(array);
    test[name] = root;
    test[`_${name}`] = array;
  });
}

function makeLinkNodes(array) {
  return _.chain(array)
    .map(n => new LinkNode(n))
    .reduce((result, node) => {
      let target = result;
      while (target.next) {
        target = target.next;
      }
      target.next = node;
      return result;
    })
    .value();
}

function makeTreeNodes(array) {
  const l = array.length;
  if (!l) {
    return null;
  }
  let i = 0;
  const root = new TreeNode(array[i++]);
  makeTree([root]);
  return root;

  function makeTree(parents) {
    if (i >= l) {
      return;
    }
    const children = [];
    _.forEach(parents, parent => {
      const left = array[i++];
      const right = array[i++];
      if (left !== null && left !== undefined) {
        const node = new TreeNode(left);
        parent.left = node;
        children.push(node);
      }
      if (right !== null && right !== undefined) {
        const node = new TreeNode(right);
        parent.right = node;
        children.push(node);
      }
    });
    makeTree(children);
  }
}

module.exports = {
  LinkNode,
  TreeNode,
  makeLinkNodes,
  makeTreeNodes,
  makeTestLinkNodes,
  makeTestTreeNodes,
  DSU
};
