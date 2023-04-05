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
var calculatedArrayOptions = [" "];

function computerRandomizePw() {
  console.log('passwordLength:', passwordLength)
  password.shift();
  console.log('new password:', password);
  for (var i = 0; i < passwordLength; i++) {
    index = Math.floor(Math.random() * calculatedArrayOptions.length);
    //how to get it be all of the i's added together
    password = password.concat(calculatedArrayOptions[index - 1]);
  }
  return;
}
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
  } return;
}
function confirmCharTypes() {
  //confirm if the user wants lowercase characters
  needLowerCase = confirm('Do you want to include lowercase letters?');
  if (needLowerCase) {
    calculatedArrayOptions = lettersLC;
  }
  //confirm if the user wants uppercase characters & assign calculatedArrayOptions values
  needUpperCase = confirm('Do you want to include upper case letters?');
  if (needUpperCase) {
    calculatedArrayOptions = calculatedArrayOptions + lettersUC;
  }
  //confirm if the user wants numbers
  if (needInteger) {
    calculatedArrayOptions = calculatedArrayOptions + integer;
  }
  //confirm if the user wants special characters
  needSpecialChar = confirm('Do you want special charcters?');
  if (needSpecialChar){
    calculatedArrayOptions = calculatedArrayOptions + spChars;
  }
  console.log("passwordL", passwordLength);
  console.log(needLowerCase, needUpperCase, needInteger, needSpecialChar);
  return;
}
function generatePassword() {
  //first figure out the password length
  figurePwLength();
  confirmCharTypes();
  //ensure that at least one type of special character was chosen
  if (
    needLowerCase === false &&
    needUpperCase === false &&
    needInteger === false &&
    needSpecialChar === false
  ) {
    alert(
      'You need at least one character type - lower case, upper case, numbers, or special characters'
    );
    confirmCharTypes();
  }
  computerRandomizePw();
  password = password.join("");
  console.log('see if this works should be a string', password);
  return password;
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

