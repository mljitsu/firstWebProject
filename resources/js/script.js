/* eslint-env jquery */
/* global document */
/* global location */



$(document).ready(function () {

    /* Sticky navigation */
    
    $('.js--section-features').waypoint(function(direction) {  /* Select js section feature as waypoint call function direction */
        if (direction == "down") {
            $('nav').addClass('sticky');                       /* Select nav, add class sticky if direction is down  */
        } else {
            $('nav').removeClass('sticky');                    /* selevt nav, remove class when direction is not down  */
        }
    }, {
        offset: '65px;'                                         /* Offest so nav appears 65px before js--section-features  */
    });
    
    /* Main paige buttons scroll */ 
    
    $('.js--scroll-to-plan').click(function (){                                            /* Select jjs--scroll-to-plan on click has function */
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);  /* Select html, body animate scroll to top of .js--section-plans with offset on top of 1s   */
    });
    
    $('.js--scroll-to-start').click(function (){                                           
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);  
    });
    
    /* Main page nav scroll */
    
    $('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
    
    /* Animations on scroll */ 
    
   $('.js--wp-1').waypoint(function(direction) {
       $('.js--wp-1').addClass('animate__fadeIn');
   }, {
       offset: '50%'
   }); 
    
    $('.js--wp-2').waypoint(function(direction) {
       $('.js--wp-2').addClass('animate__fadeInUp');
   }, {
       offset: '50%'
   }); 
    
    $('.js--wp-3').waypoint(function(direction) {
       $('.js--wp-3').addClass('animate__fadeIn');
   }, {
       offset: '50%'
   }); 
    
    $('.js--wp-4').waypoint(function(direction) {
       $('.js--wp-4').addClass('animate__pulse');
   }, {
       offset: '50%'
   }); 
    
});