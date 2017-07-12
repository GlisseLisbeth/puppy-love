

(function($) {

    $('html').removeClass('no-js');


    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    $('#welcome-down span').click(function() {
        var scrollDistance = $('#welcome').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    $('#view-more-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });

  
    var topbar = $('.topbar').height()+20;
 var height = $(window).innerHeight();
 var width = $(window).innerWidth();
  if(580 >= width){
    $('.fa-2x').removeClass('fa-2x').addClass('fa-lg');
  }
  else {
    $('.project').css({'min-height':height-topbar, 'height':'auto'});
  }
  
  $('.title').fitText(0.9,{ maxFontSize: '28px' });
  
  if ( window.location.hash ) {
    $(window.location.hash).click();
  }
  $('.social').tooltip();
});

if(screen && screen.width > 580) {
$(window).resize(function(){
 var height = $(window).innerHeight();
 var topbar = $('.topbar').height()+20;
      $('.project').css({'min-height':height-topbar});
});
}

$('body').on('click', '.project', function(){
  
  $(this).addClass('selected').siblings().addClass('deselected');
  window.location.hash = $(this).attr('id');
  $(this).siblings().children('.title').hide();
  $('.close').fadeIn();
  setTimeout(function(){
    $('.selected').children('.content').fadeIn();
  },500);
});

$('body').on('click', '.close', function(){
  $(this).fadeOut();
  window.location.hash = '';
  $('.selected').children('.content').fadeOut();
  setTimeout(function(){
  $('.selected').siblings().removeClass('deselected');
    $('.selected').removeClass('selected');
   
    setTimeout(function(){
     $('.title').fadeIn();
     $('.title').fitText(0.9,{ maxFontSize: '28px' });
    },500);
  },500); 

})();
