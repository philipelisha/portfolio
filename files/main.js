;(function( $, window, document, undefined ) {
 	"use strict";
	
	function init() {

		//create our instance of jQuery
		var obj = $( {} );
		//link our jquery functions to new function names
		$.each({

			  //associate our keys and values to iterate through
			  trigger: 'publish',
			  on:      'subscribe',
			  off:     'unsubscribe'

		}, function( key, val ) {
			//attach our new function to the jQuery object using the array notation
			$[val] = function() {

				//when new function is called, call original function and pass any arguments along
				obj[key].apply( obj, arguments );

			};
		});

	}

	//call our pubsub function so it is available immediately
	init();
	
	$(function() {

		var listShower;
		$( document ).on( "click", "a.anchor", function ( e ) {
			e = e || window.event; // IE
			e.preventDefault();
			$('html, body').stop().animate({ 
					  scrollTop: $( $(this).attr('href') ).offset().top - 100
			}, 500);
		});
        $(document).on( 'scroll', function(){
            if ($(window).scrollTop() > 150) {
                $("#blackBar").addClass("show");
                $("#topContent").addClass("hide");
            } else {
                $("#blackBar").removeClass("show");
                $("#topContent").removeClass("hide");
            }
        });
        
        $('.carousel').slick();
        $('#expertisecarousel').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows:false,
            pauseOnHover: false,
            centerMode: true
        });

		// show the expertise as bullets on hover
		$("#expertise").hover(function(){
			clearTimeout(listShower);
			listShower = setTimeout(function(){
				$('#featuredExpertise').addClass('hidden');
				$('#featuredExpertiseList').addClass('show');
			}, 600);
		}, function(){
			clearTimeout(listShower);
			listShower = setTimeout(function(){
				$('#featuredExpertise').removeClass('hidden');
				$('#featuredExpertiseList').removeClass('show');
			}, 150);
		});

		//set the date on my copyright
		var copyYear = new Date;
		copyYear = copyYear.getFullYear();
		$("#copyYear").text(copyYear);
		

	});
	
//undefined passed in but not assigned to retain a true "undefined"
})( jQuery, window, document );