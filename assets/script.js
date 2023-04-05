//variables declared
var generateBtn = document.querySelector('#generate');
var passwordLength = 0;
var lettersLC = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
var lettersUC = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var spChars = [
  '!',
  '#',
  '$',
  '%',
  '&',
  '*',
  '+',
  '-',
  ',',
  '/',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '@',
  '[',
  '^'
];
var integer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var correctInputs = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128];
var needSpecialChar = false;
var needLowerCase = false;
var needUpperCase = false;
var needInteger = false;
var password = [" "];
var passwordLength = 0;
var result = null
var calculatedArrayOptions =
  //have a password array variable and at each question add onto it

  function generatePassword() {
    //first figure out the password length
    function figurePwLength() {
      //ask the user what the pw length should be
      passwordLength = prompt('How long would you like your password to be?');
      console.log('password length:>>>>>', passwordLength);
      console.log('type of password:>>>>>', typeof passwordLength);

      //first ensure that the password is within 8 to 128 characters
      if (
        passwordLength < 8 ||
        passwordLength > 128
      ) {
        alert('password must be between 8 to 128 characters');
        figurePwLength();
      }
      //if it is within 8 to 128 characters turn it into an integer
      else {
        passwordLength = parseInt(passwordLength);
        console.log('type of password:>>>>>', typeof passwordLength);
        //if it is included in the correctInputs array, stop 
        if (correctInputs.includes(passwordLength)) {
          return;
        }
        //if it is not in the array that means it's a letter
        else {
          alert("the password length must be a number");
          figurePwLength();
        }
      }
    }
    figurePwLength();
    function confirmCharTypes() {
      //confirm if the user wants lowercase characters
      needLowerCase = confirm('Do you want to include lowercase letters?');
      needLowerCase = needLowerCase.toString();
      console.log(typeof needLowerCase);
      if (needLowerCase) {
        calculatedArrayOptions = lettersLC;
      }
      //confirm if the user wants uppercase characters
      needUpperCase = confirm('Do you want to include upper case letters?');
      needUpperCase = needUpperCase.toString();
      console.log(typeof needUpperCase);
      if (needUpperCase) {
        calculatedArrayOptions = calculatedArrayOptions + lettersUC;
      }
      //confirm if the user wants numbers
      needInteger = confirm("Do you want to include numbers?")
      needInteger = needInteger.toString();
      console.log(typeof needInteger);
      if (needInteger) {
        calculatedArrayOptions = calculatedArrayOptions + integer;
      }
      //confirm if the user wants special characters
      needSpecialChar = confirm('Do you want special charcters?');
      needSpecialChar = needSpecialChar.toString();
      console.log(typeof needSpecialChar);

      result = needLowerCase + needUpperCase + needInteger + needSpecialChar;
      console.log(result);
      console.log("passwordL", passwordLength);
    }
    confirmCharTypes();
    //ensure that at least one type of special character was chosen
    if (
      result === "falsefalsefalsefalse"
    ) {
      alert(
        'You need at least one character type - lower case, upper case, numbers, or special characters'
      );
      confirmCharTypes();
    }
    //if all character types are true
    else if (
      result === "truetruetruetrue"
    ) {
      // calculatedArrayOptions = lettersLC.concat(lettersUC).concat(integer).concat(spChars);
      console.log('passwordLength:', passwordLength)
      password.shift();
      console.log('new password:', password);
      for (var i = 0; i < passwordLength + 1; i++) {
        console.log('see if this works', password);
        index = Math.floor(Math.random() * allArrays.length);
        //how to get it be all of the i's added together
        password = password.concat(allArrays[index - 1]);

      }
    } else if (
      result === "truefalsefalsefalse"
    ) {

    } else if (
      result === "falsetruefalsefalse"
    ) {

    } else if (
      result === "falsefalsetruefalse"
    ) {

    } else if (
      result === "falsefalsefalsetrue"
    ) {

    } else if (
      result === "truefalsetruefalse"
    ) {

    } else if (
      result === "falsetruetruetrue"
    ) {

    } else if (
      result === "truefalsetruetrue"
    ) {

    } else if (
      result === "truetruefalsetrue"
    ) {

    } else if (
      result === "truetruetruefalse"
    ) {

      // } else if (

      //   ) {

      // } else if (

      //   ) {

      //     } 

    }

    //other conditions to come

    password = password.join();
    console.log("Should be a string now", password);
    generatePassword();
  }

// Write password to the #password input
function writePassword() {
  console.log('hello');
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

