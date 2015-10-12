// Replace this with your code...

function init() {
	var canvas = document.getElementById("game_canvas");
	var context = canvas.getContext("2d");

	var background = new Image();
	background.addEventListener("load", function() {
		context.drawImage(background, 0, 0);
	});
	background.src = 'duckhunt-background.gif';

	var icons = new Image();
	icons.addEventListener("load", function() {
		context.drawImage(icons, 40, 115, 40, 36, 85, 45, 40, 36);
		context.drawImage(icons, 210, 155, 30, 35, 150, 85, 30, 35);
	});
	icons.src = 'duckhunt_various_sheet.png';

}