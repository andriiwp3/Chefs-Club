function burger() {

	document.addEventListener('click', (e) => {
		let burger_icon = document.querySelector('.header-menu__icon');
		let header_menu = document.querySelector('.header-menu');
		let body = document.querySelector('body');

		if (e.target.closest('.header-menu__icon')) {
			burger_icon.classList.toggle('active');
			header_menu.classList.toggle('active');
			body.classList.toggle('lock');
		}
		if (e.target == header_menu) {
			burger_icon.classList.toggle('active');
			header_menu.classList.toggle('active');
			body.classList.toggle('lock');
		}
	})
}
burger();