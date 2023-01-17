const repeatString = function (word, x) {
  let myArray = "";
  if (parseInt(x) < 0) {
    return "ERROR";
  } else {
    for (i = 0; i < parseInt(x); i++) {
      myArray += word;
    }
    return myArray;
  }
};
// Do not edit below this line
module.exports = repeatString;
