// Simple XMLHttpRequest usage and JSON parsing

var blob = "";
function saveData() {
	blob = JSON.parse(this.responseText);
}

function parse() {
	var xhr = new XMLHttpRequest();
	xhr.addEventListener("load", saveData);
	xhr.open("GET", "data.json");
	xhr.send();
};

for (i=0; i < blob.length; i++) {
	text = blob[i];
	message = "<p>"+text["id"]+text["content"]+"<span id='author'>"+text["username"]+"</span></p>";
	document.getElementById("messages").innerHTML += message;
}
