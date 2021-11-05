window.onload = LoadHandler;

function LoadHandler() {
    InitVars();
}

let games_button;
let games_underlay;
let games_grid;
let gamesClicked = false;

let shaders_button;
let shaders_underlay;
let shaders_grid;
let shadersClicked = false;

function InitVars() {
    games_button = document.getElementById("gamesButton");
    games_underlay = games_button.lastElementChild;
    games_grid = document.getElementById("gamesGrid");
    games_button.addEventListener("click", GamesClick);

    shaders_button = document.getElementById("shadersButton");
    shaders_underlay = shaders_button.lastElementChild;
    shaders_grid = document.getElementById("shadersGrid");
    shaders_button.addEventListener("click", ShadersClick);
}

function CategoryClick(underlay, content, selectionStatus) {
    if(selectionStatus == false) {
        
    }
}

function GamesClick() {
    if (gamesClicked == false) {
        games_grid.style.display = "auto";

        aContentShow(games_grid);
        aUnderlayShow(games_underlay);

        gamesClicked = true;
    }
}

function ShadersClick() {
    if (shadersClicked == false) {
        shaders_grid.style.display = "auto";

        aContentShow(shaders_grid);
        aUnderlayShow(shaders_underlay);

        shadersClicked = true;
    }
}

function aUnderlayShow(target) {
    anime({
        targets: target.style,
        opacity: ['0','1'],
        width: '100%',
        duration: 250,
        autoplay: true,
        easing: 'easeOutQuad'
    });
}

function aUnderlayHide(target) {
    anime({
        targets: target.style,
        opacity: ['1','0'],
        width: '0',
        duration: 250,
        autoplay: true,
        easing: 'easeOutQuad'
    });
}

function aContentShow(target) {
    anime({
        targets: target.style,
        opacity: ['0','1'],
        duration: 250,
        autoplay: true,
        easing: 'easeOutQuad'
    });
}

function aContentHide(target) {
    anime({
        targets: target.style,
        opacity: ['1','0'],
        duration: 250,
        autoplay: true,
        easing: 'easeOutQuad'
    });
}