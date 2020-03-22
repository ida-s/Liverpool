// Smooth Scroll
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
});

// Responsive Nav (Home)
$(document).ready(function(){
  $('.home-menu').click(function(){
    $('ul').toggleClass('active');
    $('.logo-container').toggleClass('logo-clicked');
  })
})

// Responsive Nav
$(document).ready(function(){
  $('.menu').click(function(){
    $('ul').toggleClass('active');
    $('img').toggleClass('hide');
    $('#main-nav').toggleClass('nav');
  })
})

// Scroll To Top
$(document).ready(function(){
  $(window).scroll(function(){
    if ($(window).scrollTop() > 300){
      $('.go-top').css({
        "display":"block" 
      });
    }else{
      $('.go-top').css({
        "display":"none" 
      });
    }
  });

  $('.go-top').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0},'500');
})
})