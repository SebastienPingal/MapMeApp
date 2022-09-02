const inputFrom = document.getElementById("inputFrom");
const inputTo = document.getElementById("inputTo");
const buttonGo = document.getElementById("buttonGo");

function logOnEnter(data) {
    if (data.key === "Enter") {
    }
}

function logInput() {
    console.log("Départ : " + inputFrom.value);
    console.log("Arrivée : " + inputTo.value);
}

function sendHttpRequest(method, url) {
    const prom = new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open(method, url);
        req.responseType = "json";
        req.onload = function () {
            resolve(req.response);
        };

        req.send();
    });

    return prom;
}

const origin = "93+avenue+felix+faure+nanterre";
const destination = "la+defense";
const key = "";
const baseUrl = "https://maps.googleapis.com/maps/api/directions/json?";

const urlRequest = `${baseUrl}origin=${origin}&destination=${destination}&key=${key}`;

console.log(sendHttpRequest("get", urlRequest));

inputFrom.addEventListener("keyup", logOnEnter);
inputTo.addEventListener("keyup", logOnEnter);
buttonGo.addEventListener("click", logInput);
