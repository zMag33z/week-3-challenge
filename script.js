// Attaches a clickable area on the html document with id generate.
var generateBtn = document.querySelector("#generate");
console.log("Click the RED Button.");

// First Prompt Length  
var PasswordLength = 8;
// Next Prompts Selectors 'ok or cancel'.
var PasswordLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var PasswordUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var PasswordNumbers = ["0","1","2","3","4","5","6","7","8","9"];
var PasswordSCharacter = ["!","@","#","$","%","^","&","*","(",")","[","]","{","}","=","<",">","/","?","."];
var PasswordSelectors = [];


// 4. Here the Prompt start.
function PasswordPrompts() {
  console.log("Choose your password criteria.");

  PasswordSelectors = [];  //refreshes function.

    PasswordLength = parseInt(prompt("Password Length? (8-128)"));
  if(isNaN(PasswordLength) || PasswordLength < 8 || PasswordLength > 128) {
    alert ("Length must be a number 8 - 128.  Try again.");
    console.log("You must choose a number. \n Click the RED Button.")
    return false;
  } else if (confirm("Lowercase letters (abc) in your password?")) {
    PasswordSelectors = PasswordSelectors.concat(PasswordLower);
  }
  if (confirm("Uppercase letters (ABC) in your password?")) {
    PasswordSelectors = PasswordSelectors.concat(PasswordUpper);
  }
  if (confirm("Numbers (123) in your password?")) {
    PasswordSelectors = PasswordSelectors.concat(PasswordNumbers);
  }
  if (confirm("Special Characaters (!@#) in your password?")) {
    PasswordSelectors = PasswordSelectors.concat(PasswordSCharacter);
  }
  return true;
}

// 6. Created the actual function for generatePassword() in writePassword().
function generatePassword() {
  console.log("Generating Password.");
  var generated = ""; // Created variable to return to until PasswordLength met.
  for(var i = 0; i < PasswordLength; i++) {
    var mixAllIndex = Math.floor(Math.random() * PasswordSelectors.length);
    generated = generated + PasswordSelectors[mixAllIndex];
  }
  return generated;
}

// 1. Listening event Click then writePassword().
generateBtn.addEventListener("click", writePassword);

// 2. After click start function writePassword() has no data.
function writePassword() {
// 3. Can only writePassword() after PasswordPrompts()
// 5. Only if PasswordPrompts(true) can writePassword() proceed.
  if(PasswordPrompts(true)) {
    var password = generatePassword();

// 7. Password turned into text value to be placed into class password of html document.
     var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  if(generatePassword(null)) {
    alert("You did not choose any characters. (abcABC123!@#)\n Click the RED Button.");
  passwordText.value = "";
  console.log("You didn't choose any characters.");
  }
}