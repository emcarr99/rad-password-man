// Assignment code here
function generatePassword() {
// array of uppercase letters
// array of numbers
// array of special characters
// to hold password being built
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3","4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
var selectArray = [];

var passwordLength = getPasswordLength();

var charTypeSelected = false;
// loop that ensures the user chooses at least one character type
while (charTypeSelected == false) {
  var lowCases = getSelect("lowercase");
  var upperCase = getSelect("uppercase");
  var numbSet = getSelect("numeric");
  var specialGuy = getSelect("special");
  if ((lowCase) || (upperCaseSet) || (number) || (special)) {
    charTypeSelected= true;
  } else {
    alert("You must select at least one character type")
  }
}
// if statements determines the user choices and then add them to the blank array
if (lowCases) {
  selectArray = selectArray.concat(lowCase);
}
if (upperCase) {
  selectArray = selectArray.concat(upperCaseSet);
}
if (numbSet) {
  selectArray = selectArray.concat(numbers);
}
if (specialGuy) {
  selectArray= selectArray.concat(special);
}

  var passwordString = "";
//  loop will take the appended array - randomly select elements from it - then append them to a string -> thus generating the password
  for (var i = 0; i < passwordLength; i++) {
    passwordString += selectArray[Math.floor(Math.random() * (selectArray.length))];
  }
    return passwordString
  }


function getPasswordLength() {
  var userSelect = 0;
  while ((userSelect < 8) || (userSelect > 128)) {
    userSelect =parseInt(prompt("Enter the number of characters you want, between 8 and 128: "));
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
