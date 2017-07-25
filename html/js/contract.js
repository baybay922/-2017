// JavaScript Document
$(function() {
		//阻止浏览量默认滚动
		var overscroll = function(el) {
		  el.addEventListener('touchstart', function() {
		    var top = el.scrollTop
		      , totalScroll = el.scrollHeight
		      , currentScroll = top + el.offsetHeight
		    //If we're at the top or the bottom of the containers
		    //scroll, push up or down one pixel.
		    //
		    //this prevents the scroll from "passing through" to
		    //the body.
		    if(top === 0) {
		      el.scrollTop = 1
		    } else if(currentScroll === totalScroll) {
		      el.scrollTop = top - 1
		    }
		  })
		  el.addEventListener('touchmove', function(evt) {
		    //if the content is actually scrollable, i.e. the content is long enough
		    //that scrolling can occur
		    if(el.offsetHeight < el.scrollHeight)
		      evt._isScroller = true
		  })
		}
		overscroll(document.querySelector('.l_NewScroll'));
		document.body.addEventListener('touchmove', function(evt) {
		  //In this case, the default behavior is scrolling the body, which
		  //would result in an overflow.  Since we don't want that, we preventDefault.
		  if(!evt._isScroller) {
		    evt.preventDefault()
		  }
		})
		//阻止浏览量默认滚动----结束
		//
		$("#headList").on("click","li",function(){
			var thisInd = $(this).index(),	
				pageW= $(".pages").width();
			$(".page").scrollTop(0);
			$(this).find("a").addClass("cur").parent().siblings("li").find("a").removeClass("cur");
			$(".pages").css({
				"marginLeft": -(thisInd * pageW)+"px"
			})
			if(thisInd == 0){
				
			}else if(thisInd == 1){

			}else{
				return false;
			}
		})
		$(".container").on("touchmove",function(evt){
			evt.stopPropagation();
		}).on("scroll",function(){

			if(publicJS.scrollLoading("page","container")){
				alert("11")
			}
		})

})
