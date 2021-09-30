const firstInput = document.querySelector('#firstname');
const displayFirstInput = document.querySelector('#display-firstname');

firstInput.addEventListener('keyup', () => {
    console.log(firstInput.value);
    displayFirstInput.textContent = firstInput.value;
});

// ---

const secondInput = document.querySelector('#age');
const truth = document.querySelector('#a-hard-truth');

secondInput.addEventListener('keyup', () => {
    console.log(secondInput.value);
    if(secondInput.value >= 18) {
        truth.style.visibility = 'visible';
    } else truth.style.visibility = 'hidden';
});

// ---

const firstPWD = document.querySelector('#pwd');
const secondPWD = document.querySelector('#pwd-confirm');

const checkLength = (el) => {
    if (el.value.length >= 6) {
        el.style.backgroundColor = "green";
    } else el.style.backgroundColor = "red";
}
const checkMatch = (a, b) => {
    if (a.value === b.value) {
        b.style.backgroundColor = "green";
    } else b.style.backgroundColor = "red";
}
firstPWD.addEventListener('keyup', () => {
    checkLength(firstPWD);
});

secondPWD.addEventListener('keyup', () => {
    checkLength(secondPWD);
    checkMatch(firstPWD, secondPWD);
})

// ---

const darkModeSelector = document.querySelector('#toggle-darkmode');
const body = document.querySelector('body');
let darkMode = false;

darkModeSelector.addEventListener('change', () => {
    if (!darkMode) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        darkMode = true;
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        darkMode = false;
    }
});