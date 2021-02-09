class Solution:
    def isAlienSorted(self, words, order):
        mapping = {ch: i for i, ch in enumerate(order)}

        return words == sorted(words, key=lambda s: [mapping[ch] for ch in s])

    def isAlienSorted_II(self, words, order):
        mapping = {ch: i for i, ch in enumerate(order)}
        n = len(words)

        for i in range(n - 1):
            j = 0
            word1 = words[i]
            word2 = words[i + 1]
            min_lenght = min(len(word1), len(word2))

            while j < min_lenght:
                if word1[j] != word2[j]:
                    if mapping[word1[j]] > mapping[word2[j]]:
                        return False
                    break
                j += 1

            if j == min_lenght and word1[j - 1] == word2[
                    j - 1] and len(word1) > len(word2):
                return False

        return True
