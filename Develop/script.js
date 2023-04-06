// Assignment code here
// ! need these variables: 
// selected length of password
var pwrdLength = getpwrdLength();
// array of lowercase letters
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// array of uppercase letters
var upperCaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// array of numbers
var number = ["0", "1", "2", "3","4", "5", "6", "7", "8", "9"];
// array of special characters
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
// to hold password being built
var selectArray = [];
// possible mega-array
// ! prompt for password length = stored in a variable

// ! validate the user input = if user chooses <8 or >128, alert that they need to choose a valid password length, then they'll have to restart OR call the function that prompts for length again
// prompt = do you want uppercase letters
// prompt = do you want lowercase letters
// prompt = do you want numbers
// prompt = do you want special characters
// ! validate the user chose at least one character set -> if not, either start over OR recursively call the function that prompts for character sets
// with each prompt comes an array of that character set
// at least one of each selected character type included in the password
// randomly generate a character from each set as it's chosen and add it to the end of the password that is being built ((.push) = array or .concat() = for a string)
// ! for loop:
// for (var i = password.length - 1; i < passwordLength; i++)
// EITHER keep the character sets separate OR combine (mega-array) to pull the rest of the characters from
// IF keeping the character sets separate, randomly generate a number to tell which array you're pulling from, then randomly generate a number to pull the character from the array (character will by array[number])
// IF pushing to a mega-array randomly generate a number to pull a character from the array
// IF pushing to a mega-array, remember to set the array back to an empty array at the start of the process!
// return the generated password


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
