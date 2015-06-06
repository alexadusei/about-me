"use-strict";

window.onload = function () {
	var images = [];
	var area = document.getElementById("main");
	isGone = false;

	area.onmouseout = defaultHeader;

	for (var i = 0; i < 9; i++){
		images[i] = document.getElementById("img" + i);
		images[i].onmouseover = changeHeader;
		images[i].onclick = changeDiv;
	}
};

function changeHeader() {
    var head = document.getElementById("mainHead");
    head.innerHTML = this.alt;
}

function defaultHeader() {
	if (!isGone){
		var head = document.getElementById("mainHead");
		head.innerHTML = "All About Me";
	}	
}

function changeDiv() {
	var text = []; // long, extravagant text ...

	var head = document.getElementById("mainHead");
	var area = document.getElementById("main");

	temp = [];

	for (var i = 0; i < 9; i++){
		temp[i] = document.getElementById("img" + i);
		temp[i].onmouseover = changeHeader;
		temp[i].onclick = changeDiv;
		temp[i].style.marginLeft = "2.5pt";
		temp[i].style.marginRight = "2.5pt";

		area.removeChild(document.getElementById("img" + i));
	}

	isGone = true;

	var icon = document.createElement("img");
	var paragraph = document.createElement("p");
	var back = document.createElement("img");

	icon.src = this.src;
	icon.width = 64;
	icon.height = 64;

	back.src = "images/back.png";
	back.onmouseover = function() {back.style.opacity = 0.5;};
	back.onmouseout = function() {back.style.opacity = 1;};
	back.onclick = function() { 

		area.removeChild(icon);
		area.removeChild(paragraph);
		area.removeChild(back);

		for (var i = 0; i < 9; i++){
			area.appendChild(temp[i]);
		}
	};
	
	paragraph.style.fontFamily = "Raleway";
	paragraph.style.fontSize = "14pt";
	paragraph.innerHTML = text[this.id[3]];

	area.appendChild(icon);
	area.appendChild(paragraph);
	area.appendChild(back);
}
