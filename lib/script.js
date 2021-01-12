console.log("We're live!");

let inputElement = document.querySelector('#input');
// console.log(inputElement);
// inputElement.addEventListener('keydown', keyPress);
inputElement.addEventListener('keyup', keyRelease);
/*
function keyPress(e) {
    // console.log(e.code);
}
*/
function keyRelease(e) {
    console.log(e.code === "KeyR");
}