class Solution {
public:
    int minMeetingRooms(vector<vector<int>>& intervals) {
        vector<int> start;
        vector<int> end;
        
        for (auto &i : intervals) {
            start.push_back(i[0]);
            end.push_back(i[1]);
        }
        
        sort(start.begin(), start.end());
        sort(end.begin(), end.end());
        
        int cnt = 0;
        int endIndex = 0;
        
        for(int i = 0; i < start.size(); i++) {
            if (start[i] < end[endIndex]) {
                cnt++;
            } else {
                endIndex++;
            }
        }
        
        return cnt;
    }
};