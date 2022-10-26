require("dotenv").config();

const inputFrom = document.getElementById("inputFrom");
const inputTo = document.getElementById("inputTo");
const buttonGo = document.getElementById("buttonGo");

inputFrom.addEventListener("keyup", logOnEnter);
inputTo.addEventListener("keyup", logOnEnter);
buttonGo.addEventListener("click", logInput);

function logOnEnter(data) {
	if (data.key === "Enter") {
		logInput();
	}
}
async function exportPdf() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "http://localhost:1234/route");

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			console.log(xhr.responseText);
		}
	};
	xhr.send();
}

async function logInput() {
	console.log("Départ : " + inputFrom.value);
	console.log("Arrivée : " + inputTo.value);
	const params = {
		origin: inputFrom.value,
		destination: inputTo.value,
	};
	axios.get("get", "http://localhost:1234/route", params);
}
