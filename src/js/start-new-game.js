app.startNewGame = function () {
  var startButton = $('.button-wrap');
  $('.main-content').html("");

  app.createGameTemplate(9);

  $(startButton).on('click', function () {
     app.setTimer();
     var livesLeft = $(".lives-remaining").text('EEEEEEEEE');
     alert("new time?");
     app.createGameTemplate(9);
     app.checkMatch();

  });

////blinking button not game logic.
  setInterval(function(){blink();}, 1000);
    function blink() {
        $(startButton).fadeTo(100, 0.1).fadeTo(200, 1.0);
    }


};
