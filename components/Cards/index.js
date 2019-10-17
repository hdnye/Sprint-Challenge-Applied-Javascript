// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const cardCont = document.querySelector('.cards-container')


axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then((response) => {
  
  const articles = response.data.articles; /*--Assign const & get obj values from console--*/

  for (let key in articles) {  /*--used for in loop to get obj :values from array --*/
     
      let currentArray = articles[key]; /*-- called for the data keys: to return the value --*/
        
       currentArray.forEach(content => {
        
        return cardCont.appendChild(article(content)); /*-- appendChild to parent container invoking
        f() below passing the forEach cb --*/
 
      });
  }
})
 
  .catch((error) => {
    console.log(error);

});  





function article(info) {

  /*--Create HTML Elements--*/

    const card = document.createElement('card');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgCont = document.createElement('image-container');
    const authImage = document.createElement('img'); 
    const byline = document.createElement('span');

 /*--Append Elements to add to the DOM--*/ 
  
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgCont);
    author.appendChild(byline);
    imgCont.appendChild(authImage);
    
 /*--Create Classes --*/ 

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    authImage.classList.add('img-container');
    byline.classList.add('author');

  /*-- Add values pulled from server to the new elements --*/

    headline.textContent = info.headline;
    authImage.src = info.authorPhoto;
    byline.textContent = info.authorName;
       
          
    return card;
  } 

    
 