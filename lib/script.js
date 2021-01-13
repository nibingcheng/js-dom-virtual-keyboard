console.log("We're live!");

let inputElement = document.querySelector('#input');
let letterEl = document.querySelectorAll('.letter');

inputElement.addEventListener('keydown', keyDownHandler);
inputElement.addEventListener('keyup', keyUpHandler);


function keyDownHandler(e) {
    let keyPressed = e.code;
    console.log(keyPressed);
    for (let i=0; i<letterEl.length; i++) {
        if (keyPressed === ("Key" + letterEl[i].dataset.letter.toUpperCase())) {
            letterEl[i].classList.add('active');
        } 
    }

        if (keyPressed === "Slash") {
            letterEl[33].classList.add('active');
        }
        if (keyPressed === "Period") {
            letterEl[32].classList.add('active');
        }
        if (keyPressed === "Comma") {
            letterEl[31].classList.add('active');
        }
        if (keyPressed === "Quote") {
            letterEl[23].classList.add('active');
        }
        if (keyPressed === "Semicolon") {
            letterEl[22].classList.add('active');
        }
        if (keyPressed === "Backslash") {
            letterEl[12].classList.add('active');
        }
        if (keyPressed === "BracketRight") {
            letterEl[11].classList.add('active');
        }
        if (keyPressed === "BracketLeft") {
            letterEl[10].classList.add('active');
        }
    

}

function keyUpHandler(e) {
    let keyStroke = e.code;
    
    for (let j=0; j<letterEl.length; j++) {
        if (keyStroke === ("Key" + letterEl[j].dataset.letter.toUpperCase())) {
            letterEl[j].classList.remove('active');
        }
    }

        if (keyStroke === "Slash") {
            letterEl[33].classList.remove('active');
        }
        if (keyStroke === "Period") {
            letterEl[32].classList.remove('active');
        }
        if (keyStroke === "Comma") {
            letterEl[31].classList.remove('active');
        }
        if (keyStroke === "Quote") {
            letterEl[23].classList.remove('active');
        }
        if (keyStroke === "Semicolon") {
            letterEl[22].classList.remove('active');
        }
        if (keyStroke === "Backslash") {
            letterEl[12].classList.remove('active');
        }
        if (keyStroke === "BracketLeft") {
            letterEl[10].classList.remove('active');
        }
        if (keyStroke === "BracketRight") {
            letterEl[11].classList.remove('active');
        }
    

}



