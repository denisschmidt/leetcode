// Time O(N)
// Space O(N)
class Solution {
public:
    vector<int> smallerNumbersThanCurrent(vector<int>& nums) {
        vector<int>a(101);
        vector<int>b(101);
        
        for(auto num : nums) {
            a[num]++;
        }
        
        for(int i = 1; i < 101; i++) {
            b[i] = b[i - 1] + a[i - 1];
        }
        
        vector<int> ans;
        
        for(auto num : nums) {
            ans.push_back(b[num]);
        }
        
        return ans;
    }
};