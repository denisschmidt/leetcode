/*

We are given some website visits: the user with name username[i] visited the website website[i] at time timestamp[i].

A 3-sequence is a list of websites of length 3 sorted in ascending order by the time of their visits.  
(The websites in a 3-sequence are not necessarily distinct.)

Find the 3-sequence visited by the largest number of users. 
If there is more than one solution, return the lexicographically smallest such 3-sequence.

Example 1:
  Input: username = ["joe","joe","joe","james","james","james","james","mary","mary","mary"], timestamp = [1,2,3,4,5,6,7,8,9,10], website = ["home","about","career","home","cart","maps","home","home","about","career"]
  Output: ["home","about","career"]
  Explanation: 
  The tuples in this example are:
  ["joe", 1, "home"]
  ["joe", 2, "about"]
  ["joe", 3, "career"]
  ["james", 4, "home"]
  ["james", 5, "cart"]
  ["james", 6, "maps"]
  ["james", 7, "home"]
  ["mary", 8, "home"]
  ["mary", 9, "about"]
  ["mary", 10, "career"]
  The 3-sequence ("home", "about", "career") was visited at least once by 2 users.
  The 3-sequence ("home", "cart", "maps") was visited at least once by 1 user.
  The 3-sequence ("home", "cart", "home") was visited at least once by 1 user.
  The 3-sequence ("home", "maps", "home") was visited at least once by 1 user.
  The 3-sequence ("cart", "maps", "home") was visited at least once by 1 user.
  

Note:
  3 <= N = username.length = timestamp.length = website.length <= 50
  1 <= username[i].length <= 10
  0 <= timestamp[i] <= 10^9
  1 <= website[i].length <= 10
  Both username[i] and website[i] contain only lowercase characters.
  It is guaranteed that there is at least one user who visited at least 3 websites.
  No user visits two websites at the same time.

*/

// Time O(N^3)
// Space O(N)
const mostVisitedPattern = (username, timestamp, website) => {
  let entriesMap = timestamp.map((item, i) => [username[i], timestamp[i], website[i]]).sort((a, b) => a[1] - b[1]);

  let entriesByUsers = {};
  entriesMap.forEach(entry => {
    if (!entriesByUsers[entry[0]]) entriesByUsers[entry[0]] = [];
    entriesByUsers[entry[0]].push(entry[2]);
  });

  Object.entries(entriesByUsers).forEach(([, websites]) => {
    let seqByUsers = {};

    for (let i = 0; i < websites.length - 2; i++) {
      for (let j = i + 1; j < websites.length - 1; j++) {
        for (let k = j + 1; k < websites.length; k++) {
          let key = `${websites[i]}|${websites[j]}|${websites[k]}`;

          if (!seqByUsers[key]) seqByUsers[key] = 1;
        }
      }
    }

    let seq = {};
    let max = ['', 0];

    Object.keys(seqByUsers).forEach(seqByUser => {
      if (!seq[seqByUser]) seq[seqByUser] = 0;
      seq[seqByUser] += 1;

      if ((seq[seqByUser] === max[1] && seqByUser.split('|').join(' ') < max[0].split('|').join(' ')) || seq[seqByUser] > max[1]) {
        max[0] = seqByUser;
        max[1] = seq[seqByUser];
      }
    });
  });

  return max[0].split('|');
};
