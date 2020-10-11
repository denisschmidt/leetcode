class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        st = []
        visited = set()
        last_index = {v: i for i, v in enumerate(s)}

        for i, ch in enumerate(s):
            if ch in visited:
                continue

            while st and st[-1] > ch and last_index.get(st[-1]) > i:
                x = st.pop()
                visited.remove(x)

            visited.add(ch)
            st.append(ch)

        return ''.join(st)
