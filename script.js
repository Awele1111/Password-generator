//user clicks a button
  //event listener, calling a function to write password
  //inside our function we prompt for password length
    //var passwordLength = prompt("How many characters would you like your password to contain?"); //what does prompt return??
      //we need to validate the prompt so that it meets criteria, must be a number, gt 8 lt 129
    //then user is prompted password length 

    //if(passwordLength < 8){
      //alert('Password length must be at least 8 characters');
    //}
    
//then user confirms for password criteria
  //var hasNumeric = confirm("Click OK to confirm including numeric characters.");
  //var hasLower = confirm("Click OK to confirm including Lower characters.");
  //var hasUpper = confirm("Click OK to confirm including Upper characters.");
  //var hasSpecial = confirm("Click OK to confirm including Special characters.");

  //if(hasNumeric === false && hasLower === false && hasUpper === false && hasSpecial === false){
      //alert('Must select at least one character type');
  //}

  //object to store user input
  //var userPassword = {
      //length: passwordLength,
      //hasNumeric: hasNumeric,
      //hasLower: hasLower,
      //hasUpper: hasUpper,
      //hasSpecial: hasSpecial,
  //}
  // return userPassword;

  //create another function to generate the password
  //var userOptions = getOptions();
  //we have an array to store each criteria
  //var possibleChars = [];
  //var result = [];
  //var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  //if(userOptions.hasNumeric === true){
    //possibleChars = possibleChars.concat(numericCharacters);
  //}
  
//the password is displayed to the screen



// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);




// The above is starter code that was provided, rewriting below & explaining it as well:

// Assignment Code
var generateBtn = document.querySelector("#generate");
// the code above is creating a variable generateBtn utilizing the querySelector method to assign it to the generate id from the html code that was provided 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// the code above is stating that the var password variable is assigned to the generatePassword function to generate a password
// passwordText variable has a querySelector that utilizes the  #password(ID)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//the line of code above is stating that the writePassword function is called when the button is clicked

// Generate password function
function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to contain?"); 

  // the code above prompts user to enter password length

  // Check if password length is valid
  while (passwordLength < 8 || passwordLength > 128 || isNaN(parseInt(passwordLength))) {
    passwordLength = prompt("Please enter a valid password length (between 8 and 128 characters):");
  }
  
  var hasNumeric = confirm("Click OK to confirm including numeric characters.");
  var hasLower = confirm("Click OK to confirm including lower case characters.");
  var hasUpper = confirm("Click OK to confirm including upper case characters.");
  var hasSpecial = confirm("Click OK to confirm including special characters.");
// the above code prompts user to confirm whether password should contain numeric characters, lowercase characters, uppercase characters and special characters

  // Check if at least one character type is selected
  while (!(hasNumeric || hasLower || hasUpper || hasSpecial)) {
    alert("Please select at least one character type.");

    // the above code displays "Please select at least one character type." if no chraracter type is selected

    hasNumeric = confirm("Click OK to confirm including numeric characters.");
    hasLower = confirm("Click OK to confirm including lower case characters.");
    hasUpper = confirm("Click OK to confirm including upper case characters.");
    hasSpecial = confirm("Click OK to confirm including special characters.");
  }

  // Define possible characters
  var possibleChars = [];
  var result = "";
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '<', '>', '.', '?', '/'];

  // Add characters to possible characters based on user input
  if (hasNumeric) {
    possibleChars = possibleChars.concat(numericCharacters);
  }
  // in the code above numeric characters are added to possible characters if the user confirmed the password should contain numeric characters

  if (hasLower) {
    possibleChars = possibleChars.concat(lowerCaseCharacters);
  }

// in the code above lower characters are added to possible characters if the user confirmed the password should contain lower characters


  if (hasUpper) {
    possibleChars = possibleChars.concat(upperCaseCharacters);
  }

  // in the code above upper characters are added to possible characters if the user confirmed the password should contain upper characters


  if (hasSpecial) {
    possibleChars = possibleChars.concat(specialCharacters);
  }
  // in the code above special characters are added to possible characters if the user confirmed the password should contain special characters


  // Generate password
  for (var i = 0; i < passwordLength; i++) {
    result += possibleChars[Math.floor(Math.random() * possibleChars.length)];
  }
  // in the code above a for loop is used to loop through each character and generate the password

  return result;
}


