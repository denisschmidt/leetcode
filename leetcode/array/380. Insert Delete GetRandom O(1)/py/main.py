import random


class RandomizedSet:
    # Time O(1) worst-case O(N)
    # Space O(N)
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.items = []
        self.dict = {}

    def insert(self, val: int) -> bool:
        """
        Inserts a value to the set. Returns true if the set did not already contain the specified element.
        """
        if val in self.dict:
            return False

        self.dict[val] = len(self.items)
        self.items.append(val)

        return True

    def remove(self, val: int) -> bool:
        """
        Removes a value from the set. Returns true if the set contained the specified element.
        """
        if val not in self.dict:
            return False

        idx = self.dict[val]

        # Swap current element and last element
        # Move the last element to the place idx of the element to delete
        self.items[idx] = self.items[-1]
        self.items.pop()

        if idx < len(self.items):
            self.dict[self.items[idx]] = idx

        del self.dict[val]

        return True

    def getRandom(self) -> int:
        """
        Get a random element from the set.
        """
        return random.choice(self.items)
