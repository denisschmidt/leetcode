class CustomStack:
    # Time O(1)
    # Space O(maxSize)
    def __init__(self, maxSize: int):
        self.st = []
        self.maxSize = maxSize
        # Use an additional array to record the increment value.
        self.inc = []

    def push(self, x: int) -> None:
        if len(self.st) < self.maxSize:
            self.st.append(x)
            self.inc.append(0)

    def pop(self) -> int:
        if self.isEmpty():
            return -1

        if len(self.inc) > 1:
            self.inc[-2] += self.inc[-1]

        return self.st.pop() + self.inc.pop()
    
    def isEmpty(self):
        return len(self.inc) == 0

    def increment(self, k: int, val: int) -> None:
        if self.inc:
            self.inc[min(k, len(self.inc)) - 1] += val 