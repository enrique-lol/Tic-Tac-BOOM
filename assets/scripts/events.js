const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../lib/get-form-fields.js')

const onRegisterUser = function (event) {
  event.preventDefault();
  console.log('Register submit button clicked');

  const form = event.target
  const formData = getFormFields(form)

  console.log(formdata);

  api.signup(formData)
  .then(ui.onSignUpUser)
  .catch(ui.onFailure)
}

const onSignInUser = function (event) {
  event.preventDefault();
  console.log('Login submit button clicked');

  const form = event.target
  const formData = getFormFields(form)

  api.signin(formdata)
  .then(ui.onSigninUser)
  .catch(ui.onFailure)
}

const onSignOutUser = function (event) {
  event.preventDefault()

  api.signout()
  .then(ui.onLogOffUser)
  .catch(ui.onFailure)
}

module.exports = {
  onRegisterUser,
  onSignInUser,
  onSignOutUser
};
