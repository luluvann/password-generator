// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// get User type of characters selection
function getUserInput(){
  //return [10,false,false,false,false]
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
      fifth_criteria=confirm("Click Ok to confirm including numeric characters")
      userInput.push(fifth_criteria)
      return checkUserInput(userInput)
  } else {
    alert("Password must be 8 to 127 characters long, Try again!")
  }
}

// Validate that the user selection
function checkUserInput(userInput){
  // if the user selected false to all 2nd, 3rd, 4th and 5th criterias then the system will pick randomly one character type
  if(!userInput[1] && !userInput[2] && !userInput[3] && !userInput[4]){
    // generate a random integer excluding 0
    randomIndex = Math.ceil(Math.random()*(userInput.length-1))
    // the random integer is used as the index number (from 1 to 4 included) for the userInput array and assign the value true to it
    userInput[randomIndex] = true
    console.log(userInput)
    return  userInput
  } else {
    console.log(userInput)
    return userInput
  }
}

// Generate password
function generatePassword(){
  userInput = getUserInput()
  var characters_type = [
    "~`!@#$%^&*()_-+={[}]|\:;\"'<,>.?/",
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789"
  ]
  var temp_password = ""
  var generated_password = ""

  for(var i = 1 ; i < userInput.length ;i++){
    if(userInput[i]){
        temp_password = temp_password + characters_type[i-1]
    }
  }
  
  for(var i = 0 ; i < parseInt(userInput[0]) ;i++){
    randomIndex = Math.floor(Math.random()*temp_password.length);
    generated_password = generated_password + temp_password[randomIndex]
    console.log(generated_password)
  }

  return generated_password
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
