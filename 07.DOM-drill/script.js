const ul = document.querySelector('ul');

const clickedOnItem = (e) => {
    if(e.target.textContent == "Fast and Furious") {
        alert(`The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family`);
    } else alert(`${e.target.textContent}`);
}
const deleteDuplicates = () => {
    for (item of ul.children) {
        for (check of ul.children) {
            if (item.isEqualNode(check) && item !== check) {
                check.remove();
            }
        }
    }
}
const shuffleEm = (ulChildren) => {
    for (let i = ulChildren.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        ul.insertBefore(ulChildren[i], ulChildren[j]); 
    }
    makeFamilyFirst(document.querySelector('.important'));
}
const makeFamilyFirst = (li) => {
    while (li !== ul.children[0]) {
        ul.insertBefore(li, li.previousSibling.previousSibling);
    }
}
const cloneFamily = () => {
    let clone = document.querySelector('.important').cloneNode([true]);
    ul.insertBefore(clone, ul.children[0]);
}

for(item of ul.childNodes) {
    if (item.nodeType == 1) {
        if (item.textContent == "Fast and Furious") {
            item.classList.add('important');
            makeFamilyFirst(item);
        }
        item.addEventListener('click', (e) => {
            clickedOnItem(e);
        });
    }
}
deleteDuplicates();

const body = document.querySelector('body');

body.addEventListener('keyup', (e) => {
    if (e.key == 'r') shuffleEm(ul.children);
    if(e.key == 'd') cloneFamily();
});

const newDiv = document.createElement('div');
body.insertBefore(newDiv, ul);
const newSelect = document.createElement('select');
newDiv.append(newSelect);
const newOption1 = document.createElement('option');
const newOption2 = document.createElement('option');
newOption1.value = "important franchises";
newOption1.textContent = "important franchises";
newOption2.value = "normal franchises";
newOption2.textContent = "normal franchises";
newSelect.append(newOption2);
newSelect.append(newOption1);

const hideUnimportant = () => {
    for(li of ul.children) {
        if (!li.classList.contains('important')) li.style.display = "none";
    }
}
const showUnimportant = () => {
    for(li of ul.children) {
        li.style.display = "list-item";
    }
}

newSelect.addEventListener('change', () => {
    if (newSelect.value === "important franchises") hideUnimportant();
    else showUnimportant();
});