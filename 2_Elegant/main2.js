window.onload = LoadHandler;

function LoadHandler() {
    InitVars();
}

let bGames;
let gGames;
let bGamesClicked = false;

function InitVars() {
    bGames = document.getElementById("gamesButton");
    bGames.addEventListener("click", GamesClick);
    gGames = document.getElementById("gamesGrid");
}

function GamesClick() {
    if (bGamesClicked == false) {
        gGames.style.display = "auto";
        aGamesGridShow.restart();
        bGamesClicked = true;
    }
}

let aGamesGridShow = anime({
    targets: '#gamesGrid',
    opacity: '1',
    duration: 500,
    autoplay: false,
    easing: 'easeOutQuad'
});

let aGamesGridHide = anime({
    targets: '#gamesGrid',
    opacity: '0',
    duration: 500,
    autoplay: false,
    easing: 'easeOutQuad'
});