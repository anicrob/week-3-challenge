//variables declared
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;
var lettersLC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersUC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var spChars = ["!", "#", "$", "%", "&", "*", "+", "-" , "," , "/" , ":" ,";" ,"<","=" ,">" ,"?", "@", "[", "^"];
var needSpecialChar = false;
var needLowerCase = false;
var needUpperCase = false;
var password = null;

function generatePassword() {
    //first figure out the password length
    function figurePwLength() {
        //ask the user what the pw length should be
        var passwordLength = prompt("How long would you like your password to be?");
        //ensure that it is between 8 to 128 characters
        if(
            passwordLength < 8 ||
            passwordLength > 128
            //let the user know that it needs to be between 8 to 128 characters and restart function
          ) {
            alert("password must be between 8 to 128 characters");
            figurePwLength();
            //stop function if user hits cancel
          } else if (passwordLength === null) {
              return;
              //ensure that the input is a number
          } else if (typeof passwordLength !== number){
            alert("password length must be a number");
            figurePwLength();
          }
      }
      figurePwLength();
      //function containing all confirmations for character types
      var confirmCharTypes = function (){
        //confirm if the user wants lowercase characters
        var needLowerCase = confirm("Do you want to include lowercase letters?")
        //confirm if the user wants uppercase characters
        var needUpperCase = confirm("Do you want to include upper case letters?")
        //confirm if the user wants special characters
        var needSpecialChar = confirm("Do you want special charcters?")
        //ensure that at least one type of special character was chosen
        if (
            needLowerCase === false &&
            needUpperCase === false &&
            needSpecialChar === false
          ) {
              alert("You need at least one character type - lower case, upper case, or special characters");
              confirmCharTypes();
          }  
      }
      confirmCharTypes();
      //random index values
      var indexLCLetters = Math.floor(Math.random() * lettersLC.length);
      var indexUCLetters = Math.floor(Math.random() * lettersUC.length);
      var indexSpecChar = Math.floor(Math.random() * spChars.length);

      if (
        needLowerCase === true &&
        needUpperCase === true &&
        needSpecialChar === true 
      ) {
        password = concat(lettersLC[indexLCLetters] + lettersUC[indexUCLetters] + spChars[indexSpecChar])
      }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());





