// Simple XMLHttpRequest usage and JSON parsing

var blob = "";
function saveData() {
	blob = this.responseTest;
}


var xhr = new XMLHttpRequest();
xhr.addEventListener("load", saveData);
xhr.open("GET", "data.json");
xhr.send();

function parse() {
	console.log(blob);	
}
console.log(blob);

/*
for each id in blob
	add message and username to messages innerHTML
*/