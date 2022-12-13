// USER LOGIN / SIGNUP

// Global Variables
let users;

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  let user = document.getElementById("usernameInput").value;
  let password = document.getElementById('passwordInput').value;
  let confirmPassword = document.getElementById('confirmPasswordInput').value;

  if (password == confirmPassword) {
    let ifusernameExists = false;
    for (let i = 0; i < users.length; i++) {
      if (user == users[i].name) {
        ifusernameExists = true;
      }
    }
    if (ifusernameExists == false) {
      users.push({
        'name': user,
        'password': password
      });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Congratulations! You have signed up.")
    }
    if (ifusernameExists == true) {
      alert("This username is taken");
    }
  } else {
    alert("You're passwords don't match");
  }
}


// SIGN IN BTN CLICKED

signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  let UsernameSignin = document.getElementById("signInUserInput").value;
  let passwordSignin = document.getElementById("signInPassInput").value;
  let success = false;
  for (let i = 0; i < users.length; i++) {
    if (UsernameSignin == users[i].name && users[i].password == passwordSignin) {
      alert("You Have Been Logged in!");
      success = true;
    }
  }
  if (success == false) {
    alert("Incorrect Username or Password. Please try again.");
  }
}



// local storage
if (localStorage.getItem("users") === null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem("users"));
}

