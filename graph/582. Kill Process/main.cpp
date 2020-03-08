#include <vector>
#include <map>
#include <set>
#include <queue>

using namespace std;

class Solution {
  public:
    vector<int> killProcess(vector<int>& pid, vector<int>& ppid, int kill) {
      vector<int> res;
      map<int, set<int>> graph;

      for (int i = 0; i < ppid.size(); i++) {
        graph[ppid[i]].insert(pid[i]);
      }

      queue<int> q;

      q.push(kill);

      while (!q.empty()) {
        int u = q.front();
        q.pop();

        res.push_back(u);

        for (int v : graph[u]) {
          q.push(v);
        }
      }

      return res;
    }
};