//----------------------------------------------------------------------
//This is how to create a media query in Javascript:
//----------------------------------------------------------------------
// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     document.body.style.backgroundColor = "yellow";
//   } else {
//     document.body.style.backgroundColor = "pink";
//   }
// }

// var x = window.matchMedia("(min-width:767px) and (max-width: 992px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes
//----------------------------------------------------------------------

//Here is a random test i just made to see if this really works in javascript when it doesnt in CSS and OMG it legit works!!!

//----------------------------------------------------------------------

// function smallscreen(x){
// 	if (x.matches){
// 		document.getElementById("hexagon").style.opacity = "0"; < NOTE this can also be document.getElementsByClass instead
// 		console.log("smallscreen works")
// 	}
// 	else
// 		document.getElementById("hexagon").style.opacity = "1";
// 		console.log("smallscreen is not working!!")
// }

// let x = window.matchMedia("(min-width:767px) and (max-width: 992px)")
// smallscreen(x)
// x.addListener(smallscreen)

//----------------------------------------------------------------------

//Example of how to position a div in javascript so combine the above with this to provide a workaround for moving the plot around..

// function placeDiv(x_pos, y_pos) {
//   var d = document.getElementById('yourDivId');
//   d.style.position = "absolute";
//   d.style.left = x_pos+'px';
//   d.style.top = y_pos+'px';
// }


//----------------------------------------------------------------------

// if <certain size> position elements

// if <other certain size> position elements this way

// else display the #incompatible message

//for spacing:


/*#maxus-plot{
    padding: 1.1em;
}

#hydra-plot{
    padding: 1.1em;
}

#alis-plot{
    padding: 1.1em;
}

#mouse-plot{
    padding: 1.1em;
}

#mal-plot{
    padding: 1.1em;

}*/

//----------------------------------------------------------------------


// let <"attribute of the thing you want to show up"> = document.getElementById("id of thing u want to show up");
// let <"attribute of the thing you're clicking"> = document.getElementById("id of thing ur clicking");

// <"the attribute of the thing ur clicking">.onclick = function display(){
// 	console.log("hello");
// 	document.getElementById("id of the thing u want to show up when clicked").style.opacity = "1";
// 	document.getElementById("id of the thing u want to show up when clicked").style.zIndex = "4";
// }

 
// let <"attribute for your close button> = document.getElementsByClassName">("close")[<"insert a number of an item you want to close (governed by your html. the topmost one is 1, the one below that is 2, etc)">];

// <"the attribute you set for inerting ur close button id">.onclick = function(){
// 	<"attribute of thing you want to hide after close is clicked">.style.opacity = "0";
// 	<"attribute of thing you want to hide after close is clicked">.style.zIndex = "-2";
// }



//----------------------------------------------------------------------

function bannersmallscreen(bannery){
	if (bannery.matches){
		document.getElementById("banner").style.height = "5em";

		console.log("bannersmallscreen works")
	}
	else
		document.getElementById("banner").style.height = "initial";

		console.log("bannersmallscreen is not working!!")
}

let bannery = window.matchMedia("(max-width: 1100px)")
bannersmallscreen(bannery)
bannery.addListener(bannersmallscreen)


//size of the invisible banner

function bannerlargescreen(bannerx){
	if (bannerx.matches){
		document.getElementById("banner").style.height = "26em";

		console.log("bannerlargescreen works")
	}
	else
		document.getElementById("banner").style.height = "initial";

		console.log("bannerlargescreen is not working!!")
}

let bannerx = window.matchMedia("(min-width: 1670px)")
bannerlargescreen(bannerx)
bannerx.addListener(bannerlargescreen)

//size of the welcome text

function welcomesmallscreen(welcome){
	if (welcome.matches){
		document.getElementById("welcome").style.fontSize = "1.3em";

		console.log("welcomesmallscreen works")
	}
	else
		document.getElementById("welcome").style.fontSize = "2em";

		console.log("welcomesmallscreen is not working!!")
}

let welcome = window.matchMedia("(max-width: 700px)")
welcomesmallscreen(welcome)
welcome.addListener(welcomesmallscreen)

//height of the welcome text
function welcomeheightsmallscreen(welcomeheight){
	if (welcomeheight.matches){
		document.getElementById("welcome").style.top = "3em";

		console.log("welcomeheightsmallscreen works")
	}
	else
		document.getElementById("welcome").style.top = "25%";

		console.log("welcomeheightsmallscreen is not working!!")
}

let welcomeheight = window.matchMedia("(max-width: 700px)")
welcomeheightsmallscreen(welcome)
welcomeheight.addListener(welcomeheightsmallscreen)


//----------------------------------------------------------------------


function maxuslargescreen(maxusx){
	if (maxusx.matches){
		document.getElementById("maxus-summary").style.padding = "0em 3em 0em";

		console.log("maxuslargescreen works")
	}
	else
		document.getElementById("maxus-summary").style.padding = "initial";

		console.log("maxuslargescreen is not working!!")
}

let maxusx = window.matchMedia("(min-width:1670px)")
maxuslargescreen(maxusx)
maxusx.addListener(maxuslargescreen)

// -------------------------------------------------------------

function hydralargescreen(hydrax){
	if (hydrax.matches){
		document.getElementById("hydra-summary").style.padding = "0em 3em 0em";

		console.log("hydralargescreen works")
	}
	else
		document.getElementById("hydra-summary").style.padding = "initial";

		console.log("hydralargescreen is not working!!")
}


let hydrax = window.matchMedia("(min-width:1670px)")
hydralargescreen(hydrax)
hydrax.addListener(hydralargescreen)

// -------------------------------------------------------------


function mouselargescreen(mousex){
	if (mousex.matches){
		document.getElementById("mouse-summary").style.padding = "0em 3em 0em";

		console.log("mouselargescreen works")
	}
	else
		document.getElementById("mouse-summary").style.padding = "initial";

		console.log("mouselargescreen is not working!!")
}

let mousex = window.matchMedia("(min-width:1670px)")
mouselargescreen(mousex)
mousex.addListener(mouselargescreen)

// -------------------------------------------------------------


function alislargescreen(alisx){
	if (alisx.matches){
		document.getElementById("alis-summary").style.padding = "0em 3em 0em";

		console.log("alislargescreen works")
	}
	else
		document.getElementById("alis-summary").style.padding = "initial";

		console.log("alislargescreen is not working!!")
}

let alisx = window.matchMedia("(min-width:1670px)")
alislargescreen(alisx)
alisx.addListener(alislargescreen)

// -------------------------------------------------------------


