//variables declared

//assigning the button in the HTML/DOM to the generateBtn variable using the generate id - provided in starter code
var generateBtn = document.querySelector('#generate');
//passwordLength starts at 0 to be used later
var passwordLength = 0;
//array options for lowercase letters
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
//array options for uppercase letters
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
//array options for special characters
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
//array options for integers/numbers
var integer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//possible correct input values
var correctInputs = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128];
//confirm inputs defined to be chosen later
var needSpecialChar = false;
var needLowerCase = false;
var needUpperCase = false;
var needInteger = false;
//password for now is empty
var password = [''];
//array of calculated array options for the password is empty for now
var calculatedArrayOptions = [''];

//declaring a function to figure out the password length
function figurePwLength() {
  //ask the user what the pw length should be
  passwordLength = prompt('How long would you like your password to be?');
  //console.log to help debug
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
//declared function to figure out the character types and calculate the array based on the confirmations
function confirmCharTypes() {
  //confirm if the user wants lowercase characters & assign calculatedArrayOptions values
  needLowerCase = confirm('Do you want to include lowercase letters?');
  if (needLowerCase) {
    calculatedArrayOptions = lettersLC;
  }
  //confirm if the user wants uppercase characters & assign calculatedArrayOptions values
  needUpperCase = confirm('Do you want to include upper case letters?');
  if (needUpperCase) {
    calculatedArrayOptions = calculatedArrayOptions.concat(lettersUC);
  }
  //confirm if the user wants numbers & assign calculatedArrayOptions values
  needInteger = confirm("Do you want to include integers?");
  if (needInteger) {
    calculatedArrayOptions = calculatedArrayOptions.concat(integer);
  }
  //confirm if the user wants special characters & assign calculatedArrayOptions values
  needSpecialChar = confirm('Do you want special charcters?');
  if (needSpecialChar){
    calculatedArrayOptions = calculatedArrayOptions.concat(spChars);
  }
  //console.log to help debug
  console.log("passwordL", passwordLength);
  console.log("LC", needLowerCase, "UC", needUpperCase, "integers", needInteger, "specialchars", needSpecialChar);
  return;
}
//declared function to randomize the 
function computerRandomizePw() {
  //console.log to help debug
  console.log('passwordLength:', passwordLength)
  console.log('new password:', password);
  //loop to go through the calculatedArrayOptions based on passwordLength
  for (var i = 0; i < passwordLength; i++) {
    index = Math.floor(Math.random() * calculatedArrayOptions.length);
    //how to add together the values into an array
    password = password.concat(calculatedArrayOptions[index - 1]);
  }
  return;
}
function generatePassword() {
  //first figure out the password length
  figurePwLength();
  //figure out the character types desired
  confirmCharTypes();
  //ensure that at least one type of special character was chosen
  if (
    needLowerCase === false &&
    needUpperCase === false &&
    needInteger === false &&
    needSpecialChar === false
  ) {
    //let user know that they need one character type at least; restart function
    alert(
      'You need at least one character type - lower case, upper case, numbers, or special characters'
    );
    confirmCharTypes();
  }
  //create the password array
  computerRandomizePw();
  //turn the password into a string
  password = password.join('');
  //console.log to debug
  console.log('see if this works should be a string', password);
  //return the password
  return password;
}
// Write password to the #password input - provided in starter code
function writePassword() {
  console.log('hello');
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button - provided in starter code
generateBtn.addEventListener('click', writePassword);

