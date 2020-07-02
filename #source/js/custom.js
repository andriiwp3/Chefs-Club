let burger_icon = document.querySelector('.header-menu__icon');

burger_icon.addEventListener('click', () => {
	let header_menu = document.querySelector('.header-menu');

	burger_icon.classList.toggle('active');
	header_menu.classList.toggle('active');
})