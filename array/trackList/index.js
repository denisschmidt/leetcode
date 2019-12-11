/*
const trackList = ['0','1','2'.'3'.'4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19']

const MIN_TRACKS = 10;

const list = (trackList, positin) => {}

list(trackList, 1) // [0,1,2,3,4,5,7,8,9]
list(trackList, 18) // [10, 11,12,13,14,15,16,17,18,19]
list(trackList, 11) // [6,7,8,9,10,11,12,13,14,15]

 */
const trackList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'];
const MIN_TRACKS = 10;

const list = (trackList, position) => {
  const size = trackList.length;
  const half = MIN_TRACKS / 2;
  const rightDiff = size - position;
  const leftDiff = position - half;
  const start = half > rightDiff ? size - MIN_TRACKS : leftDiff >= 0 ? position - half : 0;
  const end = half > rightDiff ? size : leftDiff >= 0 ? position + half : MIN_TRACKS;
  return trackList.slice(start, end + 1);
};

const res = list(trackList, 9);
console.log('---', res);
