// JavaScript Document
$(function() {
		//tab切换
		$(".headNav").on("click","li",function(){
			var num = $(this).index();
			$(".headNav li").eq(num).addClass("cur").siblings().removeClass("cur");
			$(".couponList>div").eq($(".headNav>li").index(this)).show().siblings("div").hide();
		})

})
