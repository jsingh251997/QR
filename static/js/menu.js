
setTimeout(function() {
	document.getElementById("loadId").outerHTML="";
	document.getElementById("IntroText").outerHTML="";
	document.getElementById('BagImageDiv').style.display = "block";
	document.getElementById('BagImageDiv').style.opacity = 1;

}, 3100);
setTimeout(function() {
    document.getElementById('BagImageDiv').style.opacity = 0;
	console.log("HELLO");
}, 7100);
setTimeout(function() {
	document.getElementById('BagImageDiv').outerHTML = "";
	document.getElementById('LoadOverview').style.display = "block";
	document.getElementById('LoadOverview').style.opacity = 1;
	console.log("HELLO");
}, 8100);
setTimeout(function() {
	document.getElementById("LoadOverview").style.opacity = 0;
    window.location.replace("https://www.purinamills.com/");
}, 10000);



/*
OLD MENU ANIMATION
$(document).ready(function() {


let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav'),
	 slowmo = document.getElementById('slowmo');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

slowmo.addEventListener('click', function(e){
	this.classList.toggle('is-slowmo');
});

/* Onload demo - dirty timeout */
/*
let clickEvent = new Event('click');

window.addEventListener('load', function(e) {
	slowmo.dispatchEvent(clickEvent);
	burger.dispatchEvent(clickEvent);
	
	setTimeout(function(){
		burger.dispatchEvent(clickEvent);
		
		setTimeout(function(){
			slowmo.dispatchEvent(clickEvent);
		}, 3500);
	}, 5500);
});
});*/