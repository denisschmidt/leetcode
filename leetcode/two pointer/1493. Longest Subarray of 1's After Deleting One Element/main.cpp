#include <vector>

using namespace std;

class Solution {
public:
    int longestSubarray(vector<int>& nums) {      
      int start = 0;
      int end = 0;
      int cnt = 0;
      int maxLen = 0;

      while (end < nums.size()) {
          if (nums[end] == 0) {
              cnt++;
          } 
          end++;
          
          while (cnt == 2) {
              if (nums[start] == 0) {
                  cnt--;
              }
              start++;
          }
          
          if (maxLen < end - start - 1) {
              maxLen = end - start - 1;
          }
      }
      
      return maxLen;
    }
};