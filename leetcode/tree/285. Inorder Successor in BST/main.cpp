#include <iostream>
#include <bits/stdc++.h>

using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
}; 

class Solution {
  public: TreeNode* inorderSuccessor(struct TreeNode* root, struct TreeNode* p) {
      stack<TreeNode *> s; 

      TreeNode* successor = NULL;

      if (p->right) {
        successor = p->right;

        while (successor->left) {
          successor = successor->left;
        }
        return successor;
      }

      while (root) {
        if (root -> val > p -> val) {
          successor = root;
          root = root -> left;
        } else if (p -> val > root -> val) {
          root = root -> right;
        } else {
          break;
        }
      }

      return successor;
  }
};
