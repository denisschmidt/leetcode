class Solution {
public:
    int numSub(string s) {
      int n = s.size();
      long long res = 0;
      long mod = 1e9 + 7;
      long j;

      for (long i = 0; i < n; i++) {
          j = i;
          while (j < n && s[j] == '1') {
            j++;
          }

          if (j > i) {
            long len = j - i;
            res += ((len * (len + 1)) / 2 )% mod;
            i = j;
          }
      }

      return res;
    }
};