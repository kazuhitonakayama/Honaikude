$(function(){
	
	var
	  winW = $(window).width(),
		winH = $(window).height(),
		nav = $('#mainnav ul a'),
		curPos = $(this).scrollTop();
	
	if (winW > 800){
		var headerH =0;
	}
	else{
		var headerH =70;
	}
	
	$(nav).on('click', function(){
  	var $el = $(this),
		id = $el.attr('href');
 		$('html, body').animate({
   		scrollTop: $(id).offset().top - headerH
 		}, 500);
		if (winW < 890){
			$('#menuWrap').next().slideToggle();
			$('#menuBtn').removeClass('close');
		}
 		return false;
	});
	
	$('.panel').hide();
	$('#menuWrap').toggle(function(){
		$(this).next().slideToggle();
		$('#menuBtn').toggleClass('close');
	},
	function(){
		$(this).next().slideToggle();
		$('#menuBtn').removeClass('close');
	});
	$('h1.ourmission').hide().fadeIn(5000);
	$('span.large').hide().fadeIn(50);
	$('h1.logo-top').hide().fadeIn(5000);
	$('div.pavillion-first-title').hide().fadeIn(5000);
	$('div.pavillion-first-text').hide().fadeIn(10000);
	$('div.pavillion-second-title').hide().fadeIn(5000);
	$('div.pavillion-second-text').hide().fadeIn(10000);
});

