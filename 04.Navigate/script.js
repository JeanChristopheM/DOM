let ol = document.querySelector('ol');
let lis = document.querySelector('ol').children;

let lastLi = lis[lis.length-1];
ol.insertBefore(lastLi, lis[0]);

// ---

let h2s = document.querySelectorAll('h2');

const swap = (node1, node2) => {
    let temp = document.createElement('h5');
    node1.parentElement.prepend(temp);
    node2.parentElement.prepend(node1);
    temp.parentElement.prepend(node2);
    temp.remove();
}
swap(h2s[1], h2s[2]);

// --- 

let sections = document.querySelectorAll('section');
sections[sections.length-1].remove();