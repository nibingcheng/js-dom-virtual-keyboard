console.log("We're live!");

let inputElement = document.querySelector('#input');

inputElement.addEventListener('keydown', keyDownHandler);
inputElement.addEventListener('keyup', keyUpHandler);

function keyDownHandler(e) {
    console.log(e.code === 'KeyO');
}

function keyUpHandler(e) {
    console.log(e.code === "KeyR");
}

let testEl = document.querySelectorAll('.letter');
console.log(testEl);
console.log(testEl[20].dataset['letter']);
testEl[20].classList.add('active')
setTimeout(() => {console.log('hello, world');
    
}, 5000);
// testEl[20].classList.remove('active')