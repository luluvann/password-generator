// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if(password == null){
    return
  }
  passwordText.value = password;
}

// Get and capture user's input and do validation on length and criterias selected
function getUserInput(){
  //return [8,true,true,true,true]
first_criteria = prompt("How many characters would you like your password to contain ? (Choose between 8 and 128)")
  if(first_criteria >= 8 && first_criteria < 129){
      var userInput = []
      userInput.push(first_criteria)
      second_criteria=confirm("Click Ok to confirm including special characters")
      userInput.push(second_criteria)
      third_criteria=confirm("Click Ok to confirm including lowercase characters")
      userInput.push(third_criteria)
      fourth_criteria=confirm("Click Ok to confirm including uppercase characters")
      userInput.push(fourth_criteria)
      fifth_criteria=confirm("Click Ok to confirm including numeric characters")
      userInput.push(fifth_criteria)

      // Validate userInput, if none of the characters types is selected then reprompt
      if(!userInput[1] && !userInput[2] && !userInput[3] && !userInput[4]){
          alert("Please select at least one character type to include!")
      } else {
        return userInput
      }
  } else {
    alert("Password must be 8 to 128 characters long, Please select a valid Password length!")
  }
}

// Generate password
function generatePassword(){
  userInput = getUserInput()
  if(userInput == null){
    return
  }
  var characters_type = [
    "~`!@#$%^&*()_-+={[}]|\:;\"'<,>.?/",
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789"
  ]
  var temp_password = ""
  var generated_password = ""

  // Loop through the userInput array at index 1 to 4 and if the criteria was set to True, then the whole string of the available options for the specified characters type will be added to the temp_password variable
  for(var i = 1 ; i < userInput.length ;i++){
    if(userInput[i]){
        temp_password = temp_password + characters_type[i-1]
    }
  }
  
  // Generate a random character until reach the password length specified by the user
  for(var i = 0 ; i < parseInt(userInput[0]) ;i++){
    randomIndex = Math.floor(Math.random()*temp_password.length);
    generated_password = generated_password + temp_password[randomIndex]
  }
  return generated_password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
