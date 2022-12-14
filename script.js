// Error with Permissions-Policy header: Origin trial controlled feature not enabled: 'interest-cohort'.
// Not a user created error.
// This error comes up if you refresh the page.  Done some reading on it.  Little confusing.  Tried three fixes with no luck.
// Found this website that has some code worked for it but I'm assuming it would be a totally seperate js file.
// https://drag13.io/posts/how-turn-off-floc-javascript/index.html.
// Unknowing where to go I am leaving it as is.

// Attaches a clickable area on the html document with id generate.
var generateBtn = document.querySelector("#generate");
console.log("Click the RED Button.");
// First Prompt Length.
var PasswordLength = 8;
// Next Prompts Selectors 'ok or cancel'.
var PasswordLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var PasswordUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var PasswordNumbers = ["0","1","2","3","4","5","6","7","8","9"];
var PasswordSCharacter = ["!","@","#","$","%","^","&","*","(",")","[","]","{","}","=","<",">","/","?","."];
var PasswordSelectors = [];

// 4. Here the Prompt starts.
function PasswordPrompts() {
  console.log("Choose your password criteria.");
  PasswordSelectors = [];  //refreshes function.
    PasswordLength = parseInt(prompt("Password Length? (8-128)"));
  if(isNaN(PasswordLength) || PasswordLength < 8 || PasswordLength > 128) {
    alert ("Length must be a number 8 - 128.  Try again.");
    console.log("You must choose a number. \n Click the RED Button.")
    return false;
  }
  if (confirm("Lowercase letters (abc) in your password.")) {
    PasswordSelectors = PasswordSelectors.concat(PasswordLower);
    console.log("You chose Lowercase letters.");
  } else {
    console.log("You did not choose Lowercase letters.");
  }
  if (confirm("Uppercase letters (ABC) in your password.")) {
    PasswordSelectors = PasswordSelectors.concat(PasswordUpper);
    console.log("You chose Uppercase letters.");
  } else {
    console.log("You did not choose Uppercase letters.");
  }
  if (confirm("Numbers (123) in your password.")) {
    PasswordSelectors = PasswordSelectors.concat(PasswordNumbers);
    console.log("You chose Numbers.");
  } else {
    console.log("You did not choose Numbers.");
  }
  if (confirm("Special Characaters (!@#) in your password.")) {
    PasswordSelectors = PasswordSelectors.concat(PasswordSCharacter);
    console.log("You chose Special Characters.");
  } else {
    console.log("You did not choose Special Characters.");
  }
  if (PasswordSelectors == 0) {
    alert("You must choose at least one Character Type.  Try again.");
    console.log("You must choose at least one Character Type.\n Click the RED Button.");
    return false;
  } else {
    return true;
  }
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
    console.log("Here's your new Password.  Use it wisely.");
  }

}