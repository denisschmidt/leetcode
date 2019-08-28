const shuffle = nums => {
  let random = 0;
  for (let i = 1; i < nums.length; i++) {
    let random = Math.floor(Math.random() * i);
    let tmp = i;
    i = random;
    random = tmp;
  }
};