function mallargescreen(malx){
	if (malx.matches){
		document.getElementById("mal-summary").style.padding = "0em 3em 0em";

		console.log("mallargescreen works")
	}
	else
		document.getElementById("mal-summary").style.padding = "initial";

		console.log("mallargescreen is not working!!")
}

let malx = window.matchMedia("(min-width:1670px)")
mallargescreen(malx)
malx.addListener(mallargescreen)


// -------------------------------------------------------------

function incompatible(nope){
	if (nope.matches){
		document.getElementById("incompatible").style.opacity = "1";
		document.getElementById("body").style.opacity = "0";
		document.getElementById("preloader").style.display = "none";

		console.log("incompatible works")
	}
	else{
		document.getElementById("body").style.opacity = "1";
		document.getElementById("incompatible").style.opacity = "0";

		console.log("incompatible is not working!!")
	}
}

let nope = window.matchMedia("(min-width:0px) and (max-width:725px)")
incompatible(nope)
nope.addListener(incompatible)


//----------------------------------------------------------------------
// Below is what makes all the panels pop up when you click on the hexagons.
// I created that myself and am very proud of it :D
//-----------------------------------------------------------------------

let maxusplotToggle = document.querySelector("#maxus-plot");

let maxusplotclicks = 0;

maxusplotToggle.addEventListener("click", function(){
	// on odd clicks display maxusclickJptoEng
	maxusplotclicks++

	if(maxusplotclicks %2 !== 0){
		// jpToEng();
		console.log("maxusplotclicksisworking");
		document.getElementById("maxus-sum-jp").style.opacity = "0";
		// document.getElementById("maxus-eng").style.opacity = "0";
		document.getElementById("maxus-sum").style.opacity = "1";
		// document.getElementById("maxus-jp").style.opacity = "1";	
	}

	// on even clicks display maxusclickEngtoJp
	else if(maxusplotclicks %2 == 0){
		// engToJp();
		console.log("else is working")
		document.getElementById("maxus-sum-jp").style.opacity = "1";
		// document.getElementById("maxus-eng").style.opacity = "1";
		document.getElementById("maxus-sum").style.opacity = "0";
		// document.getElementById("maxus-jp").style.opacity = "0";	
	}
}); 


// -------------------------------------------------------------


let hydraplotToggle = document.querySelector("#hydra-plot");

let hydraplotclicks = 0;

hydraplotToggle.addEventListener("click", function(){

	hydraplotclicks++

	if(hydraplotclicks %2 !== 0){
		// jpToEng();
		console.log("hydraplotclicksisworking");
		document.getElementById("hydra-sum-jp").style.opacity = "0";
		// document.getElementById("hydra-eng").style.opacity = "0";
		document.getElementById("hydra-sum").style.opacity = "1";
		// document.getElementById("hydra-jp").style.opacity = "1";	
	}

	
	else if(hydraplotclicks %2 == 0){
		// engToJp();
		console.log("else is working")
		document.getElementById("hydra-sum-jp").style.opacity = "1";
		// document.getElementById("hydra-eng").style.opacity = "1";
		document.getElementById("hydra-sum").style.opacity = "0";
		// document.getElementById("hydra-jp").style.opacity = "0";	
	}
}); 

// -------------------------------------------------------------


let mouseplotToggle = document.querySelector("#mouse-plot");

let mouseplotclicks = 0;

mouseplotToggle.addEventListener("click", function(){

	mouseplotclicks++

	if(mouseplotclicks %2 !== 0){
		// jpToEng();
		console.log("mouseplotclicksisworking");
		document.getElementById("mouse-sum-jp").style.opacity = "0";
		// document.getElementById("mal-eng").style.opacity = "0";
		document.getElementById("mouse-sum").style.opacity = "1";
		// document.getElementById("mal-jp").style.opacity = "1";	

	}

	
	else if(mouseplotclicks %2 == 0){
		// engToJp();
		console.log("else is working")
		document.getElementById("mouse-sum-jp").style.opacity = "1";
		// document.getElementById("mal-eng").style.opacity = "1";
		document.getElementById("mouse-sum").style.opacity = "0";
		// document.getElementById("mal-jp").style.opacity = "0";	

	}
}); 

// -------------------------------------------------------------


let alisplotToggle = document.querySelector("#alis-plot");

let alisplotclicks = 0;

alisplotToggle.addEventListener("click", function(){

	alisplotclicks++

	if(alisplotclicks %2 !== 0){
		// jpToEng();
		console.log("alisplotclicksisworking");
		document.getElementById("alis-sum-jp").style.opacity = "0";
		// document.getElementById("alis-eng").style.opacity = "0";
		document.getElementById("alis-sum").style.opacity = "1";
		// document.getElementById("alis-jp").style.opacity = "1";	
	}

	
	else if(alisplotclicks %2 == 0){
		// engToJp();
		console.log("else is working")
		document.getElementById("alis-sum-jp").style.opacity = "1";
		// document.getElementById("alis-eng").style.opacity = "1";
		document.getElementById("alis-sum").style.opacity = "0";
		// document.getElementById("alis-jp").style.opacity = "0";	
	}
}); 

// -------------------------------------------------------------


let malplotToggle = document.querySelector("#mal-plot");

let malplotclicks = 0;

malplotToggle.addEventListener("click", function(){

	malplotclicks++

	if(malplotclicks %2 !== 0){
		// jpToEng();
		console.log("malplotclicksisworking");
		document.getElementById("mal-sum-jp").style.opacity = "0";
		// document.getElementById("mal-eng").style.opacity = "0";
		document.getElementById("mal-sum").style.opacity = "1";
		// document.getElementById("mal-jp").style.opacity = "1";	
	}

	
	else if(malplotclicks %2 == 0){
		// engToJp();
		console.log("else is working")
		document.getElementById("mal-sum-jp").style.opacity = "1";
		// document.getElementById("mal-eng").style.opacity = "1";
		document.getElementById("mal-sum").style.opacity = "0";
		// document.getElementById("mal-jp").style.opacity = "0";	
	}
}); 

// -------------------------------------------------------------
let maxuselement = document.getElementById("Maxus-panel");
let maxusHex = document.getElementById("Maxus");

maxusHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Maxus-panel").style.opacity = "1";
	document.getElementById("Maxus-panel").style.zIndex = "4";
}

 
let maxusclose = document.getElementsByClassName("close")[0];

maxusclose.onclick = function(){
	maxuselement.style.opacity = "0";
	maxuselement.style.zIndex = "0";
}

// -------------------------------------------------------- 
let sallyelement = document.getElementById("Sally-panel");

let sallyHex = document.getElementById("Sally");

sallyHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Sally-panel").style.opacity = "1";
	document.getElementById("Sally-panel").style.zIndex = "4";
}

let sallyclose = document.getElementsByClassName("close")[1];

sallyclose.onclick = function(){
	sallyelement.style.opacity = "0";
	sallyelement.style.zIndex = "0";
}


// -------------------------------------------------------- 

let jollyelement = document.getElementById("Jolly-panel");
let jollyHex = document.getElementById("Jolly");

jollyHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Jolly-panel").style.opacity = "1";
	document.getElementById("Jolly-panel").style.zIndex = "4";
}

 
let jollyclose = document.getElementsByClassName("close")[2];

jollyclose.onclick = function(){
	jollyelement.style.opacity = "0";
	jollyelement.style.zIndex = "0";
}



// // -------------------------------------------------------- 

let kaleelement = document.getElementById("Kale-panel");
let kaleHex = document.getElementById("Kale");

kaleHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Kale-panel").style.opacity = "1";
	document.getElementById("Kale-panel").style.zIndex = "4";
}

 
let kaleclose = document.getElementsByClassName("close")[3];

kaleclose.onclick = function(){
	kaleelement.style.opacity = 0;
	kaleelement.style.zIndex = "0";
}



// // -------------------------------------------------------- 

let ziahelement = document.getElementById("Ziah-panel");
let ziahHex = document.getElementById("Ziah");

ziahHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Ziah-panel").style.opacity = "1";
	document.getElementById("Ziah-panel").style.zIndex = "4";
}

 
let ziahclose = document.getElementsByClassName("close")[4];

ziahclose.onclick = function(){
	ziahelement.style.opacity = 0;
	ziahelement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let hydraelement = document.getElementById("Hydra-panel");
let hydraHex = document.getElementById("Hydra");

hydraHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Hydra-panel").style.opacity = "1";
	document.getElementById("Hydra-panel").style.zIndex = "4";
}

 
let hydraclose = document.getElementsByClassName("close")[5];

hydraclose.onclick = function(){
	hydraelement.style.opacity = 0;
	hydraelement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let saielement = document.getElementById("Sai-panel");
let saiHex = document.getElementById("Sai");

saiHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Sai-panel").style.opacity = "1";
	document.getElementById("Sai-panel").style.zIndex = "4";
}

 
let saiclose = document.getElementsByClassName("close")[6];

saiclose.onclick = function(){
	saielement.style.opacity = 0;
	saielement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let aeruelement = document.getElementById("Aeru-panel");
let AeruHex = document.getElementById("Aeru");

AeruHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Aeru-panel").style.opacity = "1";
	document.getElementById("Aeru-panel").style.zIndex = "4";
}

 
let aeruclose = document.getElementsByClassName("close")[7];

aeruclose.onclick = function(){
	aeruelement.style.opacity = 0;
	aeruelement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let ransomelement = document.getElementById("Ransom-panel");
let RansomHex = document.getElementById("Ransom");

RansomHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Ransom-panel").style.opacity = "1";
	document.getElementById("Ransom-panel").style.zIndex = "4";
}

 
let ransomclose = document.getElementsByClassName("close")[8];

ransomclose.onclick = function(){
	ransomelement.style.opacity = 0;
	ransomelement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let kobeelement = document.getElementById("Kobe-panel");
let KobeHex = document.getElementById("Kobe");

KobeHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Kobe-panel").style.opacity = "1";
	document.getElementById("Kobe-panel").style.zIndex = "4";
}

 
let kobeclose = document.getElementsByClassName("close")[9];

kobeclose.onclick = function(){
	kobeelement.style.opacity = 0;
	kobeelement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let spydrelement = document.getElementById("Spydr-panel");
let SpydrHex = document.getElementById("Spydr");

SpydrHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Spydr-panel").style.opacity = "1";
	document.getElementById("Spydr-panel").style.zIndex = "4";
}

 
let spydrclose = document.getElementsByClassName("close")[10];

spydrclose.onclick = function(){
	spydrelement.style.opacity = 0;
	spydrelement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let kalielement = document.getElementById("Kali-panel");
let KaliHex = document.getElementById("Kali");

KaliHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Kali-panel").style.opacity = "1";
	document.getElementById("Kali-panel").style.zIndex = "4";
}

 
let kaliclose = document.getElementsByClassName("close")[11];

kaliclose.onclick = function(){
	kalielement.style.opacity = 0;
	kalielement.style.zIndex = "0";
}

// // -------------------------------------------------------- 

let mouseelement = document.getElementById("Mouse-panel");
let mouseHex = document.getElementById("Mouse");

mouseHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Mouse-panel").style.opacity = "1";
	document.getElementById("Mouse-panel").style.zIndex = "4";
}

 
let mouseclose = document.getElementsByClassName("close")[12];

mouseclose.onclick = function(){
	mouseelement.style.opacity = 0;
	mouseelement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let chestilelement = document.getElementById("Chestil-panel");
let ChestilHex = document.getElementById("Chestil");

ChestilHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Chestil-panel").style.opacity = "1";
	document.getElementById("Chestil-panel").style.zIndex = "4";
}

 
let chestilclose = document.getElementsByClassName("close")[13];

chestilclose.onclick = function(){
	chestilelement.style.opacity = 0;
	chestilelement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let codyelement = document.getElementById("Cody-panel");
let CodyHex = document.getElementById("Cody");

CodyHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Cody-panel").style.opacity = "1";
	document.getElementById("Cody-panel").style.zIndex = "4";
}

 
let codyclose = document.getElementsByClassName("close")[14];

codyclose.onclick = function(){
	codyelement.style.opacity = 0;
	codyelement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let bankelement = document.getElementById("Bank-panel");
let BankHex = document.getElementById("Bank");

BankHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Bank-panel").style.opacity = "1";
	document.getElementById("Bank-panel").style.zIndex = "4";
}

 
let bankclose = document.getElementsByClassName("close")[15];

bankclose.onclick = function(){
	bankelement.style.opacity = 0;
	bankelement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

// // -------------------------------------------------------- 

let aliselement = document.getElementById("Alis-panel");
let AlisHex = document.getElementById("Alis");

AlisHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Alis-panel").style.opacity = "1";
	document.getElementById("Alis-panel").style.zIndex = "4";
}

 
let alisclose = document.getElementsByClassName("close")[16];

alisclose.onclick = function(){
	aliselement.style.opacity = 0;
	aliselement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let cheshireelement = document.getElementById("Cheshire-panel");
let CheshireHex = document.getElementById("Cheshire");

CheshireHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Cheshire-panel").style.opacity = "1";
	document.getElementById("Cheshire-panel").style.zIndex = "4";
}

 
let cheshireclose = document.getElementsByClassName("close")[17];

