"""
  # Z-function

    Given string s, calculate function z[i] - maximal length of the prefix of s[i...n] that matches the prefix of s.

    In other words LCP of string s and its suffix s[i..n]

    pi[i] = max k : s[0..k-1] == s[i..i+k-1]

    Example: abacaba

    z[0] = 0 (undefined value)
    z[1] = 0 (“a” != “b”)
    z[2] = 1 (“a” == “a”)
    z[3] = 0 (“a” != “c”)
    z[4] = 3 (“aba” == “aba”)
    z[5] = 0 (“a” != “b”)
    z[6] = 1 (“a” == “a”)

    Z-function (algorithm)

    Store the rightmost segment that matches some prefix of s. The rightmost means the segment with biggest right border.

    Z[i] - the longest substring starting at i which is also prefix of the string.

    Calculate z[i]:
      i > r: calculate z[i] straightforward: try z[i] = 0, z[i] = 1 and so on
      
      i <= r: s[0..r-l] and s[l..r] are the same string. 
        As initial value we can choose z[i - l]. 
        We know nothing about symbols to the right from r, so initial value shouldn’t exceed r - i. 
        After fixing initial value straightforward algorithm can be applied


  ## Complexity:

    Each inner while iteration increases r by 1

    1) i > r: every iteration will increase z[i], final value of r is i + z[i], so r is increased by >= z[i] after z[i] iterations

    2) i <= r, initial value was inside segment [l, r]: no while iterations will be run
       i <= r, i + initial value == r: every while iteration increases r by 1

    Totally: r can be increased by 1 <= n times, so final complexity is O(n)


  ## Z-function (applications)

    Search for string s in text t 
      1 -> Calculate z-function for string s#t where # is a symbol which is not used in both s and t
      2 -> If there is any index j: z[j] == length(s), we found string s
      3 -> O(|s| + |t|)

    Number of different substrings in string s
      1 -> Solve iteratively: add symbols one by one and recalculate number of substrings
      2 -> Add symbol c=s[i], how many new substring added? Only new suffixes could appear
      3 -> t = reversed(s[0..i]), how many prefixes are occurred only once? 
          Calculate z function for t. 
          If prefix is occurred twice z[j] >= len. 
          So |t| - max {z(t)} new strings appeared  
      4 -> O(|s|^2)
    
    Find the exact period of string s
      1 -> If exact period exists, find first position i: i + z[i] == n and n is divided by i
      2 -> Otherwise no exact period 

"""

# Example: "abaxabab" z = [0,0,1,0,3,0,2,0]


# Time O(N + M) pattern + '#' + text
# Space O(N + M)
def zFunction(s):
    n = len(s)
    z = [0] * n

    # start and end of the prefix with the highest R value so far found.
    left, right = 0, 0

    for i in range(1, n):
        if i <= right:
            z[i] = min(right - i + 1, z[i - left])

        while i + z[i] < n and s[z[i]] == s[i + z[i]]:
            z[i] += 1

        if i + z[i] - 1 > right:
            left = i
            right = i + z[i] - 1

    return z
