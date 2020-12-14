const config = require('./config.js')
const store = require('./store.js')

// User API
const signup = function (formData) {
  console.log('Someone registered!');

  return $.ajax({
    url: config.apiUrl + '/sign-up/',
    method: 'POST',
    data: formData
  })
}

const signin = function (formData) {
  console.log('Something wicked this way comes');
  $('.auth').show()

  return $.ajax({
    url: config.apiUrl + '/sign-in/',
    method: 'POST',
    data: formData
  })
}

const signout = function () {
  console.log('Im leaving you');

  $('.auth').hide()
  $('.unauth').show()

  return $.ajax({
    url: config.apiUrl + '/sign-out/',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// Game API
const startGame = function () {
  console.log('Its Time');

  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signup,
  signin,
  signout,
  startGame
};