cheshireclose.onclick = function(){
	cheshireelement.style.opacity = 0;
	cheshireelement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let dormouseelement = document.getElementById("Dormouse-panel");
let DormouseHex = document.getElementById("Dormouse");

DormouseHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Dormouse-panel").style.opacity = "1";
	document.getElementById("Dormouse-panel").style.zIndex = "4";
}

 
let dormouseclose = document.getElementsByClassName("close")[18];

dormouseclose.onclick = function(){
	dormouseelement.style.opacity = 0;
	dormouseelement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let boshielement = document.getElementById("Boshi-panel");
let BoshiHex = document.getElementById("Boshi");

BoshiHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Boshi-panel").style.opacity = "1";
	document.getElementById("Boshi-panel").style.zIndex = "4";
}

 
let boshiclose = document.getElementsByClassName("close")[19];

boshiclose.onclick = function(){
	boshielement.style.opacity = 0;
	boshielement.style.zIndex = "0";
}



let malelement = document.getElementById("Mal-panel");
let MalHex = document.getElementById("Mal");

MalHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Mal-panel").style.opacity = "1";
	document.getElementById("Mal-panel").style.zIndex = "4";
}

 
let malclose = document.getElementsByClassName("close")[20];

malclose.onclick = function(){
	malelement.style.opacity = 0;
	malelement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let hocktelement = document.getElementById("Hockt-panel");
let HocktHex = document.getElementById("Hockt");

HocktHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Hockt-panel").style.opacity = "1";
	document.getElementById("Hockt-panel").style.zIndex = "4";
}

 
let hocktclose = document.getElementsByClassName("close")[21];

hocktclose.onclick = function(){
	hocktelement.style.opacity = 0;
	hocktelement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let lexoelement = document.getElementById("Lexo-panel");
let LexoHex = document.getElementById("Lexo");

LexoHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Lexo-panel").style.opacity = "1";
	document.getElementById("Lexo-panel").style.zIndex = "4";
}

 
let lexoclose = document.getElementsByClassName("close")[22];

lexoclose.onclick = function(){
	lexoelement.style.opacity = 0;
	lexoelement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let badelyelement = document.getElementById("Badely-panel");
let BadelyHex = document.getElementById("Badely");

BadelyHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Badely-panel").style.opacity = "1";
	document.getElementById("Badely-panel").style.zIndex = "4";
}

 
let badelyclose = document.getElementsByClassName("close")[23];

badelyclose.onclick = function(){
	badelyelement.style.opacity = 0;
	badelyelement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let gillianelement = document.getElementById("Gillian-panel");
let GillianHex = document.getElementById("Gillian");

GillianHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Gillian-panel").style.opacity = "1";
	document.getElementById("Gillian-panel").style.zIndex = "4";
}

 
let gillianclose = document.getElementsByClassName("close")[24];

gillianclose.onclick = function(){
	gillianelement.style.opacity = 0;
	gillianelement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let inkoelement = document.getElementById("Inko-panel");
let InkoHex = document.getElementById("Inko");

InkoHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Inko-panel").style.opacity = "1";
	document.getElementById("Inko-panel").style.zIndex = "4";
}

 
let inkoclose = document.getElementsByClassName("close")[25];

inkoclose.onclick = function(){
	inkoelement.style.opacity = 0;
	inkoelement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let musashielement = document.getElementById("Musashi-panel");
let MusashiHex = document.getElementById("Musashi");

MusashiHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Musashi-panel").style.opacity = "1";
	document.getElementById("Musashi-panel").style.zIndex = "4";
}

 
let musashiclose = document.getElementsByClassName("close")[26];

musashiclose.onclick = function(){
	musashielement.style.opacity = 0;
	musashielement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let codecelement = document.getElementById("Codec-panel");
let CodecHex = document.getElementById("Codec");

CodecHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Codec-panel").style.opacity = "1";
	document.getElementById("Codec-panel").style.zIndex = "4";
}

 
let codecclose = document.getElementsByClassName("close")[27];

codecclose.onclick = function(){
	codecelement.style.opacity = 0;
	codecelement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let melodyelement = document.getElementById("Melody-panel");
let MelodyHex = document.getElementById("Melody");

MelodyHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Melody-panel").style.opacity = "1";
	document.getElementById("Melody-panel").style.zIndex = "4";
}

 
let melodyclose = document.getElementsByClassName("close")[28];

melodyclose.onclick = function(){
	melodyelement.style.opacity = 0;
	melodyelement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let boneselement = document.getElementById("Bones-panel");
let BonesHex = document.getElementById("Bones");

BonesHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Bones-panel").style.opacity = "1";
	document.getElementById("Bones-panel").style.zIndex = "4";
}

 
let bonesclose = document.getElementsByClassName("close")[29];

bonesclose.onclick = function(){
	boneselement.style.opacity = 0;
	boneselement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let cheesecakeelement = document.getElementById("Cheesecake-panel");
let CheesecakeHex = document.getElementById("Cheesecake");

CheesecakeHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Cheesecake-panel").style.opacity = "1";
	document.getElementById("Cheesecake-panel").style.zIndex = "4";
}

 
let cheesecakeclose = document.getElementsByClassName("close")[30];

cheesecakeclose.onclick = function(){
	cheesecakeelement.style.opacity = 0;
	cheesecakeelement.style.zIndex = "0";
}


// // -------------------------------------------------------- 

let NoriShiroelement = document.getElementById("Nori-Shiro-panel");
let NoriShiroHex = document.getElementById("Nori-Shiro");

NoriShiroHex.onclick = function display(){
	console.log("hello");
	document.getElementById("Nori-Shiro-panel").style.opacity = "1";
	document.getElementById("Nori-Shiro-panel").style.zIndex = "4";
}

 
let NoriShiroclose = document.getElementsByClassName("close")[31];

NoriShiroclose.onclick = function(){
	NoriShiroelement.style.opacity = 0;
	NoriShiroelement.style.zIndex = "0";
}


//----------------------------------------------------------------------

let atlantiselement = document.getElementById("atlantis_panel");
let atlantisHex = document.getElementById("atlantis");

atlantisHex.onclick = function display(){
	console.log("hello");
	document.getElementById("atlantis_panel").style.opacity = "1";
	document.getElementById("atlantis_panel").style.zIndex = "4";
}

 
let atlantisclose = document.getElementsByClassName("close")[32];

