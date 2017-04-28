$(document).ready( function() {
  //grab the player 1's selection
  var playerChoice1 = null;
  var playerChoice2 = Math.random()
  var $rock = $('#rock')
  var $paper = $('#paper')
  var $scissors = $('#scissors')

    if(playerChoice2 < .33) {
      playerChoice2 == 'rock'
    } else if (playerChoice2 < .6666) {
      playerChoice2 =='paper'
    } else {
      playerChoice2 == 'scissors'
    };

    $('#rock').click( function{
      playerChoice1.val('rock')
      console.log(playerChoice1)
    })

})
