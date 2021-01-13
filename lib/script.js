console.log("We're live!");

let inputElement = document.querySelector('#input');
let letterEl = document.querySelectorAll('.letter');

inputElement.addEventListener('keydown', keyDownHandler);
inputElement.addEventListener('keyup', keyUpHandler);


function keyDownHandler(e) {
    let keyPressed = e.code;
    let j = 0;
    
    for (let i=0; i<letterEl.length; i++) {
        if (keyPressed === ("Key" + letterEl[i].dataset.letter.toUpperCase())) {
            letterEl[i].classList.add('active');
        } 
    }

    for (j=0; j<letterEl.length; j++) {
        if (keyPressed === "Slash" && letterEl[j].dataset.letter==='/') {
            letterEl[j].classList.add('active');            
        }
    }

    for (j=0; j<letterEl.length; j++) {
        if (keyPressed === "Period" && letterEl[j].dataset.letter==='.') {
            letterEl[j].classList.add('active');            
        }
    }

    for (j=0; j<letterEl.length; j++) {
        if (keyPressed === "Comma" && letterEl[j].dataset.letter===',') {
            letterEl[j].classList.add('active');            
        }
    }

    for (j=0; j<letterEl.length; j++) {
        if (keyPressed === "Quote" && letterEl[j].dataset.letter==='\'') {
            letterEl[j].classList.add('active');            
        }
    }

    for (j=0; j<letterEl.length; j++) {
        if (keyPressed === "Semicolon" && letterEl[j].dataset.letter===';') {
            letterEl[j].classList.add('active');            
        }
    }
    
    for (j=0; j<letterEl.length; j++) {
        if (keyPressed === "Backslash" && letterEl[j].dataset.letter==='\\') {
            letterEl[j].classList.add('active');            
        }
    }

    for (j=0; j<letterEl.length; j++) {
        if (keyPressed === "BracketRight" && letterEl[j].dataset.letter===']') {
            letterEl[j].classList.add('active');            
        }
    }

    for (j=0; j<letterEl.length; j++) {
        if (keyPressed === "BracketLeft" && letterEl[j].dataset.letter==='[') {
            letterEl[j].classList.add('active');            
        }
    }
}

function keyUpHandler(e) {
    let keyStroke = e.code;
    let j=0;
    
    for (let j=0; j<letterEl.length; j++) {
        if (keyStroke === ("Key" + letterEl[j].dataset.letter.toUpperCase())) {
            letterEl[j].classList.remove('active');
        }
    }

    for (j=0; j<letterEl.length; j++) {
        if (keyStroke === "Slash" && letterEl[j].dataset.letter==='/') {
            letterEl[j].classList.remove('active');            
        }
    }

    for (j=0; j<letterEl.length; j++) {
        if (keyStroke === "Period" && letterEl[j].dataset.letter==='.') {
            letterEl[j].classList.remove('active');            
        }
    }

    for (j=0; j<letterEl.length; j++) {
        if (keyStroke === "Comma" && letterEl[j].dataset.letter===',') {
            letterEl[j].classList.remove('active');            
        }
    }

    for (j=0; j<letterEl.length; j++) {
        if (keyStroke === "Quote" && letterEl[j].dataset.letter==='\'') {
            letterEl[j].classList.remove('active');            
        }
    }

    for (j=0; j<letterEl.length; j++) {
        if (keyStroke === "Semicolon" && letterEl[j].dataset.letter===';') {
            letterEl[j].classList.remove('active');            
        }
    }
    
    for (j=0; j<letterEl.length; j++) {
        if (keyStroke === "Backslash" && letterEl[j].dataset.letter==='\\') {
            letterEl[j].classList.remove('active');            
        }
    }

    for (j=0; j<letterEl.length; j++) {
        if (keyStroke === "BracketRight" && letterEl[j].dataset.letter===']') {
            letterEl[j].classList.remove('active');            
        }
    }

    for (j=0; j<letterEl.length; j++) {
        if (keyStroke === "BracketLeft" && letterEl[j].dataset.letter==='[') {
            letterEl[j].classList.remove('active');            
        }
    }
    
}



