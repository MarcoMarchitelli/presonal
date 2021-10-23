//vars
let stuffClicked = false;
let stuffButton;
let stuffList;
let gamesButton;
let shadersButton;

//anims
var aTitleBlockUp = anime({
    targets: '#titleBlock',
    marginTop: ['2em', '2em'],
    duration: 500,
    autoplay: false,
    easing: 'easeOutQuad'
});

var aTitleBlockShow = anime ({
    targets: '#titleBlock',
    opacity: '1',
    duration: 500,
    autoplay: false,
    easing: 'easeOutQuad'
});

var aStuffListShow = anime ({
    targets: '#stuffList',
    opacity: '1',
    duration: 500,
    autoplay: false,
    easing: 'easeOutQuad'
});

var aGamesListShow = anime ({
    targets: '#gamesList',
    opacity: '1',
    duration: 500,
    autoplay: false,
    easing: 'easeOutQuad'
});


//code
window.onload = LoadHandler;

function LoadHandler() {
    InitVars();
    AccordionSetup();
    aTitleBlockShow.restart();
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
    stuffButton.addEventListener("click", StuffClick);

    stuffList = document.getElementById("stuffList");

    gamesButton = document.getElementById("gamesButton");
    gamesButton.addEventListener("click", GamesClick);

    shadersButton = document.getElementById("shadersButton");
    shadersButton.addEventListener("click", ShadersClick);
}

function StuffClick() {
    if (stuffClicked == false) {
        aTitleBlockUp.restart();

        stuffList.style.display = 'block';
        aStuffListShow.restart();

        stuffClicked = true;
    }
}

function GamesClick() {
    aGamesListShow.restart();
}

function ShadersClick() {

}