// todo: iradicate jquery:

        /// navigation bar switching
        $(window).scroll(function () {
            var scroll = $(this).scrollTop();

            if (scroll >= $('section, #main, main').not('#who-am-i').offset().top - 80) {
                $('.nav-primary').removeClass("nav-header-main");
                $('.nav-primary > .grid-container ').addClass("fluid");

            } else {
                $('.nav-primary').addClass("nav-header-main");
                $('.nav-primary > .grid-container ').removeClass("fluid");
            }
        });

        /* $("#empty-video-space, header .video-wrapper").hover(function() {
            $("#project-post-details").addClass("makeHollow");
          }, function() {
            $("#project-post-details").removeClass("makeHollow");
          }); */