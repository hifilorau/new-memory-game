function processHash() {
   var hash = location.hash || '#';

   if (!app.router.run(hash.slice(1)))  {
     app.pageNotFound();
   }
 }

 window.addEventListener('hashchange', processHash);
 processHash();





// app.createGameTemplate(9);
// app.startNewGame();
