$(function() {

/* SCROLL WORKING */
	$('.parallax').scroll(function() {    
    var scroll = $('.parallax').scrollTop();
    if (scroll >= 500) {
        $(".clearHeader").addClass("darkHeader");
        console.log("SCROLLED!");
    } else {
        $(".clearHeader").removeClass("darkHeader");
    }
	});

/* MODAL */
  $(".launchActionModal").on('click', function(event){
    $('#actionModal').css('display', 'block');
    setTimeout(function() {
      $('#actionModal').css('opacity', 1);
    }, 50);
  })

  $("#the-x").click(function() {
      $('#actionModal').css('display', 'none');
      setTimeout(function() {
      $('#actionModal').css('opacity', 0);
      }, 50);
  });

  $(".launchDisclaimerModal").on('click', function(event){
    $('#disclaimerModal').css('display', 'block');
    setTimeout(function() {
      $('#disclaimerModal').css('opacity', 1);
    }, 50);
  })

  $("#closeDisclaimer").click(function() {
      $('#disclaimerModal').css('display', 'none');
      setTimeout(function() {
      $('#disclaimerModal').css('opacity', 0);
      }, 50);
  });

/* NEED WAY SO WHEN .can_thank_you_wrap IS ADDED TO #can_embed_form, SOMETHING ELSE IS DISPLAYED. */

  $("[name~=commit]").click(function() {
    console.log("CLICKED");
    setTimeout(function() {
      if ($('.can_thank_you_wrap').css('opacity') === '0') {
        $('#actionModalThanks').css('display','block');
      }
    }, 1);
  });
});
