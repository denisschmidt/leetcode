class Solution {
public:
    string longestPalindrome(string s) {
        int n = s.size();
        int max_len = 1;
        int start_index = 0;
        
        vector<vector<bool>> dp(n, vector<bool>(n, false));
        
        for(int i = 0; i < n; i++) {
            dp[i][i] = true;
        }
        
        
        for(int len = 1; len < n; len++) {
            for(int i = 0; i < n - len; i++) {
                int j = i + len;
                
                if (s[i] == s[j]) {
                    dp[i][j] = j - i == 1 ? true : dp[i + 1][j - 1];
                }
                
                if (dp[i][j] && max_len < j - i + 1) {
                    max_len = j - i + 1;
                    start_index = i;
                }
            }
        }
        
        
        return s.substr(start_index, max_len);
    }
};