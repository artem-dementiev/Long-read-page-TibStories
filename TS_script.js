/*Preloader*/
$(window).on('load', function () {

});

/*Anchors*/
window.addEventListener('scroll', function(e) {
    var nav = document.querySelectorAll('article[id^="chapter"]');//
    for (var i = 0; i < nav.length; i++) {
    	// console.log(nav[i].id);
        document.querySelector('a[href="#' + nav[i].id + '"]').className=((1 >= nav[i].getBoundingClientRect().top 
        	&& nav[i].getBoundingClientRect().top >= 1-nav[i].offsetHeight) ? 'red' : '');
        // console.log('a[href="#' + nav[i].id + '"]');
    }
}, false);

/*Up-Down buttons*/
$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()>40)
		{
			$(".up-btn").fadeIn();
		}else
		{
			$(".up-btn").fadeOut();
		}
		var height=$(document).height();
		var scroll=$(this).scrollTop();

		if($(this).scrollTop()>$(document).height()-1202)
		{
			$(".down-btn").fadeOut();
		}else
		{
			$(".down-btn").fadeIn();
		}
	}); 
	$(".up-btn").click(function(){
		$('html ,body').animate({scrollTop : 0}, 800);
	});
	$(".down-btn").click(function(){
		$('html ,body').animate({scrollTop : $(document).height()}, 800);
	});
	$(".info-btn").click(function(){
		$('main').css('filter','blur(5px)');
		$('.info').fadeIn();
		// $('.info').style.visibility = visible;
	});
	$('.close-popup').click(function(){
		$('.info').fadeOut();
		$('main').css('filter','none');
	});


	$(document).mouseup(function(e){
		var popup = $('info');
		if(e.target!=popup[0]&&popup.has(e.target).length === 0){
			$('.info').fadeOut();
			$('main').css('filter','none');
		}
	});
});