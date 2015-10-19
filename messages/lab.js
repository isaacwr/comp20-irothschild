// Simple XMLHttpRequest usage and JSON parsing

var blob = "";
function saveData() {
	blob = this.responseText;
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
	jsn = JSON.parse(text);
	alert(text);
	alert(jsn);
}

a = JSON.parse(blob);
confirm("outisde second for loop");
for (i=0; i < a.length; i++) {
	confirm("in second for loop");
	text = a[0];
	jsn = JSON.parse(text);
	alert(text);
	alert(jsn);
}