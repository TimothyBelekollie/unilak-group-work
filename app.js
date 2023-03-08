const navMenu = document.querySelector('#hamburger');
const navItems = document.querySelector('.nav');
const backdrop = document.querySelector('.backdrop');

navMenu.addEventListener('click', function (e) {
	e.preventDefault();
	navMenu.classList.toggle('fa-bars');
	navMenu.classList.toggle('fa-xmark');
	navItems.classList.toggle('appear');
	backdrop.classList.toggle('appear');
});

backdrop.addEventListener('click', function (e) {
	e.preventDefault();
	navMenu.classList.toggle('fa-bars');
	navMenu.classList.toggle('fa-xmark');
	navItems.classList.toggle('appear');
	backdrop.classList.toggle('appear');
});
