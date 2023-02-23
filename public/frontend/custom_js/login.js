$(document).ready(function(e){
	$('#username').on('keypress',function(e){
		let key = e.which;
		if(key==13)
		{
			$('#btn-login').trigger('click');
		}
	});
	$('#userpass').on('keypress',function(e){
		let key = e.which;
		if(key==13)
		{
			$('#btn-login').trigger('click');
		}
	});
	$('#btn-login').on('click',function(e){
		$('#error-msg-div').addClass('d-none');
		var login_form = $("#login-form")[0];
		if (login_form.checkValidity())
		{
			let form_data = new FormData(login_form);
			// form_data.append(csrf_token_name,csrf_token_value);
		  	$.ajax({
		      url:base_url+'login/pro',
		      type:'POST',
		      processData:false,
		      contentType: false,
		      data:form_data,
		      success:function(msg)
		      {
		      	 var res = $.parseJSON(msg);
		      	 // csrf_token_value = res[0];
		      	 if(res[0]=='success')
		      	 {
		      	 	window.location.href = base_url;
		      	 }
		      	 else if(res[0]=='error')
		      	 {
		      	 	
		      	 }
		      	 else
		      	 {
		      	 	$('#error-msg-div').removeClass('d-none');
		      	 	$('#response-msg').html(res[0]);
		      	 	$('#response-msg').css('color','red');
		      	 }
	      	  }
		  	});
		}	       
		else
		{
		   login_form.reportValidity()
		}
		       //Validate Form
	});

	$('#btn-reset-password').on('click',function(e){
		let mobile_number = $('#reset-password-number');
		mobile_number.removeClass('border-danger');
		if(mobile_number.val()=="")
		{
			mobile_number.addClass('border-danger');
		}
		else
		{
			$.ajax({
				url:base_url+'login/reset_password_check',
				type:'POST',
				data:{mobile_number:mobile_number.val()},
				success:function(msg)
				{
					
					let res = $.parseJSON(msg);
					if(res[0]=='success')
					{
						show_notification('success',' Your request for password has been sent to the number provided, please use the instruction provided in the sms to reset your password');
					}
					else if(res[0]=='not-found')
					{
						show_notification('warning', 'Sorry the contact number provided is not listed in our system');
					}
					else
					{
						show_notification('error',' Unexpected Error Please Try Again');
					}
				}
			});
		}
	});
}); // END OF READY FUNCTION