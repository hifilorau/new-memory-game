app.decrementLives = function () {


  var livesLeft = $(".lives-remaining").text();
  console.log(livesLeft);
  livesLeftArr = livesLeft.split("");
  livesLeftArr.pop();
  var newStr = livesLeftArr.join("");
  $(".lives-remaining").text(newStr);

  if (livesLeftArr.length === 0) {
    alert("You Suck. O'Doyle Rules!");
    $('.main-content').html("");
    app.createGameTemplate(9);
    $(".lives-remaining").text('EEEEEEEEE');
  

  };

};
