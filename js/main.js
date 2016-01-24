$(function(){

	$('.header-nav-a').on('click', function(){
		$('.header-nav-a.active').removeClass('active');
		$(this).addClass('active');
	});
	
});