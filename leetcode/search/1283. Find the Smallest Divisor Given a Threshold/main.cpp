int smallestDivisor(vector<int>& A, int threshold) {
  int left = 0;
  int right = 1e6;
  int sum = 0;

  while (left < right) {
    int m = left + ((right - left) / 2);
    sum = 0;

    for(int i : A) {
      sum += (i + m - 1) / m;
    }

    if (sum > threshold) {
      left = m + 1;
    } else {
      right = m;
    }
  }

  return left;
}