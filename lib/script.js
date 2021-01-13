console.log("We're live!");

let inputElement = document.querySelector('#input');
let letterEl = document.querySelectorAll('.letter');

inputElement.addEventListener('keydown', keyDownHandler);
inputElement.addEventListener('keyup', keyUpHandler);

function keyDownHandler(e) {
    let keyPressed = e.code;
    // console.log(keyPressed);
    for (let i=0; i<letterEl.length; i++) {
        if (keyPressed === ("Key" + letterEl[i].dataset.letter.toUpperCase())) {
            letterEl[i].classList.add('active');
        }
    }

}

function keyUpHandler(e) {
    let keyStroke = e.code;
    
    for (let j=0; j<letterEl.length; j++) {
        if (keyStroke === ("Key" + letterEl[j].dataset.letter.toUpperCase())) {
            letterEl[j].classList.remove('active');
        }
    }

}


/*
console.log(testEl);
console.log(testEl[20].dataset['letter']);
letterEl[20].classList.add('active')
setTimeout(() => {console.log('hello, world'); }, 1000);
letterEl[20].classList.remove('active')
*/