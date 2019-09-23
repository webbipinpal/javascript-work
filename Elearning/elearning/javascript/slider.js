$('.mainBanner .mainBanner__slider').slick({
		dots:false,
		dotsClass:'slider__dots',
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1000,
		arrows:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
          {
            breakpoint: 768,
            settings: {
              dots:true,
              arrows:false
            }
          }
          ]
	});

/*tab js start here */

$('ul.pro__cat__tab__meu li').on('click', function(){
	var tab_id = $(this).attr('data-tab');
	 localStorage.setItem('tab', tab_id);
	$('ul.pro__cat__tab__meu li').removeClass('current');
	$('.pro__tab--content').removeClass('current');
	
	$(this).addClass('current');
	$('#'+tab_id).addClass('current');		
	
});
/*tab js end here */
$(document).ready(function(){
	$(".noti-modal #myModal").modal('show');
});