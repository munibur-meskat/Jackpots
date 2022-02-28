$(function(){
  $(window).scroll(function(){
      var scrolling = $(this).scrollTop();

      if(scrolling > 200){
          $('.navbar').addClass('bg');
      }
      else{
          $('.navbar').removeClass('bg');
      }
  });
   //   Game Slide 
$('.game_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 700,
  arrows: false,
  dots:true,
  infinite: true,
});
  //   Game Slide
// ===============
    
// Tournnment------
$('.tccr').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows:false,
  vertical:true,
  autoplaySpeed: 500, 
});
// Tournnment------
//   wow js 
new WOW().init();
//   wow js 

})
// ===============
 
$(window).on('scroll', function(event){
  if ($(this).scrollTop() > 500) {
   $('.top_btn').fadeIn(200)
  } 
  else {
    $('.top_btn').fadeOut(200)
  }
});
// Animate the scroll to top 

$('.top_btn').on('click', function(event){
  event.preventDefault();

  $('html, body').animate({
    scrollTop: 0},
    '1000');
});