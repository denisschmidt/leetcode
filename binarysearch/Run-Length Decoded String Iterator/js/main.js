class RunLengthDecodedIterator {
  constructor(s = '') {
    this.s = s;
    this.index = 0;
    this.cnt = 0;
    this.char = '';
  }

  getChar() {
    this.cnt--;
    return this.char;
  }

  next() {
    if (this.cnt > 0) {
      return this.getChar();
    } else {
      let buf = '';
      while (this.index < this.s.length && this.s[this.index] >= 0 && this.s[this.index] <= 9) {
        buf += this.s[this.index++];
      }
      this.char = this.s[this.index];
      this.cnt = parseInt(buf);
      this.index++;

      return this.getChar();
    }
  }

  hasnext() {
    return this.index < this.s.length || this.cnt > 0;
  }
}
