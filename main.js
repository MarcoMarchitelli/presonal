 
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
