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
		function alertPlus(arg) {
			var mask = $("<i>").addClass("l_mask").appendTo("body");
			this.Alert = function() {
				var ul = $("<ul>").addClass("l_alertBox").appendTo(mask),
						li1 = $("<li>").html("<p>选择成功</p><p>获取方式为：上门自提</p><p>自提地址为：<span>山西省左权县石匣乡蚂蚁沟农业合作社</span></p>").appendTo(ul),
						li3 = $("<li>").addClass("l_sure").attr("id","nextPage").text("我知道了").appendTo(ul).on("click",function(){
							alert("跳页")
						});

			};
			this.Alert2 = function() {
				var ul = $("<ul>").addClass("l_alertBox").appendTo(mask),
						li1 = $("<li>").html("<p>选择成功</p><p>获取方式为：育成后，自动获得羊款及增值款</p><p>获得时间：羊只育成后将立即返还至您的账户</p>").appendTo(ul),
						li3 = $("<li>").addClass("l_sure").attr("id","nextPage").text("我知道了").appendTo(ul).on("click",function(){
							alert("跳页")
						});

			};
			this.Confirm = function(arg) {
				var ul = $("<ul>").addClass("l_alertBox").appendTo(mask),
						li1 = $("<li>").html("<p>确认自提</p><p>羊只自提需要您去养殖牧场自提，您确认吗？</p><p>自提地址为：<span>山西省左权县石匣乡蚂蚁沟农业合作社</span></p>").appendTo(ul),
						li2 = $("<li>").addClass("l_back").text("返回").appendTo(ul).on("click",function(){
							$(".l_mask").remove();
						}),
						li3 = $("<li>").addClass("l_sure").text("确认").appendTo(ul).on("click",function(){
							$(".l_mask").remove();
							$(".l_checked").removeClass("l_checked");
							$("#takeIt").addClass("l_checked");
						});
			};
			switch (arg) {
				case "Alert":
					this.Alert();
					break;
				case "Alert2":
					this.Alert2();
					break;
				case "Confirm":
					this.Confirm();
					break;

			}

		}



		$(".l_more").on("touchend",function(e) {
			e.stopPropagation();
			$(this).hide();
			$(".l_secBox>ul").height("12rem").children("li").fadeIn(800);
		})
		$(".l_unckeck").on("touchend",function(e) {
			e.stopPropagation();
			if ($(this).attr("id") == "takeIt" ) {
				alertPlus("Confirm");
			}else {
				$(".l_checked").removeClass("l_checked");
				$(this).addClass("l_checked");
			}

		})

})
