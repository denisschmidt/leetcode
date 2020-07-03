#include <unordered_map>
#include <string>

using namespace std;

class Solution {
  unordered_map<char, int> frequency;


  bool isStateValid() {
    return (frequency['c'] >= frequency['r']) &&
          (frequency['r'] >= frequency['o']) &&
          (frequency['o'] >= frequency['a']) && 
          (frequency['a'] >= frequency['k']);
  }


public: 
  int minNumberOfFrogs(string croakSequence) {
    int numCroakingFrogs = 0;
    int answer = 0;

    for(int i = 0; i < croakSequence.size(); i++) {
      frequency[croakSequence[i]]++;

      if (!isStateValid()) return -1;

      if (croakSequence[i] == 'c') {
        numCroakingFrogs++;
      } else if (croakSequence[i] == 'k') {
        numCroakingFrogs--;
      }

      answer = max(answer, numCroakingFrogs);
    }

    return numCroakingFrogs == 0 ? answer : -1;
  }


};
