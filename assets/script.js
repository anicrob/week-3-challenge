// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//start function

//variables declared
var passwordLength = 0;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var spChars = ["!", "#", "$", "%", "&", "*", "+", "-" , "," , "/" , ":" ,";" ,"<","=" ,">" ,"?", "@", "[", "\", "^"];
// var needSpecialChar = false;
// var needLowerCase = false;
// var needUpperCase = false;
var password = null;



function figurePwLength(){
  var passwordLength = prompt("How long would you like your password to be?");
  return;
}

figurePwLength();

if(
  passwordLength < 8 ||
  passwordLength > 128
) {
  alert("password must be between 8 to 128 characters");
  figurePwLength();
} else if (passwordLength === null) {
    return;
} else if (typeof passwordLength !=== number){
  alert("password length must be a number");
  figurePwLength();
}

var confirmCharTypes = function (){
  var needLowerCase = confirm("Do you want to include lowercase letters?")

  var needUpperCase = confirm("Do you want to include upper case letters?")
  
  var needSpecialChar = confirm("Do you want special charcters?")
  
}

if (
  needLowerCase === false &&
  needUpperCase === false &&
  needSpecialChar === false
) {
    alert("You need at least one character type - lower case, upper case, or special characters");
    confirmCharTypes();
} else {

}