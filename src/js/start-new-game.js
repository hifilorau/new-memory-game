app.startNewGame = function () {
  var startButton = $('.button-wrap');
  $('.main-content').html("");

  app.createGameTemplate(9);

  $(startButton).on('click', function () {
     app.setTimer();
     var livesLeft = $(".lives-remaining").text('EEEEEEEEE');
     app.createGameTemplate(9);
     $('html, body').animate({
         scrollTop: $(".game-board").offset().top
     }, 2000);
     app.checkMatch();
  });



////blinking button not game logic.
  setInterval(function(){blink();}, 1000);
    function blink() {
        $(startButton).fadeTo(100, 0.1).fadeTo(200, 1.0);
    }

    var audioElement = document.createElement('audio');
       audioElement.setAttribute('src', 'https://s3-us-west-2.amazonaws.com/new-memory/01+-+Title.mp3');

       //audioElement.load()
       $.get();
       audioElement.addEventListener("load", function() {
       audioElement.play();
       }, true);




       $('.play').click(function() {
       audioElement.play();
       });


       $('.pause').click(function() {
       audioElement.pause();
       });



};
