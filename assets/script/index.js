'use strict';

/*
    JavaScript Basics
    Inderjeet Cheema

    Basic calculation
*/
// Add event listener
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}
function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}
const startBtn = select('.start');
const jumpBtn = select('.jump');
const mario = select('.mario');


const start = new Audio('./assets/audio/start.wav');
start.type = 'audio/mp3';

const jump = new Audio('./assets/audio/jump.wav');
jump.type = 'audio/mp3';

onEvent('click' , startBtn,  function () {
    start.play();
    mario.style.visibility = 'visible';
})

onEvent('click' , jumpBtn,  function () {
    mario.classList.add('new');
    setTimeout(() => {mario.classList.remove('new')}, 800);
    jump.play();
})