atlantisclose.onclick = function(){
	atlantiselement.style.opacity = "0";
	atlantiselement.style.zIndex = "-2";
}

//----------------------------------------------------------------------

let zionixelement = document.getElementById("zionix_panel");
let zionixHex = document.getElementById("zionix");

zionixHex.onclick = function display(){
	console.log("hello");
	document.getElementById("zionix_panel").style.opacity = "1";
	document.getElementById("zionix_panel").style.zIndex = "4";
}

 
let zionixclose = document.getElementsByClassName("close")[33];

zionixclose.onclick = function(){
	zionixelement.style.opacity = "0";
	zionixelement.style.zIndex = "-2";
}

//---------------------------------------------------------------------- Jollyland


let jollylandelement = document.getElementById("jollyland_setting");
let jollylandSetting = document.getElementById("jollyland");

jollylandSetting.onclick = function display(){
	console.log("hello jollyland");
	document.getElementById("jollyland_setting").style.opacity = "1";
	document.getElementById("jollyland-close").style.opacity = "1";
	document.getElementById("jollyland").style.opacity = "0";
	document.getElementById("quarries").style.opacity = "0";
	document.getElementById("exodus").style.opacity = "0";
	document.getElementById("fortress").style.opacity = "0";
	document.getElementById("atlantis_settingnameInPanel").style.opacity = "0";
	document.getElementById("jollyland_setting").style.zIndex = "2";
	document.getElementById("jollyland-close").style.zIndex = "2";
	document.getElementById("atlantis_overview").style.opacity = "0";

}
 
let jollylandclose = document.getElementById("jollyland-close");

jollylandclose.onclick = function(){
	console.log("jollyland back");
	document.getElementById("jollyland").style.opacity = "1";
	document.getElementById("quarries").style.opacity = "1";
	document.getElementById("exodus").style.opacity = "1";
	document.getElementById("fortress").style.opacity = "1";
	document.getElementById("atlantis_settingnameInPanel").style.opacity = "1";
	document.getElementById("jollyland_setting").style.opacity = "0";
	document.getElementById("jollyland-close").style.opacity = "0";
	document.getElementById("jollyland_setting").style.zIndex = "-1";
	document.getElementById("jollyland-close").style.zIndex = "-1";
	document.getElementById("atlantis_overview").style.opacity = "1";
}

//---------------------------------------------------------------------- Quarries


let quarrieselement = document.getElementById("quarries_setting");
let quarriesSetting = document.getElementById("quarries");

quarriesSetting.onclick = function display(){
	console.log("hello quarries");
	document.getElementById("quarries_setting").style.opacity = "1";
	document.getElementById("quarries-close").style.opacity = "1";
	document.getElementById("jollyland").style.opacity = "0";
	document.getElementById("quarries").style.opacity = "0";
	document.getElementById("exodus").style.opacity = "0";
	document.getElementById("fortress").style.opacity = "0";
	document.getElementById("atlantis_settingnameInPanel").style.opacity = "0";
	document.getElementById("quarries_setting").style.zIndex = "2";
	document.getElementById("quarries-close").style.zIndex = "2";
	document.getElementById("atlantis_overview").style.opacity = "0";
}
 
let quarriesclose = document.getElementById("quarries-close");

quarriesclose.onclick = function(){
	console.log("quarries back");
	document.getElementById("jollyland").style.opacity = "1";
	document.getElementById("quarries").style.opacity = "1";
	document.getElementById("exodus").style.opacity = "1";
	document.getElementById("fortress").style.opacity = "1";
	document.getElementById("atlantis_settingnameInPanel").style.opacity = "1";
	document.getElementById("quarries_setting").style.opacity = "0";
	document.getElementById("quarries-close").style.opacity = "0";
	document.getElementById("quarries_setting").style.zIndex = "-1";
	document.getElementById("quarries-close").style.zIndex = "-1";
	document.getElementById("atlantis_overview").style.opacity = "1";
}


//---------------------------------------------------------------------- Exodus


let exoduselement = document.getElementById("exodus_setting");
let exodusSetting = document.getElementById("exodus");

exodusSetting.onclick = function display(){
	console.log("hello exodus");
	document.getElementById("exodus_setting").style.opacity = "1";
	document.getElementById("exodus-close").style.opacity = "1";
	document.getElementById("jollyland").style.opacity = "0";
	document.getElementById("quarries").style.opacity = "0";
	document.getElementById("exodus").style.opacity = "0";
	document.getElementById("fortress").style.opacity = "0";
	document.getElementById("atlantis_settingnameInPanel").style.opacity = "0";
	document.getElementById("exodus_setting").style.zIndex = "2";
	document.getElementById("exodus-close").style.zIndex = "2";
	document.getElementById("atlantis_overview").style.opacity = "0";
}
 
let exodusclose = document.getElementById("exodus-close");

exodusclose.onclick = function(){
	console.log("exodus back");
	document.getElementById("jollyland").style.opacity = "1";
	document.getElementById("quarries").style.opacity = "1";
	document.getElementById("exodus").style.opacity = "1";
	document.getElementById("fortress").style.opacity = "1";
	document.getElementById("atlantis_settingnameInPanel").style.opacity = "1";
	document.getElementById("exodus_setting").style.opacity = "0";
	document.getElementById("exodus-close").style.opacity = "0";
	document.getElementById("exodus_setting").style.zIndex = "-1";
	document.getElementById("exodus-close").style.zIndex = "-1";
	document.getElementById("atlantis_overview").style.opacity = "1";
}

//---------------------------------------------------------------------- Fortress


let fortresselement = document.getElementById("fortress_setting");
let fortressSetting = document.getElementById("fortress");

fortressSetting.onclick = function display(){
	console.log("hello fortress");
	document.getElementById("fortress_setting").style.opacity = "1";
	document.getElementById("fortress-close").style.opacity = "1";
	document.getElementById("jollyland").style.opacity = "0";
	document.getElementById("quarries").style.opacity = "0";
	document.getElementById("exodus").style.opacity = "0";
	document.getElementById("fortress").style.opacity = "0";
	document.getElementById("atlantis_settingnameInPanel").style.opacity = "0";
	document.getElementById("fortress_setting").style.zIndex = "2";
	document.getElementById("fortress-close").style.zIndex = "2";
	document.getElementById("atlantis_overview").style.opacity = "0";
}
 
let fortressclose = document.getElementById("fortress-close");

