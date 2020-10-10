int minFlipsMonoIncr(string S, int res = INT_MAX) {
  vector<int> f0(S.size() + 1), f1(S.size() + 1);
  
  for (int i = 1, j = S.size() - 1; j >= 0; ++i, --j) {
      f0[i] += f0[i - 1] + (S[i - 1] == '0' ? 0 : 1);
      
      f1[j] += f1[j + 1] + (S[j] == '1' ? 0 : 1);
  }
  
  for (int i = 0; i <= S.size(); ++i) res = min(res, f0[i] + f1[i]);
  
  return res;
}