class Solution:
    # Time O(N)
    # Space O(N)
    def removeDuplicateLetters(self, s: str) -> str:
        last_index = {v: i for i, v in enumerate(s)}
        st = []
        visited = set()

        for i, v in enumerate(s):
            if v in visited:
                continue

            while st and st[-1] >= v and last_index[st[-1]] >= i:
                visited.remove(st.pop())

            st.append(s[i])
            visited.add(s[i])

        return ''.join(st)
