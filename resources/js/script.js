/* eslint-env jquery */
/* global document */

$(document).ready(function () {

    $('.js--section-features').waypoint(function(direction) {  /* Select js section feature as waypoint call function direction */
        if (direction == "down") {
            $('nav').addClass('sticky');                       /* Select nav, add class sticky if direction is down  */
        } else {
            $('nav').removeClass('sticky');                    /* selevt nav, remove class when direction is not down  */
        }
    }, {
        offset: '65px;'                                         /* Offest so nav appears 65px before js--section-features  */
    });
    
});