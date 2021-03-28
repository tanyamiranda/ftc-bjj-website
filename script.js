function displayMenu() {
	var menu = document.getElementById("header-menu");
	var closeIcon = document.getElementById('menu-close-icon');
	var openIcon = document.getElementById('menu-open-icon');

    menu.style.transition = '0.5s';
    menu.style.width = "200px";
    openIcon.style.display="none";
	closeIcon.style.display="inline-block";
}

function hideMenu() {
	var menu = document.getElementById("header-menu");
	var closeIcon = document.getElementById('menu-close-icon');
	var openIcon = document.getElementById('menu-open-icon');

	menu.style.transition = '0.5s';
    menu.style.width = "0px";
	openIcon.style.display="inline-block";
	closeIcon.style.display="none";
    
}

function displaySection(section) {

	const HOMEPAGETAG="welcome-to-ftc-section";
	const ALLTAGS=["welcome-to-ftc","our-classes", "class-schedule", "contact-us", "private-classes", "about-the-academy", "professor-marcelo-oliveira","bjj-kids-teens"];
	let sectionTag = "";

	if (section==='' || ALLTAGS.indexOf(section)===-1)
		sectionTag= HOMEPAGETAG;
	else 
		sectionTag = section + "-section";

	/* Display slideshow only on home page */
	let slideshow = document.getElementById("slideshow-container");
	if (sectionTag===HOMEPAGETAG)	
		slideshow.style.display= "block";
	else
		slideshow.style.display= "none"

	let allSections = document.getElementsByClassName("section")

	for (i = 0; i < allSections.length; i++) { 
		let section = allSections[i]
		if (section.id === sectionTag)
			section.style.display='block';
		else 		
			section.style.display='none';
	}
	
}

/******************************
Closes slide menu when blurred
on smaller or mobile devices
*******************************/
document.onclick = function(event) { 

	if(event.target.id==="")
	{ 
	    hideMenu();
  	}
}

/******************************
Upon window resizing, the menu 
transition is removed so it
does not "fly accross" screen 
when growing past 750px
******************************/
window.onresize = function(event) {
	var w = window.innerWidth;
    var menu = document.getElementById("header-menu");

	if (w >= 750) {
		menu.style.transition = '0s';
	}
	else {
		menu.style.transition = '0s';
		menu.style.width = "0px";
	}

};

/******************************
In case the sections are linked
externally, pre-load section
******************************/
const section = window.location.hash;
displaySection(section.substring(1));

