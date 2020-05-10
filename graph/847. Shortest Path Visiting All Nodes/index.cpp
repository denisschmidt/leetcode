
class Solution {
public:
    int shortestPathLength(vector<vector<int>>& graph) {
        const int size = graph.size();
        const int fullMask = (1 << size) - 1;
        
        queue<pair<int, int>> q;
        unordered_set<string> visited;
        
        for(int i = 0; i < size; i++) {
            string key = to_string(i) + ' ' + to_string(1 << i);
            q.push({ i, 1 << i });
            visited.emplace(key);
        }
        
        int cnt = 0;
        
        while (!q.empty()) {
            int size = q.size();
            
            for(int k = 0; k < size; k++) {
                pair<int, int> p = q.front();
                q.pop();
                int node = p.first;
                int mask = p.second;
                
                if (mask == fullMask) {
                    return cnt;
                }
                    
                for(int next : graph[node]) {
                    int newMask = mask | (1 << next);
                    string key = to_string(next) + ' ' + to_string(newMask);
                    
                    if (visited.count(key) > 0) continue;
                    
                    q.push({ next, newMask });
                    visited.emplace(key);
                }   
            }
            
            cnt++;
        }
        
        return cnt;
    }
};