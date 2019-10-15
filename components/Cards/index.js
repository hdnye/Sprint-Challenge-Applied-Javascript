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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then((response) => {
  console.log(response);

  const art = response.data.articles;
  console.log(Object.keys(art));

  let articles;

  for (let key in articles) {
    const currentArray = articles[key];
    currentArray.forEach(card => {
      cardCreator(card);
      console.log(currentArray);
    })
  }
 
//     response.data.articles.bootstrap.map( (card) => {    
//         cardCont.appendChild(article(card));

//   })
//     response.data.articles.javascript.map( (card) => {    
//     cardCont.appendChild(article(card));

// })
//     response.data.articles.jquery.map( (card) => {    
//     cardCont.appendChild(article(card));


// })
//     response.data.articles.node.map( (card) => {    
//     cardCont.appendChild(article(card));

// })

//     response.data.articles.technology.map( (card) => {    
//     cardCont.appendChild(article(card));

// })
  })

.catch((error) => {
console.log(error);
});


const cardCont = document.querySelector('.card-container')
const card = document.querySelector('.card')
const headline = document.querySelector('.headline')
const imgCont = document.querySelector('.img-container')
const author = document.querySelector('.author')


function article(info){

    const headline = document.createElement('div');
    const authImage = document.createElement('img'); 
    const byline = document.createElement('span');
   
  
    headline.classList.add('card');
    authImage.classList.add('img-container');
    byline.classList.add('span');
    
       
    headline.appendChild(authImage);
    author.appendChild(byline);
       
     
    return card;
  } 

    
  info.forEach( (data) => {  
      
        cardCont.appendChild(article(data.articles));
        
    })
     

  // console.log(article());
  