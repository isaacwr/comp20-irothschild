// Simple XMLHttpRequest usage and JSON parsing

var blob = "";
function saveData() {
<<<<<<< HEAD
	blob = this.responseTest;
=======
	blob = JSON.parse(this.responseText);
	for (i=0; i < blob.length; i++) {
		text = blob[i];
		message = "<p>"+text["id"]+". "+ text["content"]+"<span id='author'>    -"+text["username"]+"</span></p>";
		document.getElementById("messages").innerHTML += message;
	}
>>>>>>> gh-pages
}

function parse() {
	var xhr = new XMLHttpRequest();
	xhr.addEventListener("load", saveData);
	xhr.open("GET", "data.json");
	xhr.send();
<<<<<<< HEAD
	console.log(blob);	
};

/*
for each id in blob
	add message and username to messages innerHTML
*/
=======
};
>>>>>>> gh-pages
