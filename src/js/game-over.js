// app.router.add('lose', gameOver);

app.gameOver = function () {
  var loseTemplate = _.template($('#lose-screen').html(), { variable: 'm' });
  var loseHtml = loseTemplate({});
  $('.main-content').html(loseHtml);

    setInterval(function(){blink();}, 1000);
      function blink() {
        $(startNewButton).fadeTo(100, 0.1).fadeTo(200, 1.0);
    }

    $('.play-again').on('click', function (){
      app.createGameTemplate(9);
    });
};
