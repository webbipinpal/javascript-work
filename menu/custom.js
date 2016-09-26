$(document).ready(function(){
	
	/*Main Navigation*/	
	$(".hasmore").hover(
		function () {
			$(this).addClass('hasmore-current');
			$('.dropdown').addClass('dropdown-current');
		},
		function () {
			$(this).removeClass("hasmore-current");
			//$('.dropdown').removeClass('dropdown-current');
		});
		
	$(".dropdown").hover(
		function () {
			$(this).addClass('dropdown-current');	
			$('.hasmore').addClass('hasmore-current');		
		},
		function () {
			$(this).removeClass("dropdown-current");
			$('.hasmore').removeClass('hasmore-current');			
		});
		
		
		$('.level-one li:has(>div) > a ').hover(function(e){
        e.stopPropagation();
		$('.level-one li a').removeClass('active');
		
		$(this).addClass('active');
		$('.level-one li div').removeClass('level-two-current');
		$(this).next().addClass('level-two-current');
				
		});
		
		
				
		
	
	/*usermenu*/
	$('body').click(function() {
	        $('.user-detail').removeClass('user-detail-active');
	        $(".user-menu").removeClass('user-menu-active');
			$('.dropdown_login_block').removeClass('dropdown_login_block_open');
	        $(".m_signin").removeClass('m_signin-active');
	    });
	    
		$('.user-detail').click(function(event){
		event.stopPropagation();    
		});
		
		$(".user-menu").click(function(event){ 
	        event.stopPropagation();          
			$(this).toggleClass('user-menu-active');
			$('.user-detail').toggleClass('user-detail-active');
		});
					    
		$('.dropdown_login_block').click(function(event){
		event.stopPropagation();    
		});
		
		$(".m_signin").click(function(event){ 
	        event.stopPropagation();          
			$(this).toggleClass('m_signin-active');
			$('.dropdown_login_block').toggleClass('dropdown_login_block_open');
		});

	/*usermenu*/
	
		
	/*Flex Slider*/		
	
	/*$(document).ready(function() {
	$('.flexslider').flexslider();
	});
	
	$(document).ready(function() {
	$('.rajnish').flexslider();
	});	*/
	
	/*MSG Block library*/
	
	$(".lib_hasmore").hover(
		function () {
			$(this).addClass('lib_hasmore_current');
			$(this).find('.lib-submenu-wrapper').addClass('lib-submenu-wrapper-active');
		},
		function () {
			$(this).removeClass("lib_hasmore_current");
			$(this).find('.lib-submenu-wrapper').removeClass('lib-submenu-wrapper-active');
		});
		
	/*Categories list*/
	$("#categories-accordion li.category-title").click(function(){	
		$('#categories-accordion li.category-title').removeClass('category-expand');
               $('#categories-accordion ul.sub-categories-list').slideUp(300);
               if($(this).next().is(':visible')==false) {                
        $(this).addClass('category-expand');
        $(this).next().slideDown(300);
       }
	});	
	//$('#categories-accordion ul.sub-categories-list:eq(0)').show();
	//$('#categories-accordion li.category-title:eq(0)').addClass('category-expand');
	
	/*Article Navigator overlay*/
	

	$(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    if (scroll >= 300) {
        $(".article-navigator-leftside").addClass("article-navigator-overlay-active");
		$(".article-navigator-rightside").addClass("article-navigator-overlay-active");
    }	
	if (scroll < 300) {
        $(".article-navigator-leftside").removeClass("article-navigator-overlay-active");
		$(".article-navigator-rightside").removeClass("article-navigator-overlay-active");
    }
	});
	
	 $('input[type="text"]').ToggleInputValue();
	 $('input[type="password"]').ToggleInputValue();
	

		
}); 
/*DOCUMENT.READY end here*/

//removing text on focus
$.fn.ToggleInputValue = function(){
return $(this).each(function(){
	var Input = $(this);
	var default_value = Input.val();

	Input.focus(function() {
	   if(Input.val() == default_value) Input.val("");
	}).blur(function(){
		if(Input.val().length == 0) Input.val(default_value);
	});
});
};
	
$(function(){
		if($($('.breadcrumb li').filter(function(index) { return $.trim($(this).text()) === "Library"; })).length){
			$('.primary-menu li.hasmore').addClass('hasmore-active')
		}
	});
	