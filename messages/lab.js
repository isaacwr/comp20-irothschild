// Simple XMLHttpRequest usage and JSON parsing

var blob = "";
function saveData() {
	blob = this.responseText;
	alert(blob);
}

function parse() {
	var xhr = new XMLHttpRequest();
	xhr.addEventListener("load", saveData);
	xhr.open("GET", "data.json");
	xhr.send();
};

confirm("outside for loop");
for (i=0; i < blob.length; i++) {
	confirm("in for loop");
	text = blob[0];
	confirm(text);
}