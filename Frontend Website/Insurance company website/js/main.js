(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();
    

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top shadow-sm').css('top', '0px');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow-sm').css('top', '-100px');
        }
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 500,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });



    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-arrow-right"></i>',
            '<i class="fa fa-arrow-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Real-time update functionality
    window.realTimeUpdates = {
        intervals: {},
        
        // Start polling for updates
        startPolling: function(pageType, callback, interval = 30000) {
            if (this.intervals[pageType]) {
                clearInterval(this.intervals[pageType]);
            }
            
            this.intervals[pageType] = setInterval(callback, interval);
            console.log(`Started polling for ${pageType} updates every ${interval}ms`);
        },
        
        // Stop polling
        stopPolling: function(pageType) {
            if (this.intervals[pageType]) {
                clearInterval(this.intervals[pageType]);
                delete this.intervals[pageType];
                console.log(`Stopped polling for ${pageType}`);
            }
        },
        
        // Stop all polling
        stopAll: function() {
            Object.keys(this.intervals).forEach(pageType => {
                this.stopPolling(pageType);
            });
        }
    };

    // Auto-refresh data when page becomes visible
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            // Page became visible, trigger a refresh
            const currentPage = window.location.pathname.split('/').pop();
            if (currentPage === 'policies.html' && typeof loadPolicies === 'function') {
                loadPolicies();
            } else if (currentPage === 'blog.html' && typeof loadBlogs === 'function') {
                loadBlogs();
            }
        }
    });

})(jQuery);

