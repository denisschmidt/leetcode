/*
Note: This is a companion problem to the System Design problem: Design TinyURL.

TinyURL is a URL shortening service where you enter a URL such as
https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

Design the encode and decode methods for the TinyURL service.

There is no restriction on how your encode/decode algorithm should work.

You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

Допустим наша строка будет размером 7 символов

Chars
1) a-z 26
2) A-Z 26
3) 0-9 10

Всего: 62 символа

Кол-во комбинации равно 62^7 = 35 триллиона = 43 бита

Есть разное кол-во техник генерации семи символов

 */

// Base62 Solution
/**
 * Base62 Solution
 */
class TinyUrl {
  constructor() {
    this.database = {};
    this.id = 0;

    // 62 символа
    this.alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  }

  idToShortUrl(n) {
    let shortUrl = '';

    while (n) {
      shortUrl = this.alphabet[n % 62] + shortUrl;
      n = Math.floor(n / 62);
    }

    return shortUrl;
  }

  shortUrlToId(shortUrl) {
    let id = 0;

    for (let c of shortUrl) {
      if ('a' <= c && c <= 'z') {
        id = id * 62 + c.charCodeAt(0) - 'a'.charCodeAt(0);
      } else if ('A' <= c && c <= 'Z') {
        id = id * 62 + c.charCodeAt(0) - 'A'.charCodeAt(0) + 26;
      } else {
        id = id * 62 + c.charCodeAt(0) - '0'.charCodeAt(0) + 52;
      }
    }

    return id;
  }

  /**
   * Encodes a URL to a shortened URL.
   *
   * @param {string} longUrl
   * @return {string}
   */
  encode(longUrl) {
    const shortUrl = this.idToShortUrl(this.id);
    this.database[this.id++] = longUrl;
    return shortUrl;
  }

  /**
   * Decodes a shortened URL to its original URL.
   *
   * @param {string} shortUrl
   * @return {string}
   */
  decode(shortUrl) {
    const id = this.shortUrlToId(shortUrl);
    return this.database[id];
  }
}

const tiny = new TinyUrl();

function encode(longUrl) {
  return tiny.encode(longUrl);
}

function decode(shortUrl) {
  return tiny.decode(shortUrl);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class TinyUrl2 {
  constructor(prefix) {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    this.prefix = prefix;
    this.map = new Map();

    this.key = this.getRandom();
  }

  randomInt(min, max) {
    return min + Math.floor(Math.random() * max - min);
  }

  getRandom() {
    let str = '';

    for (let i = 0; i < 6; i++) {
      const rand = this.randomInt(0, 62);
      str += this.alphabet[rand];
    }

    return str;
  }

  encode(longUrl) {
    while (this.map.has(this.key)) {
      this.key = this.getRandom();
    }

    this.map.set(this.key, longUrl);

    return this.prefix + this.key;
  }

  decode(shortUrl) {
    return this.map.get(shortUrl.replace(this.prefix, ''));
  }
}

const tiny2 = new TinyUrl2('http://tinyurl.com/');

function encode2(longUrl) {
  return tiny2.encode(longUrl);
}

function decode2(shortUrl) {
  return tiny2.decode(shortUrl);
}
