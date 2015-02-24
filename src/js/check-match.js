app.checkMatch = function(){
  var firstCard;
  var matchCard;
  var first;
  var second;
  var matchCount = 0;


  $('.game-card').on('click', function (e) {
    $('.game-board').removeClass('tossing');
    var currentTile = $(this);
    if (firstCard === undefined) {
      firstTile = currentTile;
      firstCard = $(this).data('id');
      first = $(this).children();
      $(first).show();
    }

   else if (firstTile[0] === currentTile[0]){

   }

    else if (firstCard !== undefined) {
      matchCard = $(this).data('id');
      second = $(this).children();
      $(second).show();


      if (firstCard === matchCard) {
        firstCard =  undefined;
        matchCard = undefined;
        matchCount++;

         if (matchCount === 9) {
           alert("This should be a win screen");
           app.winScreen();
           return matchCount;
         }
      }

      else if (firstCard !== matchCard) {
         $('.game-board').toggleClass('tossing');
         $(first).delay(200).fadeOut();
         $(second).delay(200).fadeOut();
         app.decrementLives();
         firstCard =  undefined;
         matchCard = undefined;
       }
     }
  });
};
