'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const boardEvents = require('./gameLogic.js')
const userEvents = require('./events.js')

$(() => {
  // Site
  $('.auth').hide()

  // User
  $('#registration').on('submit', userEvents.onRegisterUser)
  $('#log-in').on('submit', userEvents.onSignInUser)
  $('#log-out').on('click', userEvents.onSignOutUser)
  $('#change-pass').on('submit', userEvents.onChangePass)


  // Game
  $('.actualPlayButton').on('click', boardEvents.startGame)
  //$('[id=box]').on('click', boardEvents.playAreaAction)
})
