$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        $(".clearHeader").addClass("darkHeader");
        console.log("SCROLLED!");
    } else {
        $(".clearHeader").removeClass("darkHeader");
    }
});