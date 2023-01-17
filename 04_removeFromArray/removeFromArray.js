const removeFromArray = function (...args) {
  myArr = arguments[0];
  for (i = 1; i < arguments.length; i++) {
    myArr.forEach((x) => {
      if (x === arguments[i]) {
        let index = myArr.indexOf(x);
        myArr.splice(index, 1);
      }
    });
  }
  return myArr;
};

// Do not edit below this line
module.exports = removeFromArray;
