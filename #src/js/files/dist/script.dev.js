"use strict";

/* Бургер */
$('.burger').on('click', function () {
  $('.burger').toggleClass('active');
  $('.mobile nav').toggleClass('open');
  $('.mobile__nav').toggleClass('show');
  $('body').toggleClass('_lock');
});
/* Бургер */

/* Фиксированная шапка */
//  $(function(){
// 	$nav = $('.header__container');
// 	$nav.css('width', $nav.outerWidth());
// 	$window = $(window);
// 	$h = $nav.offset().top;
// 	$window.scroll(function(){
// 		if ($window.scrollTop() > $h){
// 			$nav.addClass('fixed');
// 		} else {
// 			$nav.removeClass('fixed');
// 		}
// 	});
// });

/* Фиксированная шапк*/
// $(document).ready(function(){
// 	$(window).on("scroll",function(){
// 	  var wn = $(window).scrollTop();
// 		if(wn > 10){
// 		 $(".header__container").css("background","#706b6b");
// 		}
// 		else{
// 		 $(".header__container").css("background","inherit");
// 		}
// 	 });
//   });
// $(document).ready(function(){
// 	$(window).on("scroll",function(){
// 	  var wn = $(window).scrollTop();
// 		if(wn > 10){
// 		 $(".button").css("border","2px solid #fff");
// 		}
// 		else{
// 		 $(".button").css("border","none");
// 		}
// 	 });
//   });

/* Slider1 */

$('.slider').slick({
  arrows: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 200,
  cssEase: 'linear',
  variableWidth: true,
  touchMove: false,
  Infinity: true,
  centerMode: false,
  initialSlide: 0,
  focusOnSelect: true,
  autoplay: true,
  autoplayspeed: 500
});
/* Slider1 */

/* Tabs */

$('._boosts__board').hover(function () {
  $(this).find('.readMore').fadeIn(100);
}, function () {
  $(this).find('.readMore').fadeOut(100);
});
$('._boosts__rev').hover(function () {
  $(this).find('.readMore').fadeIn(100);
}, function () {
  $(this).find('.readMore').fadeOut(100);
});
$('._booster-skate__item').hover(function () {
  $(this).find('.readMore2').fadeIn(100);
}, function () {
  $(this).find('.readMore2').fadeOut(100);
});