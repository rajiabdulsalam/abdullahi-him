function toggleNav() {
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');
  burger.classList.toggle('open');
  mobileNav.classList.toggle('open');
}
 
// Close mobile nav when clicking outside
document.addEventListener('click', function (e) {
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');
  if (!burger.contains(e.target) && !mobileNav.contains(e.target)) {
    burger.classList.remove('open');
    mobileNav.classList.remove('open');
  }
});