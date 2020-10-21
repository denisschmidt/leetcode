// Time O(N)
// Space O(N)
const preorderTraversal = function (root) {
  let st = [];
  let ans = [];
  st.push(root);

  while (st.length) {
    let node = st.pop();

    if (node !== null) {
      ans.push(node.val);

      st.push(node.right);
      st.push(node.left);
    }
  }

  return ans;
};
