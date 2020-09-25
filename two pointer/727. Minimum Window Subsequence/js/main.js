// Time O(N*M)
// Space O(1)
const minWindow = (S, T) => {
  let endIndex = 0;
  let minLen = Number.MAX_VALUE;
  let minStartIndex = 0;

  while (endIndex < S.length) {
    let tIndex = 0;

    while (endIndex < S.length && tIndex < T.length) {
      if (S[endIndex] == T[tIndex]) {
        tIndex++;
      }

      if (tIndex == T.length) {
        break;
      }

      endIndex++;
    }

    if (endIndex == S.length) {
      break;
    }

    let startIndex = endIndex;
    tIndex = T.length - 1;

    while (startIndex >= 0) {
      if (S[startIndex] == T[tIndex]) {
        tIndex--;
      }

      if (tIndex < 0) {
        break;
      }

      startIndex--;
    }

    if (endIndex - startIndex + 1 < minLen) {
      minLen = endIndex - startIndex + 1;
      minStartIndex = startIndex;
    }

    endIndex = startIndex + 1;
  }

  return minLen === Number.MAX_VALUE ? '' : S.substring(minStartIndex, minStartIndex + minLen);
};
