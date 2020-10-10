class Solution {
public:
    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {
        stack<int> st;
        int index = 0;
        
        for(int i = 0; i < pushed.size(); i++) {
            st.push(pushed[i]);
            
            while (!st.empty() && st.top() == popped[index]) {
                st.pop();
                index++;
            }
        }
        
        while (!st.empty() && st.top() == popped[index]) {
            st.pop();
            index++;
        }
        
        return st.empty();
    }
};