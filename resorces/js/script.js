// MixitUp

var mixer = mixitup('.grid-work-container');

// Scrollify

 $(function() {
     $.scrollify({
       section : ".scrollify",
         setHeights: false,
         updateHash: false,
     });
 });

// Smooth Scroll

$(function(){
    $('.font-awasome a').on('click', function(){
       $('html,body').animate({
           scrollTop: $($.attr(this, 'href')).offset().top
       }, 1000);
        return false;
    });
});