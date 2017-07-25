// JavaScript Document
$(function() {
	//提现倒计时
	$("#checkCodeB").on("click",function(){
		var el = $(this);
		publicJS.countDown(60,el);
	});

	$(".nextBtn").on("click",function(){

			var phoneNum = $("#phoneNum").val(),
			    picNum = $("#picNum").val(),
			    codeNum = $("#codeNum").val();
			
			if(phoneNum == ""){
				swal(
					'手机号码不能为空',
					'',
					'warning'
				)
				return false;
			}else if(!(/^1[3|4|5|8|7][0-9]\d{4,8}$/.test(phoneNum))){
				swal(
					'请输入正确的手机号码',
					'',
					'warning'
				)
				return false;
			}else if(picNum == ""){
				swal(
					'图片字符不能为空',
					'',
					'warning'
				)
				return false;
			}else if(codeNum == ""){
				swal(
					'短信验证码不能为空',
					'',
					'warning'
				)
				return false;
			}else{
				window.location.href="https://www.caifupad.com/";
		    }

	})
	
})
