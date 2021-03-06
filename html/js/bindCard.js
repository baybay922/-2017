// JavaScript Document
$(function() {
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
		$("input:visible").on("focus",function () {
			var placeholder = $(this).attr("placeholder");
			$(this).attr("placeholder","").on("blur",function () {
				$(this).attr("placeholder",placeholder);
			})
		})

		$("#l_next").on("click",function(){
			var uId = $("#userName").val(),
					idCard = $("#idCard").val();
			if (uId == "") {
					swal('请填写真实姓名','','warning');
			}else if (idCard == "") {
					swal('请填写身份证号','','warning');
			}else{
					alert("走你")
			}
		})
		$("#l_submit").on("click",function(){
			var bankCard = $("#bankCard").val(),
					telNum = $("#telNum").val();
			if (bankCard == "") {
					swal('请输入银行卡号','','warning');
			}else if (telNum == "") {
					swal('请输入手机号','','warning');
			}else{
					alert("走你")
			}
		})

})
