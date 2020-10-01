class RecentCounter {
  constructor() {
    this.list = [];
  }

  ping(t) {
    this.list.push(t);
    let target = t - 3000 > 0 ? t - 3000 : 0;
    let start = this.search(target);
    let cnt = 0;

    this.list = this.list.slice(start);

    return this.list.length;
  }

  search(target) {
    let lo = 0;
    let hi = this.list.length;

    while (lo < hi) {
      let mid = lo + Math.floor((hi - lo) / 2);

      if (this.list[mid] < target) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }

    return lo;
  }
}
