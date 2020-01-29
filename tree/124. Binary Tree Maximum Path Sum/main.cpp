#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main()
{
   vector<string> msg {"Hello", "C++", "World", "from", "VS Code", "and the C++ extension!"};

   for (const string& word : msg)
   {
      cout << word << " ";
   }
   cout << endl;
}

struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
  private: 
    int traverse(TreeNode* root, int& maxSum) {
      if (!root) {
        return 0;
      }

      int l = traverse(root->left, maxSum);
      int r = traverse(root->right, maxSum);

      int x = 0;
      if (l > 0) {
        x += l;
      }

      int y = 0;
      if (r > 0) {
        y += r;
      }

      maxSum = max(maxSum, x + y + root->val);

      return max(x, y) + root->val;
    }

  public:
    int maxPathSum(TreeNode* root) {
      int maxSum = INT32_MAX;
      traverse(root, maxSum);
      return maxSum;
    }  
};