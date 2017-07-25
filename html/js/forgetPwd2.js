// JavaScript Document
$(function() {
	// 密码切换按钮
	$(".l_pswBtn").on("click",function(e) {
		$(this).toggleClass("l_pswBtn2");
		$(this).hasClass("l_pswBtn2")?$("#phoneNum").prop("type","text"):$("#phoneNum").prop("type","password");
	})
	// 密码切换按钮
	$(".l_uncheck").on("click",function(e) {
		$(this).toggleClass("l_checked");
	})
	$(".nextBtn").on("click",function(){

			var newpwd = $("#newpwd").val(),
			    newpwd2 = $("#newpwd2").val();
			
			if(newpwd == ""){
				swal(
					'新密码不能为空',
					'',
					'warning'
				)
				return false;
			}else if(!(/^[A-Za-z0-9]+$/.test(newpwd))){
				swal(
					'密码格式不正确',
					'',
					'warning'
				)
				return false;
			}else if(newpwd2 == ""){
				swal(
					'确认密码不能为空',
					'',
					'warning'
				)
				return false;
			}else if(!(/^[A-Za-z0-9]+$/.test(newpwd2))){
				swal(
					'密码格式不正确',
					'',
					'warning'
				)
				return false;
			}else if(newpwd !== newpwd2){
				swal(
					'确认密码和新密码不相同',
					'',
					'warning'
				)
				return false;
			}else{
				window.location.href="https://www.caifupad.com/";
		    }

	})
	
})
