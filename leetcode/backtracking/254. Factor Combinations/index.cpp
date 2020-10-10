class Solution {
public:
    vector<vector<int>> getFactors(int n) {
        vector<vector<int>> ans;
        vector<int> comb;
        
        helper(2, n, comb, ans);
        
        return ans;
    }

    void helper(int start, int end, vector<int> &comb, vector<vector<int>> &ans) {
      if (end == 1 && comb.size() > 1) {
          ans.push_back(comb);
          return;
      }  

      for (int i = start; i <= end; i++) {
        if (end % i == 0) {
          comb.push_back(i);
          helper(i, end / i, comb, ans);
          comb.pop_back();
        }
      }
    }
};