console.log(document.title);
document.title = "Modifying the DOM";
console.log(document.title);
for (item of document.children[0].children[1].children) {
    console.log(item);
}
const rand = (max) => {
    return Math.floor(Math.random() * max +1);
}
document.querySelector("body").style.backgroundColor = `rgb(${rand(225)},${rand(225)},${rand(225)})`;