class Solution:
    # Time O(N)
    # Space O(N)
    def simplifyPath(self, path: str) -> str:
        path = path.split('/')
        st = []

        for i in range(1, len(path)):
            if path[i] == '.' or path[i] == '':
                continue

            if path[i] == '..':
                if st:
                    st.pop()
            else:
                st.append(path[i])

        if st and st[-1] == '/':
            st.pop()

        return '/' + "/".join(st)
