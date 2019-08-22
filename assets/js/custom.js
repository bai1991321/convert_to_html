$(document).ready(function() {

    $(".navbar-toggler").click(function() {
        $('body').toggleClass('show-menu');
    });
    $(".close-button").click(function() {
        $('body').removeClass('show-menu');
    });
    $(window).scroll(function() {
        var sticky = $('#header'),
            scroll = $(window).scrollTop();

        if (scroll >= 70) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    // hide #back-top first
    	$("#myBtn").hide();

    // fade in #back-top
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#myBtn').fadeIn();
            } else {
                $('#myBtn').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#myBtn').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    });
});

/** Header Menu Active **/
$(document).ready(function() {
	$(".menu-act ul li a").each(function() {
	    var pathname1 = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
	    var pathname = pathname1.replace("#/", "");
	    if ($(this).attr('href') == pathname) {
	        $(this).parent().addClass('active');
	    }
	});

	$(".menu-act li ul.dropdown-menu li a").each(function() {
	    var pathname1 = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
	    // alert(pathname1);
	    var pathname = pathname1.replace("#/", "");
	    if ($(this).attr('href').indexOf(pathname1) > -1) {
	        $(this).parent().addClass('active');
	        $(this).parent().parent().parent().addClass('active');
	    }
	});
});
/** Header Menu Active **/

/** Footer Menu Active **/
$(document).ready(function() {
	$(".footer-menu ul li a").each(function() {
	    var pathname1 = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
	    var pathname = pathname1.replace("#/", "");
	    if ($(this).attr('href') == pathname) {
	        $(this).parent().addClass('active');
	    }
	});

	$(".footer-menu ul.submenu li a").each(function() {
	    var pathname1 = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
	    var pathname = pathname1.replace("#/", "");
	    if ($(this).attr('href') == pathname) {
	        $(this).parent().addClass('active');
	        $(this).parent().parent().parent().addClass('active');
	    }
	});
});
/** Footer Menu Active **/