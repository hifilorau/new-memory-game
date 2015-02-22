app.checkMatch = function(){
  var firstCard;
  var matchCard;
  var first;
  var second;


  $('.game-card').on('click', function () {
    if (firstCard === undefined) {
      firstCard = $(this).data('id');
      first = $(this).children();
      $(first).show();
    }

    else if (firstCard !== undefined) {
      matchCard = $(this).data('id');
      second = $(this).children();
      $(second).show();


      if (firstCard === matchCard) {
        firstCard =  undefined;
        matchCard = undefined;

      }

      else if (firstCard !== matchCard) {
         $(first).delay(200).fadeOut();
         $(second).delay(200).fadeOut();
         app.decrementLives();
         firstCard =  undefined;
         matchCard = undefined;

       }
     }
  });
};
