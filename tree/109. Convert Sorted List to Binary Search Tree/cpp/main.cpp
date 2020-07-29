
// Definition for singly-linked list.
  struct ListNode {
      int val;
      ListNode *next;
      ListNode() : val(0), next(nullptr) {}
      ListNode(int x) : val(x), next(nullptr) {}
      ListNode(int x, ListNode *next) : val(x), next(next) {}
  };


// Definition for a binary tree node.
  struct TreeNode {
       int val;
       TreeNode *left;
      TreeNode *right;
      TreeNode() : val(0), left(nullptr), right(nullptr) {}
      TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
      TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
  };


// Time O(N)
// Space O(LogN)
class Solution {
    
  private:
    ListNode *head;

    int get_depth(ListNode* head) {
      if (head == NULL) {
          return 0;
      }
      return 1 + get_depth(head->next);
    }
    
  public:
    TreeNode* sortedListToBST(ListNode* head) {
      int d = get_depth(head);
      this->head = head;
        
      return dfs(0, d - 1);
    }
        
    TreeNode* dfs(int l, int r) {
      if (l > r) return NULL;
        
      int mid = (l + r) >> 1;    
            
      TreeNode* left = dfs(l, mid - 1);
        
      TreeNode* node = new TreeNode(head->val);
        
      node->left = left;
      head = head -> next;
        
      TreeNode* right = dfs(mid + 1, r);
        
      node->right = right;
        
      return node;
    }  
};