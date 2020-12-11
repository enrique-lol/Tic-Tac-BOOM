const store = require('./store.js')

const onRegisterUser = function () {
  console.log('Sign Up Clicked');
}

const onSignInUser = function () {
  console.log('Sign in Clicked');
}

const onSignOutUser = function () {
  console.log('Logoff Clicked');
  store.user = null
}

const onFailure = function () {
  console.log('Something critical exploded.');
}

module.exports = {onRegisterUser, onSignInUser, onSignOutUser, onFailure};
