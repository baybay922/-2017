// JavaScript Document
$(function() {
	$(".czBtn").on("click",function(){

			var moneyVal = $("#moneyInput").val();
			
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
			}else{
				window.location.href="https://www.caifupad.com/";
		    }

	})
	
})
