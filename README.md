# Password Generator App

## About
The purpose is to generate a random password based on the criterias specified by the user.

## Deployed App
[https://luluvann.github.io/password-generator/]

## Preview of the App
![](./password-generator-preview.gif)

## Features
- Has a button to generate a random password
- Takes the user input on different criterias (password length between 8 and 128 characters, 4 types of characters available)
- Prevents the user from specifying wrong input (invalid length or no selection among the 4 characters types available)
- Displays the generated password to the screen for easy copy-pasting
- Covers edge case: due to the randomness created by the algorithm in the generated password, it used to happen that when the user selected multiple characters types and the 1st generated password doesn't contain all the types the user has selected (not all the characters types selected by the user are included in the generated password). To avoid this situation, an additional algorithm has been added to the logic in order to automatically re-generate a password until it contains all the characters type the user has selected.

## Built with
- Javascript 
- DOM
- HTML
- CSS