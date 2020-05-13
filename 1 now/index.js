/* 

Необходимо сгенерировать массив из 100 элементов из чисел от 0 до 200.

И найти пары чисел, которые дают в сумме 200. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 


*/

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let nums = [];
for (let i = 0; i < 100; i++) {
  nums.push(getRandomInt(200));
}

let map = {};
let ans = [];

for (let i = 0; i < nums.length; i++) {
  let x = nums[i];
  let diff = 200 - x;

  if (map[diff] > 0) {
    ans.push([diff, nums[i]]);
  }

  map[x] = ~~map[x] + 1;
}

let ans2 = [];
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] == 200) {
      ans2.push([nums[i], nums[j]]);
    }
  }
}

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] == 200) {
      ans2.push([nums[i], nums[j]]);
    }
  }
}

// Time O(2(N^2))

console.log(nums);

console.log('====');

console.log(ans, ans2, ans.length, ans2.length);
