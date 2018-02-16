$(document).ready(function(){
  $('.navbar-toggle').on('click', function(){
    $('nav').addClass('bg-light');
  });

  $(window).on('scroll', function(){
    if ($(window).scrollTop() > 0) $('nav').addClass('bg-light');
    else  $('nav').removeClass('bg-light');
  });

  $('.nav a').on('click', function(){
    if ($('.navbar-toggle').css('display') != 'none')
      $('.navbar-toggle').click();
  });

  $('.portfolio-img').on('mouseover', function(e) {
    $(e.target).parent().addClass('white-background');
  }).on('mouseleave', function(e){
    $(e.target).parent().removeClass('white-background');
  })


});
