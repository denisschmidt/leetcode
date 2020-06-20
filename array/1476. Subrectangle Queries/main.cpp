#include <vector>
#include <iostream>

using namespace std;

class SubrectangleQueries {
public:

    vector<vector<int>> rect, subs;

    SubrectangleQueries(vector<vector<int>>& rectangle) {
      swap(rect, rectangle);        
    }
    
    void updateSubrectangle(int row1, int col1, int row2, int col2, int newValue) {
      subs.push_back({ row1, col1, row2, col2, newValue });  
    }
    
    int getValue(int row, int col) {
        for (int i = subs.size() - 1; i >= 0; i--) {
          
          if (subs[i][0] <= row && subs[i][1] <= col && row <= subs[i][2] && col <= subs[i][3]) {
            return subs[i][4];
          }
        }

        return rect[row][col];
    }
};
