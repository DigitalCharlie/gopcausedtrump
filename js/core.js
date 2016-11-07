/* SCROLL WORKING */

	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();
	    if (scroll >= 500) {
	        $(".clearHeader").addClass("darkHeader");
	        console.log("SCROLLED!");
	    } else {
	        $(".clearHeader").removeClass("darkHeader");
	    }
	});

/* MODAL */

	$(function() {
		$(".launchActionModal").on('click', function(event){
			$('.modal').css('display', 'block');
			setTimeout(function() {
				$('.overlay').css('opacity', 1);
			}, 50);
		})

		$("#the-x").click(function() {
		    $('.modal').css('display', 'none');
		    setTimeout(function() {
		    $('.modal').css('opacity', 0);
		    }, 50);
		});
	});

