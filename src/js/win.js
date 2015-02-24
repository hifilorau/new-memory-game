// app.router.add('win', winScreen);


app.winScreen = function () {
    alert("why am i here");
    var winTemplate = _.template($('#win-screen').html(), { variable: 'm' });
    var html = winTemplate({});
    $('.main-content').html(html);
    // $('textarea').focus();
    var startNewButton = $('.play-again');

    setInterval(function(){blink();}, 1000);
      function blink() {
          $(startNewButton).fadeTo(100, 0.1).fadeTo(200, 1.0);
      }

    $('.play-again').on('click', function (){
      app.createGameTemplate(9);
    });
  }
