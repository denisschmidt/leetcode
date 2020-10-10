import collections


class Solution:
    def accountsMerge(self, accounts):
        def dfs(currentEmail, currentName, list=[]):
            if currentEmail in visited:
                return list

            visited.add(currentEmail)
            list.append(currentEmail)

            for email in graph[currentEmail]:
                if email == currentEmail:
                    continue
                if currentName in emailToName[currentEmail]:
                    dfs(email, currentName, list)
            return list

        graph = collections.defaultdict(set)
        emailToName = {}

        for acc in accounts:
            name = acc[0]

            for email in acc[1:]:
                emailToName[email] = name
                graph[acc[1]].add(email)
                graph[email].add(acc[1])

        visited = set()
        res = []

        for email in emailToName:
            name = emailToName[email]

            emailList = dfs(email, name, [])

            if len(emailList):
                res.append([name] + sorted(emailList))

        return res
