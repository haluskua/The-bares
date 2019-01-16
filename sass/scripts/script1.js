
$(document).ready(function(){

    if (jQuery(window).width() <= 481) {
        $(".exit-menu, .hamburger-menu, .logo-desc").on("click", function(){
          $(".mobile-container").hide(300);
          $(".haus").show(300);
        });
        //show menu bar onclick on main logo
        $(".haus-menu, #hetinfo").click(function(){
          $(".mobile-container").show(500);
          $(".nav-folders").show(480);
          // $(".haus").hide(500);
          $(".exit-menu").show(700);
        });

        /* Repetitive code on ellipsis effec,, need to be changed to dray*/
        $(".gdt").on("click", function() {
          $(".scgdt").css("display", "flex");
        });
        $(".accordion").on("click", function() {
          $(".scgdt").css("display", "flex");
        });
        $(".wdt").on("click", function() {
          $(".scwdt").css("display", "flex");
        });
        $(".f").on("click", function() {
          $(".scft").css("display", "flex");
        });
        $(".m").on("click", function() {
          $(".scmt").css("display", "flex");
        });
        $(".open-caption").on("click", function() {
          $("#skills-descOpen").css("display", "none");
          $("#skills-descClose").css("display", "flex");
          $(".scpmt").css("display", "flex");
          $(".close-caption").css("z-index", "999");
        });

        $(".close-caption").on("click", function(){
          $("#skills-descOpen").css("display", "flex");
          $("#skills-descClose").css("display", "none");
          $(".scpmt").css("display", "none");
          $(".open-caption").css("z-index", "999");
        });

        jQuery(window).resize(function () {
                if (jQuery(window).width() > 768) {
                  $("#folders-container").show(300);
                  $('.haus-menu').on("click", function(){
                      alert('john');
                  });
                    jQuery(".haus").css("display", "none");
                }
        });
    }
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    /*changing between classes */
      if (scrollTop > stickyNavTop) {
        $('.mobile-container').addClass('sticky');
        $('#folders-container').addClass('reduced');
        }
        else {
          /*restoring back to normal */
        $('.mobile-container').removeClass('sticky');
        $('#folders-container').removeClass('reduced');
      }
    });

    var stickyNavTop = $('.nav-folders').offset().top;
    var headerHeight = 40;
      $('.hamburger-menu, .logo-desc, .grafix').click(function(e) {
          var linkHref = $(this).attr('href');
          $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
          }, 800);
          e.preventDefault();
        });
// targeting tablet view because of menu top heigt change from mobile view
        if (jQuery(window).width() > 481) {
            var stickyNavTop = $('.nav-folders').offset().top;
            var headerHeight = 52;
              $('.hamburger-menu, .logo-desc, #snaps').click(function(e) {
                  var linkHref = $(this).attr('href');
                  $('html, body').animate({
                    scrollTop: $(linkHref).offset().top - headerHeight
                  }, 800);
                  e.preventDefault();
                });
        }
          // code for lightbox
          $(".img").click(function(){
            $src=$(this).attr("src");
              if(!$("#light-box").length > 0) {
                //creates a new div and includes lightbox properties
                $("#mygrafix").append("<div id='light-box'><span class='material-icons'>close</span><img src=''></div>");
                $("#light-box").show();
                $("#light-box img").attr("src",$src);

                $("#light-box").append("<div id='next'<span class ='next'>-></span></div>");
                $("#light-box").append("<div id='prev'<span class ='prev'><-</span></div>");

              }else{
                $("#light-box").show();
                $("#light-box img").attr("src",$src);
              }
            });

            $("#mygrafix").on("click", "#light-box span", function() {
              $("#light-box").hide();
            });
          // jquery image slider
            $('.next').on('click', function(){
              var currentImg = $('.active');
              var nextImg = currentImg.next();

              if(nextImg.length){
                currentImg.removeClass('active').css('z-index', -10);
                nextImg.addClass('active').css('z-index', 10);
              }
            });

            $('.prev').on('click', function(){
              var currentImg = $('.active');
              var prevImg = currentImg.prev();

              if(prevImg.length){
                currentImg.removeClass('active').css('z-index', -10);
                prevImg.addClass('active').css('z-index', 10);
              }
            });

        // Code for Accordion

        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].onclick = function(){
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            }
        }

});
