//vars
let stuffClicked = false;

let stuffButton;

//anims
var aTitleBlockUp = anime({
    targets: '#titleBlock',
    marginTop: ['18em', '2em'],
    duration: 500,
    autoplay: false,
    easing: 'easeInQuad'
});


//code
window.onload = LoadHandler;

function LoadHandler() {
    InitVars();
    AccordionSetup();
}

function AccordionSetup() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}

function InitVars() {
    stuffButton = document.getElementById("stuffButton");
    stuffButton.addEventListener("click", StuffMouseUp);
}

function StuffMouseUp() {
    if (stuffClicked == false) {
        aTitleBlockUp.restart();
        stuffClicked = true;
    }
}