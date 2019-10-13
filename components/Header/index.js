// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(headOne) {

const header = document.createElement('header');
const date = document.createElement('date');
const title = document.createElement('h1');
const span = document.createElement('span');

header.classList.add('header');
date.classList.add('date');
title.classList.add('title');
span.classList.add('temp');

headOne.forEach( (item) => {

    const newItem = document.createElement('div');
    newItem.textContent = item;
    div.appendChild(item);
})

header.appendChild(date);
date.appendChild(title);
title.appendChild(span);

return header;  
    
};

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header(headOne));