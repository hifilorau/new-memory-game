app.setTimer = function () {

  var counter1 = 100000;
   function counterFunc1() {

       $('.seconds').text(counter1);
       counter1--;
       if (counter1 > 0) {
           setTimeout(counterFunc1, 5);
       } else {
           $('.clock').text('You Dead');
          return false;
       }
   }
   counterFunc1();
};
