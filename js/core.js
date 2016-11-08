$(function() {

/* SCROLL WORKING */
  $('.parallax').scroll(function() {    
    var scroll = $('.parallax').scrollTop();
    if (scroll >= 1425) {
      $(".header").css('height', '60px');
    } else {
      $(".header").css('height', '0');    
    }
  });

  var showModal = function(selector) {
    $(selector).css('display', 'block');
    setTimeout(function() {
      $(selector).css('opacity', 1);
    }, 50);
  };

  var hideModal = function(selector) {
    $(selector).css('display', 'none');
    setTimeout(function() {
      $(selector).css('opacity', 0);
    }, 50);
  };

/* MODAL */
  $(".launchActionModal").on('click', function(event){
    showModal('#actionModal');
  });

  $("#the-x").click(function() {
    hideModal('#actionModal');
  });

  $(".launchDisclaimerModal").on('click', function(event){
    showModal('#disclaimerModal');
  })

  $("#closeDisclaimer").click(function() {
    hideModal('#disclaimerModal');
  });

  $("#disclaimerX").click(function() {
    hideModal('#disclaimerModal');
  });

  setTimeout(function(){
    showModal('#shareModal');
  }, 65000);

  $("#closeShare").click(function() {
    closeModal('#shareModal');
  });

  $("#shareX").click(function() {
    closeModal('#shareModal');
  });

/* NEED WAY SO WHEN .can_thank_you_wrap IS ADDED TO #can_embed_form, SOMETHING ELSE IS DISPLAYED. */
  $(document).on('click', 'input[type="submit"]', function(event) {
    // For if you want to keep the form from actually being submitted
    // event.preventDefault();
    console.log(event);
    console.log($(this));
  });

});
