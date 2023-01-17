const reverseString = function (myPhrase) {
  let phrase = myPhrase;
  let reversed = "";
  for (i = 0; i < phrase.length; i++) {
    reversed = phrase.split("").reverse().join("");
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
