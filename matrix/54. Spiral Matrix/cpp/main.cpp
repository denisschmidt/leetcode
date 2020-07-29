// Time O(N^2)
// Space O(N^2)
class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        if (matrix.size() == 0) return {};
        
        int n = matrix.size();
        int m = matrix[0].size();
        vector<int> res;
        int startRow = 0;
        int endRow = n - 1;
        int startCol = 0;
        int endCol = m - 1;

        while (startRow <= endRow && startCol <= endCol) {
            // right
            for(int i = startCol; i <= endCol; i++) {
                res.push_back(matrix[startRow][i]);
            }
            startRow++;
            
            // down
            for(int i = startRow; i <= endRow; i++) {
                res.push_back(matrix[i][endCol]);
            }
            endCol--;
            
            // left
            if (endRow >= startRow) {
                for(int i = endCol; i >= startCol; i--) {
                    res.push_back(matrix[endRow][i]);
                }
            }
            endRow--;
            
            // up
            if (endCol >= startCol) {
                for(int i = endRow; i >= startRow; i--) {
                    res.push_back(matrix[i][startCol]);
                }
            }
            startCol++;
        
        }
        
        return res;
    }
};
