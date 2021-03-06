// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// User Input
function userInput(){
first_criteria = prompt("How many characters would you like your password to contain ? (Choose between 8 and 128)")
  if(first_criteria >= 8 && first_criteria < 128){
      var userInput = []
      userInput.push(first_criteria)
      second_criteria=confirm("Click Ok to confirm including special characters")
      userInput.push(second_criteria)
      third_criteria=confirm("Click Ok to confirm including lowercase characters")
      userInput.push(third_criteria)
      fourth_criteria=confirm("Click Ok to confirm including uppercase characters")
      userInput.push(fourth_criteria)
      return userInput
  } else {
    alert("Password must be 8 to 127 characters long, Try again!")
  }
}
// Generate password
function generatePassword(){
  userInput = userInput()
  return userInput[0]
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
