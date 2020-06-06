const parseUrl = url => {
  url = url.split('/');

  console.log(url);

  console.log('http://news.yahoo.com/news/topics/'.startsWith('http://news.yahoo.com'));
};

parseUrl('http://news.yahoo.com/news/topics/');
