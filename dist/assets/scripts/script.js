
//////////////////////////////Back To Top Button////////////////////////////////////
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


/////////////////////////////////////searchbox/////////////////////////////////////////////////////

/////////////////////////////////////swiper_services///////////////////////////////////////////////
if (window.matchMedia("(min-width: 270px) and (max-width: 768px)").matches) {
	/* حداقل عرض 400 پیسکل می باشد */
	new Swiper(".services .swiper-container", {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 25,
		pagination: {
			el: ".swiper-pagination",
		},
	});
  } 
  else if
  (window.matchMedia("(min-width: 769px) and (max-width: 1024px)").matches) {
	/* حداقل عرض 400 پیسکل می باشد */
	new Swiper(".services .swiper-container", {
		loop: true,
		slidesPerView: 2,
		spaceBetween: 25,
		pagination: {
			el: ".swiper-pagination",
		},
	});  
  }
  else {
	/* عرض صفحه کمتر از 400 پیکسل است */
	new Swiper(".services .swiper-container", {
		loop: true,
		slidesPerView: 4,
		spaceBetween: 25,
		pagination: {
			el: ".swiper-pagination",
		},
	});
  }



//Responsive Slider
// const mediaQuery = window.matchMedia('(min-width : 360px) and (max-width : 768px)');
// new Swiper(".services .swiper-container", {
// 	loop: true,
// 	slidesPerView: 1,
// 	spaceBetween: 25,
// 	pagination: {
// 		el: ".swiper-pagination",
// 	},
// });
// var mySwiper = new Swiper('.swiper-container', {
//     loop: true,
//     slidesPerView: 4,
//     spaceBetween: 30,
//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });

/////////////////////////////////////portfolio///////////////////////////////////////////////

var iso = new Isotope(".portfolio .grid", {
	itemSelector: ".grid-item",
});

document.querySelectorAll(".portfolio .filters span").forEach((item) => {
	item.addEventListener("click", () => {
		document.querySelectorAll(".portfolio .filters span").forEach((i) => i.classList.remove("font-weight-bold" , "colorA"));
		item.classList.add("font-weight-bold" , "colorA");

		iso.arrange({ filter: item.getAttribute("data-filter") });
	});
});
/////////////////////////////////////////Menu Responsive/////////////////////////////
