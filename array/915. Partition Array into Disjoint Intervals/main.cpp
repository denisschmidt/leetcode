class Solution {
public:
  int partitionDisjoint(vector<int>& nums) {
    int n = nums.size();
    int i = 0;
    int maxValue = INT_MIN;
    
    while (i < n) {
      maxValue = max(maxValue, nums[i]);
      int j = i + 1;

      while (j < n && maxValue <= nums[j]) {
        j++;
      }

      if (j == n) {
          return i + 1;
      }

      i++;
    }
    
    return -1;   
  }
};