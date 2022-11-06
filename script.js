// Assignment Code
var generateBtn = document.querySelector("#generate");
  console.log("Yay! You clicked the button! \n Now choose your password criteria.");
var PasswordLength = [];
var PasswordLower = [];
var PasswordUpper = [];
var PasswordSCharacter = [];

function PasswordPrompts() {
    PasswordLength = parseInt(prompt("Password Length? (8-128)"));
  if(isNaN(PasswordLength) || PasswordLength < 8 || PasswordLength > 128) {
    alert ("Length must be a number, 8 - 128.  Try again.");
    return false;
  }else{
    confirm("Lowercase letters (abc) to your password?");
  }
  if (confirm("Uppercase letters (ABC) to your password?")) {

  }
}


function generatePassword() {
// console.log("Yay! You clicked the button!");
//prompt user for criteria
///length 8-120

// Generate random 'Lower, Upper, Number, Special Characeter'  Used charset from browsers character selector by number.
//function getRandomLower() {
//  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//}
//function getRandomUpper() {
//  return string.fromCharCode(Math.floor(Math.random() * 26) + 65);
//}
//function getRandomNumber() {
//  return string.fromCharCode(Math.floor(Math.random() * 48) + 10);
//}
//function getRandomSCharacter() {
//  const sChar = '!@#$%^&*()[]{}=<>/,.';
//  return sChar [Math.floor(Math.random() * sChar.length)];
}

//validate the input

//generate password

//This will display password to page.
//  return;
//}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log("Yay! You chose criteria for your new password! \n Here's your new password.");