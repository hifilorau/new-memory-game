app.setTimer = function () {

  var counter1 = 100000;
   counterFunc1();

   function counterFunc1() {
       $('.seconds').text(counter1);
       counter1--;
       var livesLeft = $(".lives-remaining").text();
       var livesLeftArr = livesLeft.split("");
       if (counter1 > 0 && livesLeftArr.length > 0){
          setTimeout(counterFunc1, 5);
       } else {
           console.log('donkeys fly');
          //  app.gameOver();
       }
   }

};
