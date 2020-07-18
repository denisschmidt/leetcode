class Solution {
public:
    int minAddToMakeValid(string S) {
        int open = 0;
        int removed = 0;
        for(char ch : S) {
            if (ch == '(') {
                open++;
            } else {
                if (open > 0) {
                    open--;
                } else {
                    removed++;
                }
            }
        }
        
        return open + removed;
    }
};