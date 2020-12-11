const config = require('./config.js')
const store = require('./store.js')


const signup = function (formdata) {
  console.log('Someone registered!');

  return $.ajax({
    url: config.apiUrl + '/sign-up/',
    method: 'POST',
    data: formdata
  })
}

const signin = function (formdata) {
  console.log('Something wicked this way comes');

  $('.auth').show()

  return $.ajax({
    url: config.apiUrl + '/sign-in/',
    method: 'POST',
    data: formdata
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

module.exports = {
  signup,
  signin,
  signout
};
