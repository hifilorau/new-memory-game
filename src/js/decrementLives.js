app.decrementLives = function () {


  var livesLeft = $('.lives-remaining').text();
  livesLeftArr = livesLeft.split('');
  livesLeftArr.pop();
  var newStr = livesLeftArr.join('');
  $('.lives-remaining').text(newStr);
    // alert(livesLeftArr.length);

    if (livesLeftArr.length <= 0) {
      $('.seconds').text('GAME OVER');
      app.gameOver();
    }

  return livesLeftArr.length;
};
