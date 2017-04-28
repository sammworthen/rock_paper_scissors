$(document).ready( function() {
  //grab the player 1's selection

  var playerChoice2 = Math.random()
  var $rock = $('#rock')
  var $paper = $('#paper')
  var $scissors = $('#scissors')

  $('button').click( function() {

    var playerChoice1 = $(this).attr('id');

    if(playerChoice2 < .33) {
      playerChoice2 = 'rock'
    } else if (playerChoice2 < .6666) {
      playerChoice2 = 'paper'
    } else {
      playerChoice2 = 'scissors'
    };

    $('h2').append('Player 1 chose: ' + playerChoice1 + ' ' +
                    'Player 2 chose: ' + playerChoice2)

    var playerPoints1 = 0
    var playerPoints2 = 0

    if (playerChoice1 === 'rock') {
      if (playerChoice2 === 'rock') {
        $('p').append('You tie')
        playerPoints1 = 0
        playerPoints2 = 0
      }
      else if (playerChoice2 == 'paper') {
        $('p').append('player 2 wins')
        playerPoints1 = 0
        playerPoints2 = 1
      }
      else {
        $('p').append('player 1 wins')
        playerPoints1 = 1
        playerPoints2 = 0
      }
    }
    else if (playerChoice1 === 'paper') {
      if (playerChoice2 === 'paper') {
        $('p').append('You tie')
        playerPoints1 = 0
        playerPoints2 = 0
      }
      else if (playerChoice2 === 'scissors') {
        $('p').append('player 2 wins')
        playerPoints1 = 0
        playerPoints2 = 1
      }
      else {
        $('p').append('player 1 wins')
        playerPoints1 = 1
        playerPoints2 = 0
       }
    }
    else {
      if (playerChoice2 === 'scissors') {
        $('p').append('You tie')
        playerPoints1 = 0
        playerPoints2 = 0
      }
      else if (playerChoice2 === 'rock') {
        $('p').append('player 2 wins')
        playerPoints1 = 0
        playerPoints2 = 1
      }
      else {
        $('p').append('player 1 wins')
        playerPoints1 = 1
        playerPoints2 = 0
      }
    }
  })
})
