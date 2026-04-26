/* nav.js */
function toggleNav() {
  document.getElementById('burger').classList.toggle('open');
  document.getElementById('mobNav').classList.toggle('open');
}
 
document.addEventListener('click', function(e) {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('mobNav');
  if (!burger.contains(e.target) && !nav.contains(e.target)) {
    burger.classList.remove('open');
    nav.classList.remove('open');
  }
});
 
// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }
});
 