//user clicks a button
  //event listener, calling a function to write password


  //inside our function we prompt for password length
function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to contain?"); //what does prompt return??

  if (passwordLength < 8) {
    alert('Password length must be at least 8 characters');
  } else if (passwordLength > 128) {
    alert('Password length must be no more than 128 characters');
  } else {
    var hasNumeric = confirm("Click OK to confirm including numeric characters.");
    var hasLower = confirm("Click OK to confirm including Lower characters.");
    var hasUpper = confirm("Click OK to confirm including Upper characters.");
    var hasSpecial = confirm("Click OK to confirm including Special characters.");

    if(hasNumeric === false && hasLower === false && hasUpper === false && hasSpecial === false){
      alert('Must select at least one character type');
    } else {var userPassword = {
          length: passwordLength,
          hasNumeric: hasNumeric,
          hasLower: hasLower,
          hasUpper: hasUpper,
          hasSpecial: hasSpecial,
      }
       return userPassword;
}
  }
}
function generateuserpassword (userOptions){
  var possibleChars = [];
  var result = [];
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var LowerCharacters = ['a', 'b', 'c', ];
  var upperCharacters = [];
  var specialCharacters = [];

  if(userOptions.hasNumeric === true){
  possibleChars = possibleChars.concat(numericCharacters);
  }

if(userOptions.hasLower === true){
  possibleChars = possibleChars.concat(LowerCharacters);
}
  if(userOptions.hasUpper === true){
    possibleChars = possibleChars.concat(upperCharacters);
    }
    if(userOptions.hasSpecial === true){
      possibleChars = possibleChars.concat(specialCharacters);
      }

      // fill the results array with 
  } 
  //var passwordLength = prompt("How many characters would you like your password to contain?"); //what does prompt return??
      //we need to validate the prompt so that it meets criteria, must be a number, greater than 8 less than 129
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
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
