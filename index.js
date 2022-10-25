/* 
Promises can form a "processing pipeline":
i.e., the return value of a .then callback becomes the argument for the next .then callback
*/

const RON_API_URL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

fetch(RON_API_URL)              // 1. make the initial request
    .then(scoopOutTheJSON)      // 2. get the JSON
    .then(getTheFirstElement)   // 3. get the first array element
    .then(convertToUpperCase)   // 4. uppercase it
    .then(console.log)          // 5. print it out

