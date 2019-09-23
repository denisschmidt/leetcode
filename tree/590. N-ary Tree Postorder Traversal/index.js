/*
Given an n-ary tree, return the postorder traversal of its nodes' values.

For example, given a 3-ary tree:


Return its postorder traversal as: [5,6,3,2,4,1].

 
Note:

Recursive solution is trivial, could you do it iteratively?

 */
// Time O(N)
// Space O(N)
const postorder = function(root) {
  if (!root) return [];
  const res = flatten(root.children.reverse());
  res.reverse().push(root.val);
  return res;

  function flatten(children) {
    return children.reduce((acc, item) => {
      const nums = [...acc, item.val];
      if (item.children && item.children.length) {
        return nums.concat(flatten(item.children.reverse()));
      }
      return nums;
    }, []);
  }
};
