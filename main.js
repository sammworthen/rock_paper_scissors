$(document).ready( function() {

  var playerArray1 = new Array
  var playerArray2 = new Array
  var playerScore1 = 0
  var playerScore2 = 0

  $('#rock, #paper, #scissors').click( function() {
    var playerChoice2 = Math.random()
    var playerChoice1 = $(this).attr('id');

    if(playerChoice2 < .33) {
      playerChoice2 = 'rock'
    } else if (playerChoice2 < .6666) {
      playerChoice2 = 'paper'
    } else {
      playerChoice2 = 'scissors'
    };

    $('h3').text('Player 1 chose: ' + playerChoice1 + ' ' +
                    'Player 2 chose: ' + playerChoice2)
    var playerPoints1 = 0
    var playerPoints2 = 0

    if (playerChoice1 === 'rock') {
      if (playerChoice2 === 'rock') {
        $('p').text('You tie')
        playerPoints1 = 0
        playerPoints2 = 0
      } else if (playerChoice2 == 'paper') {
        $('p').text('Player 2 wins')
        playerPoints1 = 0
        playerPoints2 = 1
      } else {
        $('p').text('Player 1 wins')
        playerPoints1 = 1
        playerPoints2 = 0
      }
    } else if (playerChoice1 === 'paper') {
      if (playerChoice2 === 'paper') {
        $('p').text('You tie')
        playerPoints1 = 0
        playerPoints2 = 0
      } else if (playerChoice2 === 'scissors') {
        $('p').text('Player 2 wins')
        playerPoints1 = 0
        playerPoints2 = 1
      } else {
        $('p').text('Player 1 wins')
        playerPoints1 = 1
        playerPoints2 = 0
       }
    } else {
      if (playerChoice2 === 'scissors') {
        $('p').text('Tie')
        playerPoints1 = 0
        playerPoints2 = 0
      } else if (playerChoice2 === 'rock') {
        $('p').text('Player 2 wins')
        playerPoints1 = 0
        playerPoints2 = 1
      } else {
        $('p').text('Player 1 wins')
        playerPoints1 = 1
        playerPoints2 = 0
      }
    }
    console.log(playerPoints1)
    console.log(playerPoints2)

    var addScores = function(playerPoints1, playerPoints2) {
      playerArray1.push(playerPoints1)
      playerArray2.push(playerPoints2)
    }
    addScores(playerPoints1, playerPoints2)

    console.log(playerArray1)
    console.log(playerArray2)

    console.log(playerScore1)
    console.log(playerScore2)

    var sumScore = function(array1, array2) {
      for (var i = playerArray1.length -1; i<playerArray1.length; i++) {
        var win1 = playerArray1[i]
        var win2 = playerArray2[i]
        playerScore1 = playerScore1 + win1
        playerScore2 = playerScore2 + win2
      }
    }

    sumScore()

    console.log(playerScore1)
    console.log(playerScore2)

    $('#playerScores1').each(function() {
      $(this).html(playerScore1)
    })
    $('#playerScores2').each(function() {
      $(this).html(playerScore2)
    })
  })
  $('#reset').click( function() {
    $('h3, p').text('')
    $('#playerScores').html('0')
    playerScore1 = 0
    playerScore2 = 0
    $('#playerScores1').html(playerScore1)
    $('#playerScores2').html(playerScore2)
  })
})
