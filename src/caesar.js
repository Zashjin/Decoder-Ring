// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift > 25 || shift < -25){
      return false;
    };
    let result = "";
    if (encode === false) {shift *=-1};
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
      let char = input.charCodeAt(i);
      if (char >= 97 && char <= 122) {
        let newChar = char + shift
        if (newChar > 122) {
          char = 96 + ((char + shift) - 122);
          result += String.fromCharCode(char);
        } else {
          if (newChar < 97) {
            char = 122 - (96 - (char + shift));
            result += String.fromCharCode(char);
          } else {
            result += String.fromCharCode(newChar);
          }};
      } else {
        result += input[i];
      };
    };
    return result;
  };

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
