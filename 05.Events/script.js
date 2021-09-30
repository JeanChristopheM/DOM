const _initTime = Date.now()
let squareContainer = document.querySelector('.displayedsquare-wrapper');
let ul = document.querySelector('ul');
let body = document.querySelector('body');

function getElapsedTime(){
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e){
  // Creating a new div with 2 classes. displayedsquare AND the color from the block the user clicked on
  let newDiv = document.createElement('div');
  newDiv.classList.add('displayedsquare');
  newDiv.classList.add(e.target.classList[1]);
  squareContainer.append(newDiv);
  // Creating the li with the log
  let newLi = document.createElement('li');
  newLi.textContent = `[${getElapsedTime()}] Created a ${e.target.classList[1]} square`;
  ul.append(newLi);
}

const actionsquares = document.querySelectorAll('.actionsquare');
for(let actionsquare of actionsquares){
  actionsquare.addEventListener('click', clickOnSquare);
}

const rand = (max) => {
  return Math.floor(Math.random() * max +1);
}

const changeBG = () => {
  let newColor = `rgb(${rand(225)}, ${rand(225)}, ${rand(225)})`;
  body.style.backgroundColor = newColor;
  let newLi = document.createElement('li');
  newLi.textContent = `[${getElapsedTime()}] Changed the bg color to ${newColor}`;
  ul.append(newLi);
}

const deleteLog = () => {
  let allTheLi = document.querySelectorAll('li');
  for (item of allTheLi) item.remove();
}

const deleteSquares = () => {
  let allTheDivs = document.querySelectorAll('.displayedsquare');
  for (item of allTheDivs) item.remove();
}

const pressedAKey = (e) => {
  switch (e.key) {
    case " ": //spacebar
      changeBG();
      break;
    case "l": //letter L
      deleteLog();
      break;
    case "s": //letter S
      deleteSquares();
  }
}

body.addEventListener('keypress', pressedAKey);

document.addEventListener('click', (e) => {
  if (e.target.classList[0] == "displayedsquare") alert(e.target.classList[1]);
});