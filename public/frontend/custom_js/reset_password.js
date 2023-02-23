$(document).ready(function(e){
	$('#btn-reset').on('click',function(e){
		$('#error-msg-div').addClass('d-none');
		var reset_form = $("#reset-form")[0];
		if (reset_form.checkValidity())
		{
			let userpass = $('#userpass').val();
			let cuserpass = $('#cuserpass').val();
			if(cuserpass!=userpass)
			{
				$('#error-msg-div').removeClass('d-none');
				$('#response-msg').html('Password and Confirm Password does not match');
				$('#response-msg').css('color','red');
			}
			else
			{
				let form_data = new FormData(reset_form);
				// form_data.append(csrf_token_name,csrf_token_value);
			  	$.ajax({
			      url:base_url+'reset_password/pro',
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
			      	 	window.location.href = base_url+'login';
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
		}	       
		else
		{
		   reset_form.reportValidity()
		}
		       //Validate Form
	});
}); // END OF READY FUNCTION