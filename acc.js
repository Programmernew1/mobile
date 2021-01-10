$(document).ready(function() {
	$('#accordeon .acc-head').on('click', f_acc);
});

function f_acc(){
	//$('#accordeon .ac-body').slideUp(1000);
	$('#accordeon .acc-body').not(    $(this).next()   ).slideUp(1000);
	$(this).next().slideToggle(1000);}

	// $(this).find(".btn-plus span:last-child").toggleClass("active");
	// $('#accordeon .acc-head').not($(this)).find('.btn-plus span:last-child').removeClass("active");


	// document.querySelector('#ccc').addEventListener('click',function(){
	// document.querySelector('#span-btn-plus').classList.toggle('acc')
	
	// $(this).find(".btn-plus span:last-child").toggleClass("active");
	// $('#accordeon .acc-head').not($(this)).find('.btn-plus span:last-child').removeClass("active");


	document.querySelector('.acc-head').onclick = function(){
		document.querySelector('.btn-plus span:last-child').classList.toggle('nnn')
	};
	
