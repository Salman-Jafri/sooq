$(document).ready(function(e){
	$('#btn-register').on('click',function(e){
		$('#error-msg-div').addClass('d-none');
		var registration_form = $("#registration-form")[0];
		if (registration_form.checkValidity())
		{
			let contact_number = $('#member_contact').val().length;
			if(contact_number!=8)
			{
				$('#error-msg-div').removeClass('d-none');
				$('#response-msg').html('Contact Number should be 8 characters only');
				$('#response-msg').css('color','red');
				return false;
			}
			
			let form_data = new FormData(registration_form);
			// form_data.append(csrf_token_name,csrf_token_value);
		  	$.ajax({
		      url:base_url+'register/pro',
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
		   registration_form.reportValidity()
		}
		       //Validate Form
	});

	$('#member_contact').on('paste',function(e){
		if (e.originalEvent.clipboardData.getData('Text').match(/[^\d]/)) {
		       e.preventDefault();
		   }
	});

	

	$('#username').on('paste',function(e){
		if (e.originalEvent.clipboardData.getData('Text').match(/\s/g)) {
		       e.preventDefault();
		   }
	});
}); // END OF READY FUNCTION