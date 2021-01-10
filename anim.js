$(window).on('load', function() {
    $(window).scroll(function() {
        const windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function() {
            const objectBottom = $(this).offset().top + $(this).outerHeight();

            if(objectBottom < windowBottom) {
                if($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
            } else {
                if($(this).css("opacity")==1) {$(this).fadeTo(500, 0);}
            }
        });
    }).scroll();
});
