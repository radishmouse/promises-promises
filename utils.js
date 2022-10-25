
function scoopOutTheJSON(response) {
    console.log(`
Step 1: I'm "scooping the JSON" out once all the data comes in.
I expect to receive a network response object.
I return the JSON it contains.
    `);

    console.log("Here is the response object");
    console.log(response);

    return response.json();
}

function getTheFirstElement(theJSON) {
    console.log(`
Step 2: I realized that the JSON data happens to be an array.
I expect to receive that array.
I return the first ("zero-th") element.
    `);

    console.log("Here is the array");
    console.log(theJSON);

    return theJSON[0];
}

function convertToUpperCase(someText) {
    console.log(`
Step 3: I want it to sound like I'm shouting...
I expect to receive some text.
I return the uppercase version of it
    `);

    console.log("Here is the text")
    console.log(someText);

    return someText.toUpperCase();
}



