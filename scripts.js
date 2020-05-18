//IN
$(document).ready(function () {
  //MENU MOBILE
  $(".button-collapse").sideNav();

  //CAROUSEL
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
  });
  //MODAL
  $(".modal").modal();
  //TABS
  $("ul.tabs").tabs();
  //Esconder o MENU ao clicar
  $(".hide-menu").click(function () {
    $(".button-collapse").sideNav("hide");
  });
  //AutoPLAY
  function autoplay() {
    $(".carousel").carousel("next");
    setTimeout(autoplay, 4500);
  }
  autoplay();
});

//ADICIONANDO NAVCOLOR
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 100) {
    $(".navbar").addClass("nav-color");
  } else {
    $(".navbar").removeClass("nav-color");
  }
});

//Get the button:
mybutton = document.getElementById("mytopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
