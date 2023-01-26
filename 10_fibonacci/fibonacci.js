const fibonacci = function (num) {
  let fibArr = [0, 1];

  if (num < 0) {
    return "OOPS";
  } else {
    for (let i = 2; i <= num; i++) {
      fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
    return fibArr[num];
  }
};

// Do not edit below this line
module.exports = fibonacci;
