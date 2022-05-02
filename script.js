// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordOptions = "";
var generatedPassword = [];


var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers =["0123456789"];
var specials = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = generatedPassword;

}

function generatePassword() {
  var pwLength = prompt ("The length of your password (8-128 digits)");
  lower = window.confirm("Do you want lowercase characters?");
  upper = window.confirm("Do you want uppercase characters?");
  number = window.confirm("Do you want numeric characters?");
  special = window.confirm("Do you want symbol characters?");
  

  if(lower) {
    passwordOptions += lowerCase;
  }

  if(upper) {
    passwordOptions += upperCase;
  }

  if(number) {
    passwordOptions += numbers;
  }

  if(special) {
    passwordOptions += specials;
  }

  console.log(passwordOptions)
  for(let i=0; i < pwLength; i++) {
    generatedPassword += passwordOptions.charAt(Math.floor(Math.random() * passwordOptions.length));
  }

  console.log(generatedPassword)
  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