fortressclose.onclick = function(){
	console.log("fortress back");
	document.getElementById("jollyland").style.opacity = "1";
	document.getElementById("quarries").style.opacity = "1";
	document.getElementById("exodus").style.opacity = "1";
	document.getElementById("fortress").style.opacity = "1";
	document.getElementById("atlantis_settingnameInPanel").style.opacity = "1";
	document.getElementById("fortress_setting").style.opacity = "0";
	document.getElementById("fortress-close").style.opacity = "0";
	document.getElementById("fortress_setting").style.zIndex = "-1";
	document.getElementById("fortress-close").style.zIndex = "-1";
	document.getElementById("atlantis_overview").style.opacity = "1";
}


//---------------------------------------------------------------------- Layer 7


let layer7element = document.getElementById("layer7_setting");
let layer7Setting = document.getElementById("layer7");

layer7Setting.onclick = function display(){
	console.log("hello layer7");
	document.getElementById("layer7_setting").style.opacity = "1";
	document.getElementById("layer7-close").style.opacity = "1";
	document.getElementById("layer7").style.opacity = "0";
	document.getElementById("layer6").style.opacity = "0";
	document.getElementById("layer5").style.opacity = "0";
	document.getElementById("layer4").style.opacity = "0";
	document.getElementById("layer3").style.opacity = "0";
	document.getElementById("layer2").style.opacity = "0";
	document.getElementById("layer1").style.opacity = "0";
	document.getElementById("zionix_settingnameInPanel").style.opacity = "0";
	document.getElementById("layer7_setting").style.zIndex = "2";
	document.getElementById("layer7-close").style.zIndex = "2";
	document.getElementById("zionix_overview").style.opacity = "0";
}
 
let layer7close = document.getElementById("layer7-close");

layer7close.onclick = function(){
	console.log("layer7 back");
	document.getElementById("layer7").style.opacity = "1";
	document.getElementById("layer6").style.opacity = "1";
	document.getElementById("layer5").style.opacity = "1";
	document.getElementById("layer4").style.opacity = "1";
	document.getElementById("layer3").style.opacity = "1";
	document.getElementById("layer2").style.opacity = "1";
	document.getElementById("layer1").style.opacity = "1";
	document.getElementById("zionix_settingnameInPanel").style.opacity = "1";
	document.getElementById("layer7_setting").style.opacity = "0";
	document.getElementById("layer7-close").style.opacity = "0";
	document.getElementById("layer7_setting").style.zIndex = "-1";
	document.getElementById("layer7-close").style.zIndex = "-1";
	document.getElementById("zionix_overview").style.opacity = "1";
}

//---------------------------------------------------------------------- Layer 6


let layer6element = document.getElementById("layer6_setting");
let layer6Setting = document.getElementById("layer6");

layer6Setting.onclick = function display(){
	console.log("hello layer6");
	document.getElementById("layer6_setting").style.opacity = "1";
	document.getElementById("layer6-close").style.opacity = "1";
	document.getElementById("layer7").style.opacity = "0";
	document.getElementById("layer6").style.opacity = "0";
	document.getElementById("layer5").style.opacity = "0";
	document.getElementById("layer4").style.opacity = "0";
	document.getElementById("layer3").style.opacity = "0";
	document.getElementById("layer2").style.opacity = "0";
	document.getElementById("layer1").style.opacity = "0";
	document.getElementById("zionix_settingnameInPanel").style.opacity = "0";
	document.getElementById("layer6_setting").style.zIndex = "2";
	document.getElementById("layer6-close").style.zIndex = "2";
	document.getElementById("zionix_overview").style.opacity = "0";
}
 
let layer6close = document.getElementById("layer6-close");

layer6close.onclick = function(){
	console.log("layer6 back");
	document.getElementById("layer7").style.opacity = "1";
	document.getElementById("layer6").style.opacity = "1";
	document.getElementById("layer5").style.opacity = "1";
	document.getElementById("layer4").style.opacity = "1";
	document.getElementById("layer3").style.opacity = "1";
	document.getElementById("layer2").style.opacity = "1";
	document.getElementById("layer1").style.opacity = "1";
	document.getElementById("zionix_settingnameInPanel").style.opacity = "1";
	document.getElementById("layer6_setting").style.opacity = "0";
	document.getElementById("layer6-close").style.opacity = "0";
	document.getElementById("layer6_setting").style.zIndex = "-1";
	document.getElementById("layer6-close").style.zIndex = "-1";
	document.getElementById("zionix_overview").style.opacity = "1";
}

//---------------------------------------------------------------------- Layer 5


let layer5element = document.getElementById("layer5_setting");
let layer5Setting = document.getElementById("layer5");

layer5Setting.onclick = function display(){
	console.log("hello layer5");
	document.getElementById("layer5_setting").style.opacity = "1";
	document.getElementById("layer5-close").style.opacity = "1";
	document.getElementById("layer7").style.opacity = "0";
	document.getElementById("layer6").style.opacity = "0";
	document.getElementById("layer5").style.opacity = "0";
	document.getElementById("layer4").style.opacity = "0";
	document.getElementById("layer3").style.opacity = "0";
	document.getElementById("layer2").style.opacity = "0";
	document.getElementById("layer1").style.opacity = "0";
	document.getElementById("zionix_settingnameInPanel").style.opacity = "0";
	document.getElementById("layer5_setting").style.zIndex = "2";
	document.getElementById("layer5-close").style.zIndex = "2";
	document.getElementById("zionix_overview").style.opacity = "0";
}
 
let layer5close = document.getElementById("layer5-close");

layer5close.onclick = function(){
	console.log("layer5 back");
	document.getElementById("layer7").style.opacity = "1";
	document.getElementById("layer6").style.opacity = "1";
	document.getElementById("layer5").style.opacity = "1";
	document.getElementById("layer4").style.opacity = "1";
	document.getElementById("layer3").style.opacity = "1";
	document.getElementById("layer2").style.opacity = "1";
	document.getElementById("layer1").style.opacity = "1";
	document.getElementById("zionix_settingnameInPanel").style.opacity = "1";
	document.getElementById("layer5_setting").style.opacity = "0";
	document.getElementById("layer5-close").style.opacity = "0";
	document.getElementById("layer5_setting").style.zIndex = "-1";
	document.getElementById("layer5-close").style.zIndex = "-1";
	document.getElementById("zionix_overview").style.opacity = "1";
}

//---------------------------------------------------------------------- Layer 4


let layer4element = document.getElementById("layer4_setting");
let layer4Setting = document.getElementById("layer4");

