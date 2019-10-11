$(function(){

$('.menu-btn').on('click', function(){
	$('.header__menu ul').slideToggle();
});	


$(".header__menu, .footer__menu-content").on("click","a", function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
		top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1500);
});

new WOW().init();

});

