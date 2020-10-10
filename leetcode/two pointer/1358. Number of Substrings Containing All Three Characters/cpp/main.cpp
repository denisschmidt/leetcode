class Solution {
public:
    int numberOfSubstrings(string s) {
        int map[3] = {0, 0, 0};
        int start = 0;
        int end = 0;
        int freq = 0;
        int res = 0;
        int cnt = 0;
        
        while (end < s.size()) {
            if (map[s[end] - 'a'] == 0) {
                freq++;
            }
            
            map[s[end++] - 'a']++;
            
            while (freq == 3) {
                if (map[s[start] - 'a'] == 1) {
                    freq--;
                }
                map[s[start++] - 'a']--;
                cnt++;
            }
            
            res += cnt;
        }
        
        return res;
    }
};