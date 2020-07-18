#include <vector>
#include <string>
#include <queue>
#include <unordered_set>
#include <iostream>

#include <cstdio>

using namespace std;
class Solution {
  private:
 
  int level = 1;
  int minLevel = INT_MAX;

  public:
    vector<vector<string>> findLadders(string beginWord, string endWord, vector <string> & wordList) {
      unordered_set<string> dict(wordList.begin(), wordList.end());
      vector <vector<string>> res;
      unordered_set<string> visited;
      queue <vector<string>> q;
        
      q.push({beginWord});

      while (!q.empty()) {
        vector <string> path = q.front();
        q.pop();

        if (path.size() > level) {
          
           for(string w : visited) {
            dict.erase(w);
          }

          visited.clear();
            
          level = path.size();

          if (level > minLevel) {
            break;
          }
        }

        string current = path.back();

        for (int i = 0; i < current.size(); i++) {
          char originalChar = current[i];

          for (int j = 0; j < 26; j++) {
            current[i] = j + 'a';

            if (dict.find(current) != dict.end()) {
              vector < string > newpath = path;
              newpath.push_back(current);

              visited.insert(current);

              if (current == endWord) {
                minLevel = level;
                res.push_back(newpath);
              } else {
                q.push(newpath);
              }
            }
          }

          current[i] = originalChar;
        } 
      }  
      return res;
    }
};