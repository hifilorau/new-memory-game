app.decrementLives = function () {


  var livesLeft = $(".lives-remaining").text();
  livesLeftArr = livesLeft.split("");
  livesLeftArr.pop();
  var newStr = livesLeftArr.join("");
  $(".lives-remaining").text(newStr);

  if (livesLeftArr.length <= 0) {
    $('.seconds').text('GAME OVER');
    alert("gameover");
  
    // $('.game-tiles').text = undefined;

    // startNewGame();

  }
};