layer4Setting.onclick = function display(){
	console.log("hello layer4");
	document.getElementById("layer4_setting").style.opacity = "1";
	document.getElementById("layer4-close").style.opacity = "1";
	document.getElementById("layer7").style.opacity = "0";
	document.getElementById("layer6").style.opacity = "0";
	document.getElementById("layer5").style.opacity = "0";
	document.getElementById("layer4").style.opacity = "0";
	document.getElementById("layer3").style.opacity = "0";
	document.getElementById("layer2").style.opacity = "0";
	document.getElementById("layer1").style.opacity = "0";
	document.getElementById("zionix_settingnameInPanel").style.opacity = "0";
	document.getElementById("layer4_setting").style.zIndex = "2";
	document.getElementById("layer4-close").style.zIndex = "2";
	document.getElementById("zionix_overview").style.opacity = "0";
}
 
let layer4close = document.getElementById("layer4-close");

layer4close.onclick = function(){
	console.log("layer4 back");
	document.getElementById("layer7").style.opacity = "1";
	document.getElementById("layer6").style.opacity = "1";
	document.getElementById("layer5").style.opacity = "1";
	document.getElementById("layer4").style.opacity = "1";
	document.getElementById("layer3").style.opacity = "1";
	document.getElementById("layer2").style.opacity = "1";
	document.getElementById("layer1").style.opacity = "1";
	document.getElementById("zionix_settingnameInPanel").style.opacity = "1";
	document.getElementById("layer4_setting").style.opacity = "0";
	document.getElementById("layer4-close").style.opacity = "0";
	document.getElementById("layer4_setting").style.zIndex = "-1";
	document.getElementById("layer4-close").style.zIndex = "-1";
	document.getElementById("zionix_overview").style.opacity = "1";
}

//---------------------------------------------------------------------- Layer 3


let layer3element = document.getElementById("layer3_setting");
let layer3Setting = document.getElementById("layer3");

layer3Setting.onclick = function display(){
	console.log("hello layer3");
	document.getElementById("layer3_setting").style.opacity = "1";
	document.getElementById("layer3-close").style.opacity = "1";
	document.getElementById("layer7").style.opacity = "0";
	document.getElementById("layer6").style.opacity = "0";
	document.getElementById("layer5").style.opacity = "0";
	document.getElementById("layer4").style.opacity = "0";
	document.getElementById("layer3").style.opacity = "0";
	document.getElementById("layer2").style.opacity = "0";
	document.getElementById("layer1").style.opacity = "0";
	document.getElementById("zionix_settingnameInPanel").style.opacity = "0";
	document.getElementById("layer3_setting").style.zIndex = "2";
	document.getElementById("layer3-close").style.zIndex = "2";
	document.getElementById("zionix_overview").style.opacity = "0";
}
 
let layer3close = document.getElementById("layer3-close");

layer3close.onclick = function(){
	console.log("layer3 back");
	document.getElementById("layer7").style.opacity = "1";
	document.getElementById("layer6").style.opacity = "1";
	document.getElementById("layer5").style.opacity = "1";
	document.getElementById("layer4").style.opacity = "1";
	document.getElementById("layer3").style.opacity = "1";
	document.getElementById("layer2").style.opacity = "1";
	document.getElementById("layer1").style.opacity = "1";
	document.getElementById("zionix_settingnameInPanel").style.opacity = "1";
	document.getElementById("layer3_setting").style.opacity = "0";
	document.getElementById("layer3-close").style.opacity = "0";
	document.getElementById("layer3_setting").style.zIndex = "-1";
	document.getElementById("layer3-close").style.zIndex = "-1";
	document.getElementById("zionix_overview").style.opacity = "1";
}

//---------------------------------------------------------------------- Layer 2


let layer2element = document.getElementById("layer2_setting");
let layer2Setting = document.getElementById("layer2");

layer2Setting.onclick = function display(){
	console.log("hello layer2");
	document.getElementById("layer2_setting").style.opacity = "1";
	document.getElementById("layer2-close").style.opacity = "1";
	document.getElementById("layer7").style.opacity = "0";
	document.getElementById("layer6").style.opacity = "0";
	document.getElementById("layer5").style.opacity = "0";
	document.getElementById("layer4").style.opacity = "0";
	document.getElementById("layer3").style.opacity = "0";
	document.getElementById("layer2").style.opacity = "0";
	document.getElementById("layer1").style.opacity = "0";
	document.getElementById("zionix_settingnameInPanel").style.opacity = "0";
	document.getElementById("layer2_setting").style.zIndex = "2";
	document.getElementById("layer2-close").style.zIndex = "2";
	document.getElementById("zionix_overview").style.opacity = "0";
}
 
let layer2close = document.getElementById("layer2-close");

layer2close.onclick = function(){
	console.log("layer2 back");
	document.getElementById("layer7").style.opacity = "1";
	document.getElementById("layer6").style.opacity = "1";
	document.getElementById("layer5").style.opacity = "1";
	document.getElementById("layer4").style.opacity = "1";
	document.getElementById("layer3").style.opacity = "1";
	document.getElementById("layer2").style.opacity = "1";
	document.getElementById("layer1").style.opacity = "1";
	document.getElementById("zionix_settingnameInPanel").style.opacity = "1";
	document.getElementById("layer2_setting").style.opacity = "0";
	document.getElementById("layer2-close").style.opacity = "0";
	document.getElementById("layer2_setting").style.zIndex = "-1";
	document.getElementById("layer2-close").style.zIndex = "-1";
	document.getElementById("zionix_overview").style.opacity = "1";
}

//---------------------------------------------------------------------- Layer 1


let layer1element = document.getElementById("layer1_setting");
let layer1Setting = document.getElementById("layer1");

layer1Setting.onclick = function display(){
	console.log("hello layer1");
	document.getElementById("layer1_setting").style.opacity = "1";
	document.getElementById("layer1-close").style.opacity = "1";
	document.getElementById("layer7").style.opacity = "0";
	document.getElementById("layer6").style.opacity = "0";
	document.getElementById("layer5").style.opacity = "0";
	document.getElementById("layer4").style.opacity = "0";
	document.getElementById("layer3").style.opacity = "0";
	document.getElementById("layer2").style.opacity = "0";
	document.getElementById("layer1").style.opacity = "0";
	document.getElementById("zionix_settingnameInPanel").style.opacity = "0";
	document.getElementById("layer1_setting").style.zIndex = "2";
	document.getElementById("layer1-close").style.zIndex = "2";
	document.getElementById("zionix_overview").style.opacity = "0";
}
 
let layer1close = document.getElementById("layer1-close");

