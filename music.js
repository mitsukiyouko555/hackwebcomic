function incompatible(nope){
	if (nope.matches){
		document.getElementById("incompatible").style.opacity = "1";
		document.getElementById("body").style.opacity = "0";

		console.log("incompatible works")
	}
	else{
		document.getElementById("body").style.opacity = "1";
		document.getElementById("incompatible").style.opacity = "0";

		console.log("incompatible is not working!!")
	}
}

let nope = window.matchMedia("(min-width:0px) and (max-width:600px)")
incompatible(nope)
nope.addListener(incompatible)