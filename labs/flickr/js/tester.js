let results;
const serverURL = 'https://api-helpers.herokuapp.com/flickr-proxy-simple/';

const getPhotos = () => {
    // this function pulls down data from a server
    // everytime it is invoked. Change the value of
    // the tag to get different data:
    fetch(serverURL + '?tags=dogs')
        .then(response => response.json())
        .then(doSomethingWithTheData);
};

const doSomethingWithTheData = (response) => {
    // this function executes once the data has been 
    // pulled down from the server:
    results = response;
    console.log('The Flickr data is stored in a variable called "results":', results);
    for (item of results){
        const temp = `<img src="${item.img_url}" alt="${item.title}">`;
        document.querySelector('#gallery').innerHTML += temp;
    }

};

// invoke the function when the page initializes:
getPhotos();