layer1close.onclick = function(){
	console.log("layer1 back");
	document.getElementById("layer7").style.opacity = "1";
	document.getElementById("layer6").style.opacity = "1";
	document.getElementById("layer5").style.opacity = "1";
	document.getElementById("layer4").style.opacity = "1";
	document.getElementById("layer3").style.opacity = "1";
	document.getElementById("layer2").style.opacity = "1";
	document.getElementById("layer1").style.opacity = "1";
	document.getElementById("zionix_settingnameInPanel").style.opacity = "1";
	document.getElementById("layer1_setting").style.opacity = "0";
	document.getElementById("layer1-close").style.opacity = "0";
	document.getElementById("layer1_setting").style.zIndex = "-1";
	document.getElementById("layer1-close").style.zIndex = "-1";
	document.getElementById("zionix_overview").style.opacity = "1";
}


//---------------------------------------------------------------------- 
// Buttons for atlantis/zionix overview and back.
//---------------------------------------------------------------------- 

let atlantis_overview_text = document.getElementById("atlantis_overview_text");
let atlantis_overview = document.getElementById("atlantis_overview");

atlantis_overview.onclick = function display(){
	console.log("hello atlantis_overview");
	document.getElementById("atlantis_overview_text").style.opacity = "1";
	document.getElementById("atlantis_overview_back").style.opacity = "1";
	document.getElementById("atlantis_overview").style.opacity = "0";
	document.getElementById("jollyland").style.opacity = "0";
	document.getElementById("quarries").style.opacity = "0";
	document.getElementById("exodus").style.opacity = "0";
	document.getElementById("fortress").style.opacity = "0";
	document.getElementById("atlantis_overview_text").style.zIndex = "2";
	document.getElementById("atlantis_overview_back").style.zIndex = "2";
}
 
let atlantis_overview_back = document.getElementById("atlantis_overview_back");

atlantis_overview_back.onclick = function(){
	console.log("atlantis_overview_back");
	document.getElementById("jollyland").style.opacity = "1";
	document.getElementById("quarries").style.opacity = "1";
	document.getElementById("exodus").style.opacity = "1";
	document.getElementById("fortress").style.opacity = "1";
	document.getElementById("atlantis_overview").style.opacity = "1";
	document.getElementById("atlantis_overview_text").style.opacity = "0";
	document.getElementById("atlantis_overview_back").style.opacity = "0";
	document.getElementById("atlantis_overview_text").style.zIndex = "-1";
	document.getElementById("atlantis_overview_back").style.zIndex = "-1";
}

//---------------------------------------------------------------------- 

let zionix_overview_text = document.getElementById("zionix_overview_text");
let zionix_overview = document.getElementById("zionix_overview");

zionix_overview.onclick = function display(){
	console.log("hello zionix_overview");
	document.getElementById("zionix_overview_text").style.opacity = "1";
	document.getElementById("zionix_overview_back").style.opacity = "1";
	document.getElementById("zionix_overview").style.opacity = "0";
	document.getElementById("layer7").style.opacity = "0";
	document.getElementById("layer6").style.opacity = "0";
	document.getElementById("layer5").style.opacity = "0";
	document.getElementById("layer4").style.opacity = "0";
	document.getElementById("layer3").style.opacity = "0";
	document.getElementById("layer2").style.opacity = "0";
	document.getElementById("layer1").style.opacity = "0";
	document.getElementById("zionix_overview_text").style.zIndex = "2";
	document.getElementById("zionix_overview_back").style.zIndex = "2";
}
 
let zionix_overview_back = document.getElementById("zionix_overview_back");

zionix_overview_back.onclick = function(){
	console.log("zionix_overview_back");
	document.getElementById("layer7").style.opacity = "1";
	document.getElementById("layer6").style.opacity = "1";
	document.getElementById("layer5").style.opacity = "1";
	document.getElementById("layer4").style.opacity = "1";
	document.getElementById("layer3").style.opacity = "1";
	document.getElementById("layer2").style.opacity = "1";
	document.getElementById("layer1").style.opacity = "1";
	document.getElementById("zionix_overview").style.opacity = "1";
	document.getElementById("zionix_overview_text").style.opacity = "0";
	document.getElementById("zionix_overview_back").style.opacity = "0";
	document.getElementById("zionix_overview_text").style.zIndex = "-1";
	document.getElementById("zionix_overview_back").style.zIndex = "-1";
}


//---------------------------------------------------------------------- counts the percentage of load completion

// const preloader = document.querySelector(".loadingbardone-done")

// setTimeout(() => {
// 	preloader.style.opacity = 1;
// 	preloader.style.width = preloader.getAttribute("data-done") + "%";
// }, 500)


//---------------------------------------------------------------------- hides preloader when page loads

	document.addEventListener("DOMContentLoaded", (event) =>{
    console.log("dom content loaded");
    document.getElementById("loadingbar").style.width = "5%";
    setTimeout(() => {document.getElementById("loadingbar").style.width = "15%";}, 300);    
    setTimeout(() => {document.getElementById("loadingbar").style.width = "35%";}, 700);

});
// // ^ This is if pics and stuff did NOT load yet.

window.addEventListener('load', (event) => {
    console.log("preloaderworks");
    setTimeout(() => {document.getElementById("loadingbar").style.width = "51.5%";}, 3500);
    setTimeout(() => {document.getElementById("preloader").style.opacity = "0.9";}, 4000);
    setTimeout(() => {document.getElementById("preloader").style.opacity = "0.8";}, 4100);
    setTimeout(() => {document.getElementById("preloader").style.opacity = "0.7";}, 4200);
    setTimeout(() => {document.getElementById("preloader").style.opacity = "0.6";}, 4300);
    setTimeout(() => {document.getElementById("preloader").style.opacity = "0.5";}, 4400);
    setTimeout(() => {document.getElementById("preloader").style.opacity = "0.4";}, 4500);
    setTimeout(() => {document.getElementById("preloader").style.opacity = "0.3";}, 4600);
    setTimeout(() => {document.getElementById("preloader").style.opacity = "0.2";}, 4700);
    setTimeout(() => {document.getElementById("preloader").style.opacity = "0.1";}, 4800);
    setTimeout(() => {document.getElementById("preloader").style.display = "none";}, 4900);
    setTimeout(() => {sessionStorage.setItem("noPreloader", "true"); console.log("no preloader Session Storage activated")}, 4900); 	
})

if (sessionStorage.noPreloader == "true"){
	document.getElementById("preloader").style.display = "none";
 	console.log("noPreloader works");
}

// let noPreloader = sessionStorage.getItem("noPreloader");

// if(noPreloader = true){
// 	document.getElementById("preloader").style.display = "none";
// 	console.log("noPreloader works");
// }

// ^ this is for if pics ARE loaded

//---------------------------------------------------------------------- 
