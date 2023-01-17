const sumAll = function (...args) {
  let max = "";
  let min = "";
  let sumNum = 0;
  let sorted = args.sort(function (a, b) {
    return b - a;
  });
  max = sorted[0];
  min = sorted[1];

  if (typeof min != "number" || typeof max != "number") {
    return "ERROR";
  }

  for (i = min; i <= max; i++) {
    if (i < 0) {
      return "ERROR";
    } else {
      sumNum += i;
    }
  }
  return sumNum;
};

// Do not edit below this line
module.exports = sumAll;
