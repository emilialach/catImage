
document.addEventListener("DOMContentLoaded", function () {
    var randomDoggoButton = document.getElementById("randomDoggoButton");
    // onclick
    randomDoggoButton.addEventListener('click', function (params) {
        getDoggoImage();
    });
    // run the app
    getDoggoImage();
});

const url = 'https://dog.ceo/api/breeds/image/random';

// const readyImage = document.getElementById("doggoImage");
function getDoggoImage() {
    let callback = function (data) {

        var parsedData = JSON.parse(data);
        var readyImage = document.getElementById('doggoImage');
        readyImage.src = parsedData.message;

    };
    httpGetAsync(url, callback);
};

// GET Async
function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

