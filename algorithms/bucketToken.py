from datetime import datetime


class TokenBucket(object):
    def __init__(self, maxBucketSize, refillRate):
        self.maxBucketSize = maxBucketSize
        self.refillRate = refillRate

        self.currentBucketSize = maxBucketSize
        self.lastRefillTimestamp = datetime.now()

    def allowRequest(self, tokens=1):
        # First refill bucket with tokens accumulated since the last call
        self.reFill()

        if self.currentBucketSize > tokens:  # if bucket has enough tokens call is allowed
            self.currentBucketSize -= tokens

            return True

        return False

    def reFill(self):
        now = datetime.now()

        tokensToAdd = (
            now - self.lastRefillTimestamp
        ) * self.refillRate / 1e9  # These many tokens accumulated since the last refill

        self.currentBucketSize = min(self.currentBucketSize + tokensToAdd,
                                     self.maxBucketSize)

        self.lastRefillTimestamp = now
