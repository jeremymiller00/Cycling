
//create a request variable for the connection
var request = new XMLHttpRequest();

//Open a new connection, using the GET request method
request.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=cycling&fq=pub_year:("1998")&api-key=G0xUOLbiRaC4QtEyLoLPuIqgUP0AKMrj', true);

request.onload = function() {

  //Begin accessing JSON data here
  if (request.status >= 200 && request.status < 400) {
    const data = JSON.parse(this.response);
    var docs = data.response.docs;
  
    for(i = 0; i < docs.length; i++) {
      const app = document.getElementById('root');
      
      // Create a container
      const container = document.createElement('div');
      container.setAttribute('class', 'container');
      app.appendChild(container);
      
      // Create a div with a card class
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      
      //Create an h3 and set the text content to 'URL'
      const h3 = document.createElement('h3');
      h3.textContent = `URL`;
      
      //Create a p and set the text content to the URL
      const p = document.createElement('p');
      p.textContent = docs[i].web_url;
      
      //Append cards to the container
      container.appendChild(card);
      
      //Each card will contain an h3 and a p
      card.appendChild(h3);
      card.appendChild(p);
    
    }
  } else {
      console.log('error');
  }
}
request.send();