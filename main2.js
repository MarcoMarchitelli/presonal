window.onload = LoadHandler;

function LoadHandler() {
    InitVars();
}

let games_button;
let games_underlay;
let games_grid;
let gamesClicked = { value: false };

let shaders_button;
let shaders_underlay;
let shaders_grid;
let shadersClicked = { value: false };

let tools_button;
let tools_underlay;
let tools_grid;
let toolsClicked = { value: false };

let about_button;
let about_underlay;
let about_grid;
let aboutClicked = { value: false };

let gamesGroup;
let shadersGroup;
let toolsGroup;
let aboutGroup;
let lastSelectedGroup;

class contentGroup {
    constructor(button, underlay, content) {
        this.button = button;
        this.underlay = underlay;
        this.content = content;
        this.selectionStatus = { value: false };
    }
}

function InitVars() {
    Init();
}

function Init() {
    let videos = document.getElementsByClassName("mp4");
    for (let i = 0; i < videos.length; i++) {
        let element = videos[i];
        element.addEventListener("mouseenter", _ => {element.play();});
        element.addEventListener("mouseout", _ => {element.pause(); element.currentTime = "0";});
    }

    lastSelectedGroup = null;

    let button = document.getElementById("gamesButton");

    gamesGroup = new contentGroup(
        button,
        button.lastElementChild,
        document.getElementById("gamesGrid"),
    );
    button.addEventListener(
        "click",
        _ => GroupClick(gamesGroup)
    );

    button = document.getElementById("shadersButton");
    shadersGroup = new contentGroup(
        button,
        button.lastElementChild,
        document.getElementById("shadersGrid"),
    );
    button.addEventListener(
        "click",
        _ => GroupClick(shadersGroup)
    );

    button = document.getElementById("toolsButton");
    toolsGroup = new contentGroup(
        button,
        button.lastElementChild,
        document.getElementById("toolsGrid"),
    );
    button.addEventListener(
        "click",
        _ => GroupClick(toolsGroup)
    );

    button = document.getElementById("aboutButton");
    aboutGroup = new contentGroup(
        button,
        button.lastElementChild,
        document.getElementById("aboutGrid"),
    );
    button.addEventListener(
        "click",
        _ => GroupClick(aboutGroup)
    );

    InstantSelect(gamesGroup);
}

function GroupClick(contentGroup) {
    if (lastSelectedGroup != null) {
        DeselectLast(_ => Select(contentGroup));
    } else {
        Select(contentGroup);
    }
}

function DeselectLast( callback ) {
    aContentHide(lastSelectedGroup.content, response);
    aUnderlayHide(lastSelectedGroup.underlay);

    //attiva button
    lastSelectedGroup.button.style.pointerEvents = "auto";

    lastSelectedGroup.selectionStatus.value = false;

    function response() {
        lastSelectedGroup.content.style.display = "none";
        callback();
    }
}

function Select(contentGroup) {
    contentGroup.content.style.display = "block";
    //console.log("-"+content.id+"- display: -" + content.style.display+"-");

    aContentShow(contentGroup.content);
    aUnderlayShow(contentGroup.underlay);

    //disattiva button
    contentGroup.button.style.pointerEvents = "none";

    contentGroup.selectionStatus.value = true;

    lastSelectedGroup = contentGroup;
}

function InstantSelect(contentGroup) {
    contentGroup.content.style.display = "block";
    //console.log("-"+content.id+"- display: -" + content.style.display+"-");

    contentGroup.content.style.opacity = "1";
    contentGroup.underlay.style.opacity = "1";
    contentGroup.underlay.style.width = "100%";

    //disattiva button
    contentGroup.button.style.pointerEvents = "none";

    contentGroup.selectionStatus.value = true;

    lastSelectedGroup = contentGroup;
}

function aUnderlayShow(target) {
    anime({
        targets: target.style,
        width: '100%',
        duration: 200,
        autoplay: true,
        easing: 'easeOutQuad'
    });
}

function aUnderlayHide(target) {
    anime({
        targets: target.style,
        width: '0',
        duration: 100,
        autoplay: true,
        easing: 'easeOutQuad'
    });
}

function aContentShow(target) {
    anime({
        targets: target.style,
        opacity: ['0', '1'],
        duration: 200,
        autoplay: true,
        easing: 'easeInQuad'
    });
}

function aContentHide(target, callback) {
    anime({
        targets: target.style,
        opacity: ['1', '0'],
        duration: 200,
        autoplay: true,
        easing: 'easeOutQuad',
        complete: callback
    });
}