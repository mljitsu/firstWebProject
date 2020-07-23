/* eslint-env jquery */
/* global document */

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
    
    
    
});