function main() {
		/* Loads all the js libraries and project modules, then calls onReady. */
// var pathRoot = './lib/';
console.log('main()');
head.js();
head.ready(onReady);
}



function onReady() {
   console.log('onReady()');

//   res = httpGet('/static/cv-corpus-6.1-2020-12-11/fi/clips/common_voice_fi_23997016.mp3');
   var player = document.getElementById('player');
   var source = document.getElementById('audioSource');

   source.src = 'http://localhost:5001/static/cv-corpus-6.1-2020-12-11/fi/clips/common_voice_fi_23997016.mp3';
   source.type = 'audio/mp3';
   player.load();

}

function parseText(text) {
 console.log(text);
}

function httpGet(theUrl) {
	console.log('httpGet()' + theUrl);
var xmlhttp;
if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
console.log('shit outta luck');
}
xmlhttp.onreadystatechange=function()
{
if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
return xmlhttp.responseText;
//parseText(xmlhttp.responseText);
}
}
xmlhttp.open("GET", theUrl, false);
xmlhttp.send();	
}


window.onload = main;
