// MOBILE MENU

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// CLOSE MENU ON LINK CLICK

document.querySelectorAll('.nav-links a').forEach(link => {

  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });

});


// SCROLL ANIMATION

function revealOnScroll(){

  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach(item => {

    const windowHeight = window.innerHeight;

    const revealTop = item.getBoundingClientRect().top;

    const revealPoint = 120;

    if(revealTop < windowHeight - revealPoint){
      item.classList.add('active');
    }

  });

}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();