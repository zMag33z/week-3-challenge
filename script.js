// Attaching event listener to the html document with id generate.
var generateBtn = document.querySelector("#generate");
console.log("Click the RED Button.");

// First Prompt Length  
var PasswordLength = 8;
// Next Prompts Selectors 'yes' or 'no'.
var PasswordLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var PasswordUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var PasswordNumbers = ["0","1","2","3","4","5","6","7","8","9"];
var PasswordSCharacter = ["!","@","#","$","%","^","&","*","(",")","[","]","{","}","=","<",">","/","?","."];
var PasswordSelectors = [];


// Here the prompts start.
function PasswordPrompts() {
  console.log("Choose your password criteria.");

  PasswordSelectors = [];  //refreshes function.

    PasswordLength = parseInt(prompt("Password Length? (8-128)"));
  if(isNaN(PasswordLength) || PasswordLength < 8 || PasswordLength > 128) {
    alert ("Length must be a number, 8 - 128.  Try again.");
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

// After prompts then generates password.
function generatePassword() {
  console.log("Generating Password.");

  var generated = "";
  for(var i = 0; i < PasswordLength; i++) {
    var mixAllIndex = Math.floor(Math.random() * PasswordSelectors.length);
    generated = generated + PasswordSelectors[mixAllIndex];
  }
  return generated;
}

// After click tells document to write the Password.
generateBtn.addEventListener("click", writePassword);

// Writes 'the generated password' to the html document textarea id password.
function writePassword() {
  var PromptsAnswered = PasswordPrompts();

  if(PromptsAnswered) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
  console.log("Here is your new Password.");
}