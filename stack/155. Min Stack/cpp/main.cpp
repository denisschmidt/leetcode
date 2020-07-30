class MinStack {
    private:
        stack<int> st;
        stack<pair<int, int>> minStack;
public:
    /** initialize your data structure here. */
    MinStack() {}
    
    void push(int x) {
        if (minStack.size() == 0 || minStack.top().first > x) {
            minStack.push({ x, 1 });
        } else if (minStack.top().first == x) {
            pair<int, int> p = minStack.top();
            minStack.pop();
            minStack.push({ x, p.second + 1 });
        }
        
        st.push(x);
    }
    
    void pop() {
        int x = st.top();
        st.pop();
        
        if (minStack.top().first == x) {
            pair<int, int> p = minStack.top();
            minStack.pop();
            minStack.push({ x, p.second - 1 });
            
            if (minStack.top().second <= 0) {
                minStack.pop();
            }
        }
    }
    
    int top() {
        return st.top();
    }
    
    int getMin() {
        return minStack.top().first;
    }
};
