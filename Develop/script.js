// Assignment code here
function generatePassword() {

var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3","4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
var selectArray = [];

var passwordLength = getPasswordLength();

var charType = false;

while (charType == false) {
  var lowCase = getSelect("lowercase");
  var upperCaseSet = getSelect("uppercase");
  var numbers = getSelect("numeric");
  var special = getSelect("special");
  if ((lowCase) || (upperCaseSet) || (number) || (special)) {
    charType = true;
  } else {
    alert("You must select at least one character type")
  }
}

if (lowCase) {
  selectArray = selectArray.concat(lowCase);
}

if (upperCaseSet) {
  selectArray = selectArray.concat(upperCaseSet);
}

if (numbers) {
  selectArray = selectArray.concat(numbers);
}

if (special) {
  selectArray= selectArray.concat(special);
}

  var passwordString = "";
 
  for (var i = 0; i < passwordLength; i++) {
    passwordString += selectArray[Math.floor(Math.random() * (selectArray.length))];
  }
    return passwordString
  }


function getPasswordLength() {
  var userSelect = 0;
  while ((userSelect < 8) || (userSelect > 128)) {
    userSelect =parseInt(prompt("Enter the number of characters you want, between 8 and 128:"));
    if (isNaN(userSelect)) {
      userSelect = 0;
    }
  }
  return userSelect;
}

function getSelect(currentChoice) {
  var userSelect = "a",
    messagePrompt= "";
  var messagePrompt = ('Would you like '.concat(currentChoice));
  messagePrompt = messagePrompt.concat(' characters (yes/no)?');
  while (userSelect = "a") {
    userSelect = (prompt(messagePrompt));
    userSelect = userSelect.toLowerCase();
    if (userSelect == "yes") {
      return true;
    } else if (userSelect ==  "no") {
      return false;
    }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
