/* Бургер */

$('.burger').on('click', () => {
   $('.burger').toggleClass('active');
   $('.mobile nav').toggleClass('open');
   $('.mobile__nav').toggleClass('show');
	$('body').toggleClass('_lock')
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




  	  /* Анимация */

		//  function onEntry(entry) {
		// 	entry.forEach(change => {
		// 	  if (change.isIntersecting) {
		// 		change.target.classList.add('element-show');} else {
		// 			change.target.classList.remove('element-show')
		// 		}
		// 	});
		//  }
		 
		//  let options = {
		// 	threshold: [0.5] };
		//  let observer = new IntersectionObserver(onEntry, options);
		//  let elements = document.querySelectorAll('.element_animation');
		 
		//  for (let elm of elements) {
		// 	observer.observe(elm);
		//  };
		
			/* Анимация */



			/* Slider1 */
		$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:1,
    	slidesToScroll:1,
		speed:200,
  		cssEase: 'linear',
    	variableWidth:true,
		touchMove:false,
		Infinity:true,
		centerMode:false,
		initialSlide:0,
		focusOnSelect: true,
		autoplay:true,
		autoplayspeed:500,
		});



/* Slider1 */


/* Tabs */

// $(function(){
// 	$('.tabs-body').not(':first').hide()
// 	$('.tabs-head .tab').on('click', function(){
// 		$('.tabs-head .tab').removeClass('active').eq($(this).index()).addClass('active')
// 		$('.tabs-body').hide().eq($(this).index()).fadeIn()
// 		$('.slider.slick-initialized').slick("setPosition");
// 	}).eq(0).addClass('active')
// })


/* Tabs */

// $(document).ready(function(){
// 	if(!$('#modal-1').hasCLass('modal_active')){
// 		$('nav').removeClass('fixed');
// 	} else {
// 		$('nav').addClass('fixed');
// 	}
// });



$('._boosts__board').hover(
	function(){
		 $(this).find('.readMore').fadeIn(100);
	},
	function(){
		 $(this).find('.readMore').fadeOut(100);
	});



$('._boosts__rev').hover(
	function(){
		 $(this).find('.readMore').fadeIn(100);
	},
	function(){
		 $(this).find('.readMore').fadeOut(100);
	});


	$('._booster-skate__item').hover(
		function(){
			 $(this).find('.readMore2').fadeIn(100);
		},
		function(){
			 $(this).find('.readMore2').fadeOut(100);
		});

	