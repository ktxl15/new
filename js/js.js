$(document).ready(function(){
	$('.top_content_h1').addClass('add_scroll')
	var i = 0
	$('.top_content_right_li').eq(0).click(function(){
		i--
		if(i < 0){
			i = $('.top_video').length - 1
		}
		var w = $('.top_video').width()
		$('.top_back').css({'margin-left':i*-w})
	})
	$('.top_content_right_li').eq(1).click(function(){
		i++
		if(i > $('.top_video').length - 1){
			i = 0
		}
		var w = $('.top_video').width()
		$('.top_back').css({'margin-left':i*-w})
	})
	$('.top_foot_box').click(function(){
		var hei = $('.top').height()
		$('html,body').animate({'scrollTop':hei},1000)
	})
	$('.top_li_list').click(function(){
		var index = $(this).index()
		var hei = $('.top').height()
		var hei = hei*2
		$('html,body').animate({'scrollTop':index*hei},1000)
	})
	$(window).scroll(function(){
		var top = $(window).scrollTop()
		var top_head = $('.top').height()
		var top_head_helf = top_head/5
		var top_head_helf1 = top_head
		var top2 = $('.about').height()
		var top3 = top2 + top_head
		if(top>top_head_helf){
			$('.about_h1').addClass('add_scroll')
		}
		if(top>top_head_helf1){
			$('.image_main').addClass('add_scroll1')
		}
		if(top>top3){
			$('.image_text').addClass('add_scroll3')
		}
	})
})