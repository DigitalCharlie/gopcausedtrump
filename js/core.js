$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $(".clearHeader").addClass("darkHeader");
    } else {
        $(".clearHeader").removeClass("darkHeader");
    }
});