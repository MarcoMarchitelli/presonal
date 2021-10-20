 
 /*vars*/
 const deirinButton = document.getElementById("deirinButton");
 const deirinText = document.getElementById("deirinText");
 const deirinUnderlay = document.getElementById("deirinUnderlay");

 /*events*/
 deirinButton.addEventListener("mouseenter", DeirinMouseEnter);
 deirinButton.addEventListener("mouseleave", DeirinMouseEnter);
 deirinButton.addEventListener("mousedown", aOverlay_Down);
 
 function aOverlay_Down(){
    deirinText.style.position = deirinUnderlay.style.position;
 }

 function animate({timing, draw, duration}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction goes from 0 to 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      // calculate the current animation state
      let progress = timing(timeFraction);
  
      draw(progress); // draw it
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }