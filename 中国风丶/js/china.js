$(function(){
	$("section > ul > li div:nth-child(1)").click(function(){
		$(".intro").eq(0).show(1000)
		$(".know").fadeOut(1000)
	})
	$(".intro_jieshao img").click(function(){
		$(".intro").eq(0).hide(1000)
		$(".know").fadeIn(1000)
	})
	$("section > ul > li div:nth-child(2)").click(function(){
		$(".intro").eq(2).show(1000)
		$(".know").fadeOut(1000)

		
	})
	$(".intro_jieshao img").click(function(){
		$(".intro").eq(2).hide(1000)
		$(".know").fadeIn(1000)

	})
	$("section > ul > li div:nth-child(3)").click(function(){
		$(".know").fadeOut(1000)

		$(".intro").eq(1).show(1000)
	})
	$(".intro_jieshao img").click(function(){
		$(".intro").eq(1).hide(1000)
		$(".know").fadeIn(1000)

	})
	$("section > ul > li div:last-child").click(function(){
		$(".know").fadeOut(1000)

		$(".intro").eq(3).show(1000)
	})
	$(".intro_jieshao img").click(function(){
		$(".intro").eq(3).hide(1000)
		$(".know").fadeIn(1000)

	})
	$(".three ul li:nth-child(1)").click(function(){
		$(this).children().css({"background":"rgba(238,238,238,0.6)","font-family":"ddd"})
		$(".know").fadeOut(1000)

		$(".three .intro1").eq(0).show(1000)
	})
	$(".three .intro1 img").click(function(){
		$(".intro1").hide(1000)
		$(".know").fadeIn(1000)
	
	})
	$(".three ul li:nth-child(2)").click(function(){
		$(this).children().css({"background":"rgba(238,238,238,0.6)","font-family":"ddd"})
		$(".three .intro1").eq(1).show(1000)
		$(".know").fadeOut(1000)

		
	})
	$(".three ul li:nth-child(3)").click(function(){
		$(this).children().css({"background":"rgba(238,238,238,0.6)","font-family":"ddd"})
		$(".know").fadeOut(1000)

		$(".three .intro1").eq(2).show(1000)

	})
	$(".three ul li:nth-child(4)").click(function(){
		$(this).children().css({"background":"rgba(238,238,238,0.6)","font-family":"ddd"})
		$(".know").fadeOut(1000)

		$(".three .intro1").eq(3).show(1000)
		
	})
	$(".four ul li:nth-child(1)").click(function(){
		$(".know").fadeOut(1000)

		$(".four .intro2").eq(0).show(1000)
	})
	$(".four ul li:nth-child(2)").click(function(){
		$(".know").fadeOut(1000)

		$(".four .intro2").eq(1).show(1000)
		
	})
	$(".four ul li:nth-child(3)").click(function(){
		$(".know").fadeOut(1000)

		$(".four .intro2").eq(2).show(1000)
	
	})
	$(".four .intro2 img").click(function(){
		$(".intro2").hide(1000)
		$(".know").fadeIn(1000)

	})
	$(".know").click(function(){
		$(".register").show()
	})
})