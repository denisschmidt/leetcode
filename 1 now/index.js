class Twitter {
  constructor() {
    this.users = new Map();
    this.tweets = new Map();
    this.time = 0;
  }

  postTweet(userId, tweetId) {
    if (!this.users.has(followerId)) {
      this.users.set(followerId, new Set());
    }
    this.users.get(userId).push(userId);

    if (!this.tweets.has(userId)) {
      this.tweets.set(userId, []);
    }

    this.time = this.time + 1;
    this.tweets.get(userId).push({ tweetId, time: this.time });
  }

  getNewsFeed(userId) {
    if (!this.users.has(userId)) return [];

    let pq = new PriorityQueue({ comparator: (a, b) => b.time - a.time });
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
