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
    int maxSum = INT32_MIN;
       
public:
    int maxPathSum(TreeNode* root) {
        dfs(root);
        return maxSum;   
    }
    
    int dfs(TreeNode* node) {
        if (node == NULL) return 0;
        
        int left = dfs(node->left);
        int right = dfs(node->right);
        
        int sumL = left > 0 ? left : 0;
        int sumR = right > 0 ? right : 0;
        
        maxSum = max(maxSum, sumL + sumR + node->val);
        
        return max(sumL, sumR) + node->val;    
    }
  
};