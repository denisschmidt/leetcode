class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        
        unordered_map<string, function<int (int, int)>> map = {
            { "+" , [] (int a, int b) { return a + b; } },
            { "-" , [] (int a, int b) { return a - b; } },
            { "*" , [] (int a, int b) { return a * b; } },
            { "/" , [] (int a, int b) { return a / b; } },
        };
        
        stack<int> st;
        
        for(string& t : tokens) {
            if (!map.count(t)) {
                st.push(stoi(t));
            } else {
                int a = st.top();
                st.pop();
                int b = st.top();
                st.pop();
                
                st.push(map[t](b, a));
            }
        }
    
        return st.top();
    }
};
