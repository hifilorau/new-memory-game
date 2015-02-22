app.setTimer = function () {

  var start = 60000;

  setInterval(function() {
      $('.clock').text((start - new Date) / 100);
  }, 500);


};
