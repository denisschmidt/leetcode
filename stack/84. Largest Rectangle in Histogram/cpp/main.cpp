class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        stack<int> st;
        int res = 0;
        int n = heights.size();
        
        for(int i = 0; i <= n; i++) {
            while (!st.empty() && (i == n || heights[st.top()] > heights[i])) {
                int j = st.top();
                st.pop();
                
                int width;
                int height = heights[j];
                
                if (st.empty()) {
                    width = i;
                } else {
                    width = i - st.top() - 1;
                }
                
                res = max(res, width * height);
            }
            
            st.push(i);
        }
        
        return res;
    }
};