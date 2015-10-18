// Simple XMLHttpRequest usage and JSON parsing

var blob = "";
function saveData() {
	blob = this.responseTest;
}

function parse() {
	var xhr = new XMLHttpRequest();
	xhr.addEventListener("load", saveData);
	xhr.open("GET", "data.json");
	xhr.send();
	console.log(blob);	
}

/*
for each id in blob
	add message and username to messages innerHTML
*/