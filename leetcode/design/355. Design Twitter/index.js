/*

Design a simplified version of Twitter where users can post tweets, follow/unfollow another user and is able to see the 10 most recent tweets in the user's news feed. 
Your design should support the following methods:

postTweet(userId, tweetId): Compose a new tweet.
getNewsFeed(userId): Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
follow(followerId, followeeId): Follower follows a followee.
unfollow(followerId, followeeId): Follower unfollows a followee.

Example:
  Twitter twitter = new Twitter();

  // User 1 posts a new tweet (id = 5).
  twitter.postTweet(1, 5);

  // User 1's news feed should return a list with 1 tweet id -> [5].
  twitter.getNewsFeed(1);

  // User 1 follows user 2.
  twitter.follow(1, 2);

  // User 2 posts a new tweet (id = 6).
  twitter.postTweet(2, 6);

  // User 1's news feed should return a list with 2 tweet ids -> [6, 5].
  // Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
  twitter.getNewsFeed(1);

  // User 1 unfollows user 2.
  twitter.unfollow(1, 2);

  // User 1's news feed should return a list with 1 tweet id -> [5],
  // since user 1 is no longer following user 2.
  twitter.getNewsFeed(1);

*/

class Twitter {
  constructor() {
    this.users = new Map();
    this.tweets = new Map();
    this.time = 0;
  }

  postTweet(userId, tweetId) {
    if (!this.users.has(userId)) {
      this.users.set(userId, new Set());
    }
    this.users.get(userId).add(userId);

    if (!this.tweets.has(userId)) {
      this.tweets.set(userId, []);
    }

    this.time = this.time + 1;
    this.tweets.get(userId).push({ tweetId, time: this.time });
  }

  // Time (K * LogN)
  getNewsFeed(userId) {
    if (!this.users.has(userId)) return [];

    let pq = new PriorityQueue({ comparator: (a, b) => b.time - a.time });

    this.users.get(userId).forEach(followerId => {
      if (this.tweets.has(followerId)) {
        this.tweets.get(followerId).forEach(tweet => {
          pq.offer(tweet);
        });
      }
    });

    let ans = [];
    while (!pq.isEmpty() && ans.length < 10) {
      ans.push(pq.poll().tweetId);
    }
    return ans;
  }

  follow(followerId, followeeId) {
    if (!this.users.has(followerId)) {
      this.users.set(followerId, new Set());
    }
    this.users.get(followerId).add(followeeId);
  }

  unfollow(followerId, followeeId) {
    if (this.users.has(followerId) && followerId !== followeeId) {
      this.users.get(followerId).delete(followeeId);
    }
  }
}
