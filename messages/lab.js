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


for (var key in blob) {
	if (blob.hasOwnProperty(key)) {
    	alert(key + " -> " + blob[key]);
  }
};