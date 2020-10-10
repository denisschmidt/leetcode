#include <iostream>
#include <vector>
#include <iterator>

using namespace std;

class Solution {
  int search(vector<int>&nums, int x) {
    int n = nums.size();
    int first_pos = n;
    int lo = 0;
    int hi = n - 1;

    while (lo <= hi) {
      int mid = lo + ((hi - lo) / 2);

      if (nums[mid] >= x) {
        hi = mid - 1;
        first_pos = mid;
      } else {
        lo = mid + 1;
      }
    }
    
    return first_pos;
  }
  
  public: 
    vector<int> searchRange(vector <int>& nums, int target) {
      int first = search(nums, target);

      if (first == -1) {
        return {-1, -1};
      }

      int second = search(nums, target + 1) - 1;

      if (first <= second) {
        return {first, second};
      }

      return {-1, -1};
    }
};

int main () {
  vector<int> nums = {5, 7, 7, 8, 8, 8, 10};
  Solution sol = Solution();

  vector<int> ans = sol.searchRange(nums, 8);
  
  for(auto const& c : ans) {
    cout << c << ' '; 
  }

  return 0;
}