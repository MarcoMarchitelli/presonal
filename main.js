//vars
{
}

window.onload = LoadHandler;

function LoadHandler() {
    AccordionSetup();
}

//anims
{
    function test() {
        anime.remove('.titleText');
        anime({
            targets: '.titleText',
            translateX: targetXPos,
            translateY: targetYPos,
            diration: 1000,
            eased: 'linear'
        });
    }
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