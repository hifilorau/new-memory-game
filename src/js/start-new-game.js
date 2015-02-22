app.startNewGame = function () {
  var startButton = $('.start-new-game');

  setInterval(function(){blink()}, 1000);
    function blink() {
        $(startButton).fadeTo(100, 0.1).fadeTo(200, 1.0);
    }

  $(startButton).click(function () {
     app.checkMatch();
     app.setTimer();

  });

};
