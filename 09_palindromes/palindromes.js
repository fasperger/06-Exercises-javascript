const palindromes = function (word) {
  let clean = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
  console.log(clean, "<--clean");
  let letters = clean.split("");
  console.log(letters, "<--letters");
  let reversed = letters.reverse().join("");
  console.log(reversed, "<-- reversed");
  if (clean == reversed) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
