class Solution {

    unordered_map<int, vector<int>> graph;
    vector<int> res;
    
    public:
        vector<int> loudAndRich(vector<vector<int>>& richer, vector<int>& quiet) {
            res = vector<int> (quiet.size(), -1);
            
            for (auto v : richer) {
                graph[v[1]].push_back(v[0]);
            }
            
            for(int i = 0; i < quiet.size(); i++) {
                dfs(i, quiet);
            }
            
            return res;
        }
        
        int dfs(int u, vector<int>& quiet) {
            if (res[u] >= 0) return res[u];
            
            res[u] = u;
            
            for(int j : graph[u]) {
                int v = dfs(j, quiet);
                if (quiet[res[u]] > quiet[v]) {
                    res[u] = res[j];
                }
            }
            return res[u];
        }
};