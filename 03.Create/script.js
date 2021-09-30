const article = document.querySelector('article');
const learners = ["Antoine Ghysens", "Aurore Remy", "Baptiste Geron", "Batsheba Deepijan", "Bruno Presti", "Fabrice Castrogiovanni", "Fanny Fraiture", "Francis François", "Frederic Van Overmeire", "JC Molhant", "Maxim K.", "Michael Tesfay", "Philippe Meulemans", "Raoni Gillet", "René", "Rouslan Boyko", "Stephane Genet", "Thomas Backers", "Tiffany Dessouroux"];

const rand = (max) => {
    return Math.floor(Math.random() * max +1);
}
const colorPicker = () => {
    let red = rand(225);
    let green = rand(225);
    let blue = rand(225);
    let brightness  =  Math.sqrt((.299 * red * red) + (.587 * green * green) + (.114 * blue * blue));
    return {"color": `rgb(${red}, ${green}, ${blue})`, "brightness": brightness}
}

const addNewArticle = (learner) => {
    let newSection = document.createElement('section');
    let newP = document.createElement('p');
    let newText = document.createTextNode(learner);
    newP.appendChild(newText);
    newSection.appendChild(newP);
    let colorChoice = colorPicker();
    newSection.style.backgroundColor = colorChoice.color;
    newSection.style.color = colorChoice.brightness > 140 ? "black" : "white";
    article.appendChild(newSection);
}

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


shuffleArray(learners);

for(i=0;i<learners.length;i++) {
    addNewArticle(learners[i]);
}