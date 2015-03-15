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

//Sorry for the sloppy way of storing these paragraphs... Time management
function changeDiv() {
	var text = ["I'm currently a second year student in the School of Computing\
			    at Queen's University in Canada. In the School of Computing, \
				students get to specialize into streams, and based on those\
				streams, our academics are tailored to certain areas of computer\
				science. My specialization is Software Design, which is the\
				study of modern methods, technologies and languages that make it\
				possible to create and evolve complex software systems.",

				"One of my dreams for the future is working at a very \
				promoninent tech company as an intern, perhaps someplace like\
				Google, Microsoft, Apple, Yahoo, or Facebook, to name a few. \
				Though many see this has setting my goals too high, I'm very\
				eager to at least attempt to aim for these places. I see myself\
				in the next 10 years either working at one of these places \
				(or a very prominent startup) as a permanent member of the team,\
				or potentially starting my own company to offer my own ideas to\
				revolutionize the current world in which we live.",

				"My interests include many things: Reading novels, watching a good \
				drama series, typography, and my favourite of all: computers and \
				all things tech! My interest in computers was always prevailant in \
				my life, but it peaked during high school when I took programming. \
				I was terrible at it when I started, but I began to make games (very \
				terribly, mind you), and eventually became so involved in my work, \
				my interest in the field only grew, and is still growing",

				"Some of my hobbies include playing badminton, playing console video \
				games (though I prefer to make games nowadays), and playing piano. I'm \
				an avid piano player of 11 years, with experience in certain genres such \
				as classical, smooth jazz, and ragtime. Though my hours of practice \
				have diminished over the years, I hope to get back into the art some \
				time soon.",

				"I've moved a lot as a child and have been to many schools because of \
				that. The most memorablesones were my high school, St. Edmund \
				Campion  Secondary School in Brampton. I had the opportunity to be \
				a part of a programming team for a province-wide competition called \
				the Educational Computing Organization of Ontario (ECOO), where we \
				managed to qualify to the second competing round. Good times! I \
				currently attend Queen's University, where the experiences here \
				just continue to take me by (pleasant) surprise time after time.",

				"Somehow, in terms of employment, I've managed to only get government \
				jobs in the summer. It was an exciting time of filing for 8 hours a day, \
				5 days a week. As excruciatingly enjoyable as this was, I hope to \
				hone my skills at a tech startup company as an intern in the near \
				future for experience related to my career.",

				"I have a small idea of foods that I hate, and I'm generally open \
				to trying new dishes. Things I do enjoy include Broiled Lobster Tails \
				(in fact, I know a good website for that recipe!).",

				"There are many people I get my inspiration from. You might suspect that \
				I get it from idols like Bill Gates and Steve Jobs, which in fact, I do! \
				Bill Gates simply was an amazing computer scientist and entrepreneur \
				along with his partner Paul Allen, and they've done a phenomenal amount \
				for the modern world. Many people berate Steve Jobs for not being an \
				actual programmer, but his charisma and ideology of unifying technology \
				and art was a persuasive skill that got him the fame he had (among other \
				things). My other idols include Steve Wozniak, Alan Turing, and \
				Ada Lovelace, who many claim to be the not the first female programmer, \
				but THE first programmer. These people have contributed tremendously \
				to the computing world, and I aspire to do the same.",

				"My list of countries I've visited isn't a long one: I've only been to \
				Germany, Amsterdam, and some American places (NY, Buffalo and \
				Pennsylvania). I do hope to be able to travel a lot more in the \
				future. Places I'd like to visit are the New 7 Wonders of the World, \
				to give me a new perspective on ways of life other than where I reside. \
				Another place I'd love to visit (permanently) is Silicon Valley, for \
				not so obvious reasons."
				];

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