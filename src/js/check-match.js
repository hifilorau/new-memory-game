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


// $('.game-card').on('click', function (e)  {
//     e.preventDefault();
//     var thisCard = $(this);
//     console.log(thisCard)
//     secondCard = thisCard.find('.game-card').data('id');
//     console.log("Hello, am I still alive?");
//     console.log(SecondCard);
//     return secondCard;
//
//   });
//   console.log(firstCard);
//   console.log(secondCard);
//   if (firstCard = secondCard) {
//     alert("HALLELUJIAHH BASBY WE GOIN TO BEACH WEEEEEKS!");
//   }
//
//   else {
//     alert("sorry i don't play that way!");
//   }
//   return firstCard;


// };
