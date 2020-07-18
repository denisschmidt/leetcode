class Solution {
public:
  vector<int> lexicalOrder(int n) {
      vector<int> res;
      
      int num = 1;
      
      while (res.size() < n) {
          res.push_back(num);
          
          if (num * 10 <= n) {
              num *= 10;     
          } else if (num % 10 != 9 && num + 1 <= n) {
              num++;
          } else {
              while ((num / 10) % 10 == 9) {
                  num /= 10;
              }
              num = (num / 10) + 1;
          }
      }
      
      return res;   
  }
};