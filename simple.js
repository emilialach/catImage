// źródło url 
// zdjęcie wybierane randomowo
// kontener z id, w który wrzucam randomowy image
// button, który będzie miał funkcję wywoływania ten akcji
document.addEventListener("DOMContentLoaded", function () {
    var randomCatButton = document.getElementById("randomCatButton");
    // onclick
    randomCatButton.addEventListener('click', function (params) {
        getCatImage();
    });
    // run the app
    getCatImage();
});

const url = 'http://aws.random.cat/meow';

// const readyImage = document.getElementById("catImage");
function getCatImage() {
    let callback = function (data) {

        var parsedData = JSON.parse(data);
        var readyImage = document.getElementById("catImage");
        readyImage.src = parsedData.file;

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

