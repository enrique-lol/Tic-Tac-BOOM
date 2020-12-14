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

const startGame = function (gameResponse) {
  console.log('Calling Game API...');
  store.game = gameResponse.game._id
  console.log(gameResponse);
  console.log(gameResponse.game._id);

}

// Game API UI

module.exports = {onRegisterUser, onSignInUser, onSignOutUser, onFailure, startGame};
