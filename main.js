 
 /*vars*/
 const deirinButton = document.getElementById("deirinButton");
 const deirinText = document.getElementById("deirinText");
 const deirinUnderlay = document.getElementById("deirinUnderlay");

 /*events*/
 deirinButton.addEventListener("mouseenter");
 deirinButton.addEventListener("mouseleave", DeirinMouseEnter);
 deirinButton.addEventListener("mousedown", aOverlay_Down);

 function test(){
    anime({
        targets: '.titleText',
        translateX: -35,
        translateY: 50,
        diration: 1000,
        easing: 'easeOut'
     });
 }