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

	var welcome = document.getElementById("welcome-section");
	var slideshow = document.getElementById("header-slideshow");
	var classes = document.getElementById("classes-section");
	var academy = document.getElementById("about-the-academy-section");
	var professor = document.getElementById("about-professor-section");
	var contact = document.getElementById("contact-us-section");
	var schedule = document.getElementById("schedule-section");


	switch(section) {
		case "academy": 
			welcome.style.display = 'none';
			slideshow.style.display= 'none';
			classes.style.display = 'none';
			academy.style.display = 'block';
			professor.style.display = 'block';
			contact.style.display = 'none';
			schedule.style.display = 'none';
			break;
		
		case "contact":
			welcome.style.display = 'none';
			slideshow.style.display= 'none';
			classes.style.display = 'none';
			academy.style.display = 'none';
			professor.style.display = 'none';
			contact.style.display = 'block';
			schedule.style.display = 'none';
			break;

		case "schedule":
			welcome.style.display = 'none';
			slideshow.style.display= 'none';
			classes.style.display = 'none';
			academy.style.display = 'none';
			professor.style.display = 'none';
			contact.style.display = 'none';
			schedule.style.display = 'block';
			break;
		
		default:
	    	welcome.style.display = 'block';
			slideshow.style.display = "block";
			classes.style.display = 'block';
			academy.style.display = 'none';
			professor.style.display = 'none';
			contact.style.display = 'none';
			schedule.style.display = 'none';
	    	break;
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

