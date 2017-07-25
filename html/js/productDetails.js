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
		var numInput = $("#number");
		$("#reduce").on("click",function(){
			var numVal = numInput.val();
			
			if(numVal < 2){
				numInput.val("1");
			}else{
				numVal--
				numInput.val(numVal)
			}
			// console.log( numVal)
		})
		$("#add").on("click",function(){
			var numVal = numInput.val(),
				sheepLast =Number($(".Surplus").attr("data-last")) ;
			
			if(numVal > sheepLast-1){
				numInput.val(sheepLast);
			}else{
				numVal++
				numInput.val(numVal)
			}
			// console.log( numVal)
		})
		numInput.on("blur",function(){
			var numVal = numInput.val(),
				sheepLast =Number($(".Surplus").attr("data-last")) ;
			if(numVal < 2){
				numInput.val("1");
			}else if(numVal > sheepLast-1){
				numInput.val(sheepLast);
			}else{
				return false;
			}
		})

		$("#unSelected").on("click",function(){
			$(this).toggleClass("Selected")
		})
		$("#ImmediateAdoption").on("click",function(){
			if(!$("#unSelected").hasClass("Selected")){
				swal(
					'请勾选协议',
					'',
					'warning'
				)
			}else{
				//跳转
			}
		})
		$("#close").on("click",function(){
			$(".maskBox").hide();
		})
})
