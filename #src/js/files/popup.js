/* Modal 1  */

$(function () {
	$('#callback-button').click(function () {
	  $('#modal-1').addClass('modal_active');
	  $('body').addClass('hidden');
	});
  
	// $('.modal__close-button').click(function () {
	//   $('#modal-1').removeClass('modal_active');
	//   $('body').removeClass('hidden');
	// });
  
	$('.modal').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		 $(this).removeClass('modal_active');
		 $('body').removeClass('hidden');
	  }
	});
 });

 /* Modal 1  */

/* Modal 2  */

 $(function () {
	$('#callback-button2').click(function () {
		$('#modal-2').addClass('modal_active');
	  $('body').addClass('hidden');
	});
  
	// $('.modal__close-button').click(function () {
	//   $('#modal-2').removeClass('modal_active');
	//   $('body').removeClass('hidden');
	// });
  
	$('#modal-2').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		 $(this).removeClass('modal_active');
		 $('body').removeClass('hidden');
	  }
	});
 });

 /* Modal 2  */

  /* Modal 3  */

 $(function () {
	$('#callback-button3').click(function () {
		$('#modal-3').addClass('modal_active');
	  $('body').addClass('hidden');
	});
  
	// $('.modal__close-button').click(function () {
	//   $('#modal-3').removeClass('modal_active');
	//   $('body').removeClass('hidden');
	// });
  
	$('#modal-3').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		 $(this).removeClass('modal_active');
		 $('body').removeClass('hidden');
	  }
	});
 });

  /* Modal 3  */

   /* Modal 4 */

 $(function () {
	$('#callback-button4').click(function () {
		$('#modal-4').addClass('modal_active');
	  $('body').addClass('hidden');
	});
  
	$('.modal__close-button').click(function () {
	  $('#modal-4').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});
  
	$('#modal-4').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		 $(this).removeClass('modal_active');
		 $('body').removeClass('hidden');
	  }
	});
 });
/* Modal 4 */

/* Modal 5 */

 $(function () {
	$('#callback-button5').click(function () {
		$('#modal-5').addClass('modal_active');
	  $('body').addClass('hidden');
	});
  
	$('.modal__close-button').click(function () {
	  $('#modal-5').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});
  
	$('#modal-5').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		 $(this).removeClass('modal_active');
		 $('body').removeClass('hidden');
	  }
	});
 });

/* Modal 5 */

/* Modal 6 */

 $(function () {
	$('#callback-button6').click(function () {
		$('#modal-6').addClass('modal_active');
	  $('body').addClass('hidden');
	});
  
	$('.modal__close-button').click(function () {
	  $('#modal-6').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});
  
	$('#modal-6').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		 $(this).removeClass('modal_active');
		 $('body').removeClass('hidden');
	  }
	});
 });

  /* Modal 6 */