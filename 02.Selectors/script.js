let importantItems = document.querySelectorAll('.important');
for (item of importantItems) {
    item.title = "This is an important item";
}

let images = document.querySelectorAll('img');
for (item of images) {
    if(!item.classList.contains('important')) {
        item.style.display = "none";
    }
}


const rand = (max) => {
    return Math.floor(Math.random() * max +1);
}

let ps = document.querySelectorAll('p');
for (item of ps) {
    if (item.classList.length > 0) {
        console.log(`P : \nclassList = ${item.classList}\ntextContent = ${item.textContent}`);
    }
    else {
        console.log(`P : \ntextContent = ${item.textContent}`);
        item.style.color = `rgb(${rand(225)},${rand(225)},${rand(225)})`;
    }
}