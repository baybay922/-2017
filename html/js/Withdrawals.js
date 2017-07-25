// JavaScript Document
$(function() {

	$(".zhezhao").on("click",function(){
		$(".zhezhao").hide();
	});
	//提现倒计时
	$("#checkCodeB").on("click",function(){
		var el = $(this);
		publicJS.countDown(60,el);
	});

	$(".qrBtn").on("click",function(){

			var moneyVal = $("#moneyInput").val(),
			    payNum = $("#payNum").val(),
			    codeNum = $("#codeNum").val();
			
			if(moneyVal == ""){
				swal(
					'充值金额不能为空',
					'',
					'warning'
				)
				return false;
			}else if(!/^([0-9.]+)$/.test(moneyVal)){
				swal(
					'请输入正确的充值金额',
					'',
					'warning'
				)
				return false;
			}else if(moneyVal<100){
				swal(
					'请输入大于100元的金额',
					'',
					'warning'
				)
				return false;
			}else if(payNum == ""){
				swal(
					'支付密码不能为空',
					'',
					'warning'
				)
				return false;
			}else if(codeNum == ""){
				swal(
					'手机验证码不能为空',
					'',
					'warning'
				)
				return false;
			}else{
				window.location.href="https://www.caifupad.com/";
		    }

	})
	
})
