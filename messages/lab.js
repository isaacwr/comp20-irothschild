// Simple XMLHttpRequest usage and JSON parsing

var blob = "";
function saveData() {
	blob = JSON.parse(this.responseText);
	alert(blob);
}

function parse() {
	var xhr = new XMLHttpRequest();
	xhr.addEventListener("load", saveData);
	xhr.open("GET", "data.json");
	xhr.send();
	//alert(blob);	
};


for(var key in blob) {
	if (blob.hasOwnProperty(key)) {
    alert(key + " -> " + blob[key]);
  }
}

/*
for each id in blob
	add message and username to messages innerHTML
*/