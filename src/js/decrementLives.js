app.decrementLives = function () {


  var livesLeft = $(".lives-remaining").text();
  livesLeftArr = livesLeft.split("");
  livesLeftArr.pop();
  var newStr = livesLeftArr.join("");
  $(".lives-remaining").text(newStr);

  if (livesLeftArr.length === 0) {
    $('.clock').text('GAME OVER');

    startNewGame();

  }
};
