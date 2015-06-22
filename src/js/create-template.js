
app.router.add('', function () {
  app.createGameTemplate(9);
// app.router.add('win', winScreen);
// app.router.add('lose', gameOver);
});

app.createGameTemplate = function (numPairs) {
  var template = _.template($('#gameBoard').html(), { variable: 'm' });
  var html = template({
    cards: app.gameDeck(numPairs)
  });
  // $('.main-content').html("");
  $('.main-content').html(html);
  $('.game-icon').hide();


      var startButton = $('.button-wrap');
      // app.createGameTemplate(9);
      $('.seconds').text('100000');

      $(startButton).on('click', function () {
         var livesLeft = $('.lives-remaining').text('EEEEEEEEE');
         app.setTimer();
         $('.game-icon').hide();


         $('html, body').animate({
             scrollTop: $('.game-board-container').offset().top
         }, 2000);

        //  app.createGameTemplate(9);
         app.checkMatch();
      });


  ////blinking button not game logic.
    setInterval(function(){blink();}, 1000);
      function blink() {
          $(startButton).fadeTo(100, 0.1).fadeTo(200, 1.0);
      }

  // audio playback & pause begin here

      var audioElement = document.createElement('audio');

      audioElement.setAttribute('src', 'https://s3-us-west-2.amazonaws.com/new-memory/01+-+Title.mp3');
      $.get();
      audioElement.addEventListener("load", function() {
      audioElement.play();
      }, true);
	    $('.mute').hide();

         $('.unmute').on('click',function() {
           var play=$(this);
          //  $('.pause').toggle('show-audio');
           audioElement.play();
					 play.hide();
					 $('.mute').show();
//           $(play).hide('.pause');
					
         });


         $('.mute').on('click', function() {
           var pause = $(this);
           audioElement.pause();
					 pause.hide();
           $('.unmute').show();
//           $(pause).toggle('hide-audio');
         });
  };

// };
