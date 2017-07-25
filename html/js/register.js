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

		// 输入框公共方法
		$(".inputAll").on("focus",function(){
			publicJS.inpputFocus($(this));
		})
		$(".inputAll").on("blur",function(){
			$(this).siblings(".l_del").hide();
		})
		$(".l_del").on("touchend",function(e) {
			e.stopPropagation();
			e.preventDefault(); //阻止浏览器元素默认行为
			$(this).siblings("input:visible").val("");
		})
	//用户名前端验证
	$("#userID").on("blur",function(e){
		e.stopPropagation();
		var name = $("#userID").val(),
				el = $(this);

		//用户名为空
		if(name==""){
			el.css({"border-bottom":"solid 1px #ffc281"}).next().text("用户名不能为空").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
			$("#load").removeClass("test1");

		//用户名不合法
		}else if((/[^\w\u4e00-\u9fa5,-]/g.test(name))){
			el.css({"border-bottom":"solid 1px #ffc281"}).next().text("您输入的用户名含有非法字符").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
			$("#load").removeClass("test1");

			//用户名长度不合法
		}else if(name.length<4||name.length>20){
			el.css({"border-bottom":"solid 1px #ffc281"}).next().text("您输入的用户名长度不正确").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
			$("#load").removeClass("test1");
		}else{
				el.css({"border-bottom":"solid 1px #1ad8b0"}).next().hide();
				$("#load").addClass("test1");
				return false;
		}
		publicJS.inpputBlur($(this));
	})
	//手机号码格式前端验证
	$("#telNum").on("blur",function(e){
		e.stopPropagation();
		var el = $(this);
		if ($("#telNum").val() == "") {
			el.css({"border-bottom":"solid 1px #ffc281"}).next().text("请输入手机号码").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
			$("#load").removeClass("test2");
		}else if (!(/^1[3|4|5|8|7][0-9]\d{4,8}$/.test($("#telNum").val()))) {
			el.css({"border-bottom":"solid 1px #ffc281"}).next().text("请输入正确的手机号码").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
			$("#load").removeClass("test2");
		}else{
			$("#load").addClass("test2");
			el.css({"border-bottom":"solid 1px #1ad8b0"}).next().hide();
			$("#telNum").css({"border-bottom":"solid 1px #1ad8b0"});
		};

	});

	// 获取验证码按钮点击验证手机号码
	$("#checkCodeB").on("click",function(e){
		e.stopPropagation();
		var el = $(this);
		if ($("#load").hasClass("test2")) {
			//此处添加向用户手机发送验证码短信功能
			publicJS.countDown(60,el);
		}else{
			$("#telNum").css({"border-bottom":"solid 1px #ffc281"}).next().text("请输入正确的手机号码").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
			$("#load").removeClass("test2");
		};
	});

	//短信验证码前端验证
	$("#checkCode").on("blur",function(e){
		e.stopPropagation();
		var el = $(this);
			//验证码为空
		if(el.val()==""){
			el.css({"border-bottom":"solid 1px #ffc281"}).next().text("验证码不能为空").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
			$("#load").removeClass("test3");

			//验证码不合法
		}else if((/[^0-9]/g.test(el.val()))){
			el.css({"border-bottom":"solid 1px #ffc281"}).next().text("您输入的验证码含有非法字符").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
			$("#load").removeClass("test3");

			//验证码长度不合法
		}else if(el.val().length>6){
			el.css({"border-bottom":"solid 1px #ffc281"}).next().text("您输入的验证码长度不正确").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
			$("#load").removeClass("test3");
		}else{
			$("#load").addClass("test3");
			$("#checkCode").css({"border-bottom":"solid 1px #1ad8b0"}).next().hide();
			publicJS.inpputBlur($(this));
		}
	})

	//密码前端验证
	$("#passWord").on("blur",function(e){
		e.stopPropagation();
		var el = $(this);
			//密码为空
		if($(this).val()==""){
			el.next().text("密码不能为空").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
			el.css({"border-bottom":"solid 1px #ffc281"});
			$("#load").removeClass("test4");
			// console.log(index);

			//密码不合法
		}else if((/[^A-Za-z0-9]/g.test($(this).val()))){
			el.next().text("您设置的密码含有非法字符").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
			el.css({"border-bottom":"solid 1px #ffc281"});
			$("#load").removeClass("test4");

			//密码长度不合法
		}else if($(this).val().length<6||$(this).val().length>16){
			el.css({"border-bottom":"solid 1px #ffc281"}).next().text("您设置的密码长度不正确").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
			$("#load").removeClass("test4");
		}else{
			$("#load").addClass("test4");
			el.css({"border-bottom":"solid 1px #1ad8b0"}).next().hide();
			publicJS.inpputBlur($(this));
			$(".l_regTip").hide();
		}
	})

	//登录按钮异步验证
	$("#load").on("click",function() {


	 	//用户名密码都不为空
		if($("#load").hasClass("test2") && $("#load").hasClass("test3") && $("#load").hasClass("test4") ){
			if ($(".l_uncheck").hasClass("l_checked")) {
				alert('走你');
			}else{
				swal(
					'请勾选同意《注册协议》',
					'',
					'warning'
				)
			}
		}else{
			swal(
				'请完善用户信息',
				'',
			  'warning'  //感叹号图标
			)
		}
	})

	// 密码切换按钮
	$(".l_pswBtn").on("click",function(e) {
		e.stopPropagation();
		e.preventDefault(); //阻止浏览器元素默认行为
		$(this).toggleClass("l_pswBtn2");
		$(this).hasClass("l_pswBtn2")?$("#passWord").prop("type","text"):$("#passWord").prop("type","password");
	})
	// 密码切换按钮
	$(".l_uncheck").on("click",function(e) {
		e.stopPropagation();
		e.preventDefault(); //阻止浏览器元素默认行为
		$(this).toggleClass("l_checked");
	})

})
