#include "vector";

class Solution {
  public:
    int findMin(vector<int>& nums) {
      int lo = 0;      
      int hi = nums.size() - 1;
      int res = -1;

      while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;

        if (nums[mid] <= nums[nums.size() - 1]) {
          res = nums[mid];
          hi = mid - 1;
        } else {
          lo = mid + 1;  
        }
      }

      return res;  
    }
};