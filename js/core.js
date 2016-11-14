$(function() {

/* SCROLL WORKING */
  $('.parallax').scroll(function() {    
    var scroll = $('.parallax').scrollTop();
    if (scroll >= 1425){
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

  $(".launchShareModal").on('click', function(event){
    showModal('#shareModal');
  });

  $("#closeShare").click(function() {
    hideModal('#shareModal');
  });

  $("#shareX").click(function() {
    hideModal('#shareModal');
  });

/* THIS IS HOW THE THANK YOU PAGE IS SHOWN */

  $(document).on('can_embed_submitted', function() {
          $('#actionModalThanks').css('display','block');
          $('#actionModalPage1').css('display','none');
          $('#can_thank_you h1').html('Thanks!');
     });

});
