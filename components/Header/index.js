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

function Header() {

const header = document.createElement('header');
const date = document.createElement('date');
const title = document.createElement('h1');
const span = document.createElement('temp');

header.classList.add('header');
date.classList.add('span', 'date');
span.classList.add('span', 'temp');

date.textContent = 'SMARCH 28, 2019'
title.textContent = 'Lambda Times'
span.textContent = '98°'

header.appendChild(title);
span.appendChild(date);
title.appendChild(span);

return header;  
    
};

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());