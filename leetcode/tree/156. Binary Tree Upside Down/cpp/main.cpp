struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution {
public:
    TreeNode upsideDownBinaryTree(TreeNode root) {
        if (root == NULL) return NULL;
        return dfs(root);
    }
    
    TreeNode dfs(TreeNode p) {
        if (isLeaf(p)) return p;
        
        TreeNode res = dfs(p->left);
        
        p->left->left = p->right;
        p->left->right = p;
        
        p->left = NULL;
        p->right = NULL;
        
        return res;
    }
    
    bool isLeaf(TreeNode p) {
        return p->left == NULL && p->right == NULL;
    }
};