// Time O(1)
// Space O(1)
const bitwiseComplement = N => {
  if (N == 0) return 1;

  for (let i = 0; i <= Math.log2(N); i++) {
    N = N ^ (1 << i);
  }

  return N;
};

// Time O(1)
// Space O(1)
const bitwiseComplement_II = N => {
  if (N == 0) return 1;

  bitmask = (1 << (Math.log2(N) + 1)) - 1;

  return bitmask ^ N;
};
