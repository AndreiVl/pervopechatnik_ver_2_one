const header = () => {
	$.fn.switchClass = function (a, b) {
		let t = $(this).hasClass(a);
		$(this).addClass(t ? b : a).removeClass(t ? a : b);
	}
	$('.header__btn').click(function () {
		$('.header__body').switchClass('header__body-closed', 'header__body-opened');
	});
}

export default header;