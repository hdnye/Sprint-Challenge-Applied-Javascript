// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics') 

.then((response) => {
  console.log(response.data.topics);

  response.data.topics.forEach((tab) => {
    console.log(tab);
    tabCreator(tab);
  
 });

})

.catch((error) => {
console.log(error);
});

const topics = document.querySelector('.topics');
const tab = document.querySelector('.tab')

function tabCreator(topic) {

    const nextTopic = document.createElement('div');

    nextTopic.classList.add('tab');

    nextTopic.textContent = topic;

    // nextTopic.map( (item) => {
    //     let newTab = tabCreator(item);
      
    //     return newTab;
    //   });

    topics.appendChild(nextTopic);

     return nextTopic;

    }


//console.log(tabCreator(topic));