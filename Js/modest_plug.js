//sticky navbar scrolling 
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0)
})

const container = document.querySelector('.search');
const inputbutton = document.querySelector('input');
const btn = document.querySelector('.button');

btn.addEventListener('click',( )=>{
    // toggle means on and off
    container.classList.toggle('active')
    // the classlist gives the list of the classes that container have(return an array)
    inputbutton.focus( );
})
//hamburger .is-active menu toggle
const hamburger_btn = document.querySelector(".hamburger_menu");
const navMobile_hamburger = document.querySelector(".navMobile_hamburger");
hamburger_btn.addEventListener("click",function () {
    hamburger_btn.classList.toggle("is-active");
    navMobile_hamburger.classList.toggle("is-active");
})

//  slideshows
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
//image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 5; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}