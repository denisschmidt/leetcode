class Solution {
public:
    int numTilings(int N) {
        vector<long long> dp(1001,0);
        int mod = 1e9 + 7;
        
        dp[0] = 1;
        dp[1] = 1;
        
        for(int i = 2; i <= N; i++) {
           if (i >= 3) {
            dp[i] = (dp[i - 1] * 2 + dp[i - 3]) % mod;
           } else {
            dp[i] = dp[i - 1] + 1;
           }
        }
        
        return dp[N];
    }
};