const store = require('./store.js')


// User
const onRegisterUser = function () {
  console.log('Sign Up Clicked');
}

const onSignInUser = function (response) {
  console.log('Sign in Clicked');
  store.user = response.user
  console.log(response.user);
  $('.auth').show()

  $('.welcomeMessage h1').text("Hey " + store.user.email + "!")
}

const onSignOutUser = function () {
  console.log('Logoff Clicked');
  store.user = null
  $('.unauth').show()
  $('.auth').hide()
}

const onFailure = function () {
  console.log('Something critical exploded.');
}

const startGame = function () {
  console.log('Hi :)');
}

// Game API UI

module.exports = {onRegisterUser, onSignInUser, onSignOutUser, onFailure};
