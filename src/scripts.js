// Set variable for the http handler
var request = new XMLHttpRequest();

// ===============================================
// Variables for updating page & year in the query
// ===============================================
var pageNum = 1;
var year = 1990;

// =======================================
// Initialize variable for timed API calls
// =======================================
var Id = 0;

// ======================================================
// Web URLs for each article will be stored in this array
// ======================================================
var webURLs = [];

// =================
// Make the API call
// =================
function makeRequest() {
  request.open('GET', `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=cycling&page=${pageNum}&fq=pub_year:("${year}")&api-key=G0xUOLbiRaC4QtEyLoLPuIqgUP0AKMrj`, true);

// ==========================
// Parse the response payload
// ==========================
  request.onload = function() {
    // console.log(this.response);
    var data = JSON.parse(this.response);
    var docs = data.response.docs;
    var offset = data.response.meta.offset;

// ===========================================
// Add each web_url value to the webURLs array
// ===========================================
    for( i = 0; i < docs.length; i++) {
    webURLs.push(docs[i].web_url);
    }
    console.log(`The offset is ${offset}`);
    // Increment the page number for the next API call
    pageNum++;
  }
  // Send the http request
  request.send();
}

// =========================================================
// Functions to start/stop the API call through the browswer
// =========================================================
function getArticles()
{
  Id = window.setInterval( function() { makeRequest(); }, 5000);
}

function stop()
{
  window.clearInterval(Id);
}