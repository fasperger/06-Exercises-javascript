const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (num) {
  let sumNum = 0;
  if (num == []) {
    return 0;
  } else {
    num.forEach((number) => {
      sumNum += number;
    });
    return sumNum;
  }
};

const multiply = function (num) {
  let total = 1;
  if (num == []) {
    return 0;
  } else {
    num.forEach((number) => {
      total *= number;
    });
    return total;
  }
};

const power = function (a, b) {
  let total = 1;
  for (let i = 0; i < b; i++) {
    total *= a;
  }
  return total;
};

const factorial = function (num) {
  if (num == 0) {
    return 1;
  } else {
    let total = 1;
    for (let i = num; i > 0; i--) {
      total *= i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
