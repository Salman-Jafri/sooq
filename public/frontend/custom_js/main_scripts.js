	function isNumber(evt, element)
	{
	  var charCode = (evt.which) ? evt.which : event.keyCode
	  if ((charCode != 45 || $(element).val().indexOf('-') != -1) && (charCode != 46 || $(element).val().indexOf('.') != -1) && ((charCode < 48 && charCode != 8) || charCode > 57))
	  {
	    return false;
	  }
	  else 
	  {
	    return true;
	  }
	}
	function avoidSpace(event) {
	    var k = event ? event.which : window.event.keyCode;
	    if (k == 32) return false;
	}
	function check_length(form)
	{
		var flag=0;
		$(form+' .clrreq').remove();
		$(form+' .iflen').each(function(){
			var id = $(this).attr('id');
			var selector = '#'+id;
			if($(selector).val().length<3)
			{
				$('<p class="clrreq help-block text-red" style="color:red;">*Length must be 3 or more</p>').hide().fadeIn('slow').insertAfter(selector);
				flag++;
			}	
		});
		if(flag>0)
		{
			return 'yes';
		}
	}

	function check_email(form)
	{
		var flag=0;
		$(form+' .clrreq').remove();
		$(form+' .ifemail').each(function(){
			var id = $(this).attr('id');
			var selector = '#'+id;
			if(IsEmail($(selector).val())==false)
			{
				$('<p class="clrreq help-block text-red" style="color:red;">* Invalid Email address</p>').hide().fadeIn('slow').insertAfter(selector);
				flag++;
			}	
		});
		if(flag>0)
		{
			return 'yes';
		}
	}

	function IsEmail(email) 
	{
	  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  if(!regex.test(email)) {
	    return false;
	  }else{
	    return true;
	  }
	}

	function count_down_timer()
	{
		var timer = setInterval(function() {
    		var count = parseInt($('#close-counter').html());
    	    if (count !== 1) {
    	      $('#close-counter').html(count - 1);
    	    } else {
    	      clearInterval(timer);
    	      $('#popup-msg-modal').modal('hide');	
    	    }
    	}, 1000);
	}
	
	function show_notification(type,heading,text="")
	{
		// let heading = type[0].toUpperCase() + type.substring(1);
		// $.toast({
		//     heading: heading,
		//     text: text,
		//     icon: type,
		//     position: 'bottom-right',
		// });
		let notify_modal_type,notify_modal_icon,notify_modal_heading,notify_modal_text;
		if(type=='info')
		{
			notify_modal_type="bg-info";
			notify_modal_icon='<i class="fas fa-info-circle"></i>';
			notify_modal_heading=heading;
			notify_modal_text=text;
			notify_text_color = 'text-info';
		}
		if(type=='success')
		{
			notify_modal_type="bg-success";
			notify_modal_icon='<i class="fas fa-check-circle"></i>';
			notify_modal_heading=heading;
			notify_modal_text=text;
			notify_text_color = 'text-success';
		}
		if(type=='warning')
		{
			notify_modal_type="bg-warning";
			notify_modal_icon='<i class="fas fa-exclamation-circle"></i>';
			notify_modal_heading=heading;
			notify_modal_text=text;
			notify_text_color = 'text-warning';
		}
		if(type=='error')
		{
			notify_modal_type="bg-primary";
			notify_modal_icon='<i class="fas fa-times-circle"></i>';
			notify_modal_heading=heading;
			notify_modal_text=text;
			notify_text_color = 'text-primary';
		}
		$('#notify-modal-type').addClass(notify_modal_type);
		$('#notify-modal-icon').html(notify_modal_icon);
		$('#notify-modal-icon').addClass(notify_text_color);
		$('#notify-modal-heading').html(notify_modal_heading);
		$('#notify-modal-heading').addClass(notify_text_color);
		$('#notify-modal-text').html(notify_modal_text);
		$('#notify-modal-text').addClass(notify_text_color);
		$('#notify-modal').modal('show');
	}
	
	function fill_edit_fields(unique_id,selector,submission,path)
	{
		var editForm = $(selector).find('form');
		editForm.find('.hid').val(unique_id);
		var form_data = new FormData();
		form_data.append('unique_id',unique_id);
		$.ajax({
	      url:base_url+submission,
	      type:'POST',
	      processData:false,
	      contentType: false,
	      data:form_data,
	      success:function(msg)
	      {
	      	var res = $.parseJSON(msg)
	      	if(res[1]!='no results found')
	      	{
	      		$(selector).find('input,select,textarea').each(function(){
	      			var inputs =$(this);
	      			var input_name=inputs.prop('name');
	      			var input_id  =inputs.prop('id');
  			      	$.each(res[1], function(key, value){
  			      		if(key==input_name)
  			      		{
  			      			if(value==null){value='';}
  			      			$('#image-div').html("");
  			      			var extension =  value.substr( ( value.lastIndexOf('.') +1) );
  			      			extension = extension.toLowerCase();
  			      			if(extension=='jpg' || extension=='jpeg' || extension=='png' || extension=='gif')
  			      			{
  			      				$('#image-div').html('<img src="'+path+value+'" style="width:200px;height:200px;display:block;">');
							}
							else
							{
  			      				$('#'+input_id).val(value);
								
							}
  			      		}
  					});
	      		});
	      	}
	      }
	  	});
	}
		
	function ajax_delete(unique_id,submission,dt)
	{
		var len = arguments.length;
		var form_data = new FormData();
	  	// var token_name   = csrf_token_name;
	  	// var token_value  = $('#my_csrf').val();
	  	// form_data.append(token_name,token_value);
	  	form_data.append('unique_id',unique_id);
	  	$.ajax({
	      url:submission,
	      type:'POST',
	      processData:false,
	      contentType: false,
	      data:form_data,
	      success:function(msg)
	      {
	      	$('#delete-modal').modal('toggle');
	      	var res = $.parseJSON(msg)
	      	$('#my_csrf').val(res[0]);
	      	if(res[1]=='success')
	      	{
	      		if(len==3)
	      		{
	      			$(dt).DataTable().ajax.reload();
	      		}
	      		show_notification('success',' Deleted');
	      		return false;
	      	}
	      	if(res[1]=='error')
	      	{
	      		show_notification('error', 'Unexpected error try again');
	      		return false;
	      	}
	      }
	  	});
	}


	function goBack() {
	  window.history.back();
	}
	$(document).ready(function(e){
		$(this).scrollTop(0);
		//Number only
		// $('#popup-msg-modal').modal('show');
		$(document).on('keypress','.isnumber',function(e){
	 	 	return isNumber(e, this);
		});
		$(document).on('keypress','.nospace',function(e){
	 	 	return avoidSpace();
		});

		// $('#contact-modal-info').on('paste',function(e){
		// 	if (e.originalEvent.clipboardData.getData('Text').match(/[^\d]/)) {
		// 	       e.preventDefault();
		// 	   }
		// });
		// setTimeout(function(e){
		// 	$('#contact-modal').modal('show');
		// },1000);
		$('#btn-contact-modal').on('click',function(e){
			$('#errors-contact').addClass('d-none');
			let member_id = $(this).data('member');
			let contact   = $('#contact-modal-info');
			if(contact.val()=="")
			{
				$('#errors-contact').removeClass('d-none');
				$('#errors-contact').text('Required');
			}
			else if(contact.val().length!=8)
			{
				$('#errors-contact').removeClass('d-none');
				$('#errors-contact').text('Must be 8 characters long');
			}
			else
			{
			  	$.ajax({
			      url:base_url+'welcome/update_contact',
			      type:'POST',
			      data:{
			      	member_id:member_id,
			      	contact: contact.val()
			      },
			      success:function(msg)
			      {
			      	 var res = $.parseJSON(msg);
			      	 // csrf_token_value = res[0];
			      	 if(res[0]=='success')
			      	 {
			      	 	$('#contact-modal').modal('hide');
			      	 }
			      	 else
			      	 {
			      	 	$('#errors-contact').removeClass('d-none');
			      	 	$('#errors-contact').text(res[0]);
			      	 }
			      }
			  	});
			}
		});

		$('#btn-test').on('click',function(e){
			// Set the effect type
		    var effect = 'slide';

		    // Set the options for the effect type chosen
		    var options = { direction: 'right' };

		    // Set the duration (default: 400 milliseconds)
		    var duration = 700;

		    $('#if-main-menu').toggle(effect, options, duration);

		    if($('#menu-bars').hasClass('fa-rotate-90'))
		    {
		    	$('#menu-bars').removeClass('fa-rotate-90');
		    	$('.mobile-nav-overlay').removeClass('mobile-overlay-visible');
		    }
		    else
		    {
		    	$('#menu-bars').addClass('fa-rotate-90');
		    	$('.mobile-nav-overlay').addClass('mobile-overlay-visible');
		    }
		});
		$('.mobile-nav-overlay').on('click',function(e){
			$('#btn-test').trigger('click');
		});

		$('#make-id').on('change',function(e){
			var make_id = $(this).val();
			$.ajax({
				url:base_url+'welcome/get_models',
				type:'POST',
				async:false,
				data:{make_id:make_id},
				success:function(msg)
				{
					$('#model-id').html(msg);
				}
			});
		});
		
		$('#btn-subscribe-wa').on('click',function(e){
			let wa_number = $('#subscribe-wa');
			wa_number.removeClass('animate__animated')
			wa_number.removeClass('animate__headShake');
			wa_number.removeClass('border-danger');
			if(wa_number.val()=="")
			{
				setTimeout(function(){
					wa_number.addClass('animate__animated');
					wa_number.addClass('animate__headShake');
					wa_number.addClass('border-danger');	
				},500);
				// wa_number.removeClass('animate__animated animate__headShake');
			}
			else
			{
				$.ajax({
					url:base_url+'welcome/subscribe_wa',
					type:'POST',
					data:{wa_number:wa_number.val()},
					success:function(msg)
					{
						let res = $.parseJSON(msg);
						if(res[0]=='error')
						{
							$('#sb-title').html('<i class="fas fa-exclamation"></i>');
							$('#sb-title').removeClass('text-success');
							$('#sb-title').removeClass('text-warning');
							$('#sb-title').addClass('text-danger');
							$('#sb-text').text('Unexpected Error ! please try again');
						}
						else if(res[0]=='success')
						{
							$('#sb-title').html('<i class="fas fa-thumbs-up"></i>');
							$('#sb-title').removeClass('text-danger');
							$('#sb-title').removeClass('text-warning');
							$('#sb-title').addClass('text-success');
							$('#sb-text').text('Thank Your for Subscribing to our Whatsapp');
						}
						else if(res[0]=='already')
						{
							$('#sb-title').html('<i class="fas fa-info"></i>');
							$('#sb-title').removeClass('text-success');
							$('#sb-title').removeClass('text-danger');
							$('#sb-title').addClass('text-info');
							$('#sb-text').text('You Already subscribed');
						}
						$('#popup-msg-modal').modal('show');
						$('#close-counter').text(10);
						count_down_timer();
					}
				});
			}
		});

		$(document).on('click','.btn-wishlist',function(e){
			let car_id = $(this).data('id');
			let rmv    = $(this).data('rmv');
			
			$.ajax({
				url:base_url+'cars/add_to_wishlist',
				type:'POST',
				data:{car_id:car_id},

				success:function(msg)
				{
					var res=$.parseJSON(msg);
					if(res[0]=='nli')
					{
						$('#login-modal').modal('show');
					}
					else if(res[0]=='success')
					{
						$('#login-modal').modal('hide');
						if(res[1]=='added')
						{
							// alert('Added To WishList');
							$('.btn-wishlist').each(function(e){
								if($(this).data('id')==car_id)
								{
									$(this).find('i').addClass('text-danger');
									$(this).find('i').removeClass('far');
									$(this).find('i').addClass('fas');
								}
							});		
						}
						else if(res[1]=='removed')
						{
							// alert('Removed From WishList');
							$('.btn-wishlist').each(function(e){
								if($(this).data('id')==car_id)
								{
									$(this).find('i').removeClass('text-danger');
									$(this).find('i').removeClass('fas');
									$(this).find('i').addClass('far');
									if(rmv=='yes')
									{
										$(this).parent().parent().parent().parent().parent().parent().parent().remove();	
									}
								}
							});
						}
					}
					else
					{
						alert('Unexpected Error Try Again');
					}
				}
			});
		});

		$(document).on('click','.btn-call',function(e){
			let car_id = $(this).data('id');
			let dtype  = $(this).data('type');
			let dcall  = $(this).data('call');
			
			if(dcall=='call')
			{

				$.ajax({
					url:base_url+'cars/call_show_number',
					type:'POST',
					data:{car_id:car_id,dtype:dtype},
					context:this,
					success:function(msg)
					{
						var res=$.parseJSON(msg);
						if(res[0]=='nli')
						{
							// $('#login-modal').modal('show');
						}
						else if(res[0]=='success')
						{
							// $('#login-modal').modal('hide');
							$('.btn-call').each(function(e){
								if($(this).data('id')==car_id){
									if($(this).hasClass('ismobile'))
									{
										$(this).find('p').text(res[1]);
									}
									else
									{
										$(this).text(res[1]);
									}
									$(this).addClass('btn-call-mobile');

								}
							});
							$('.direct-call').each(function(e){
								if($(this).attr('id')==car_id)
								{
									$(this).attr('href','tel:'+res[1]);
								}
							});
							$(this).data('call','number');
						}
						else
						{
							alert('Unexpected Error Try Again');
						}
					}
				});
			}
			else
			{
				// if(!$(this).hasClass('btn-call-mobile'))
				// {
				// 	$(this).html('<p class="text-secondary mt-2 text-center"><i class="fas fa-phone"></i> Call</p>');
				// 	$(this).data('call','call');
				// }
				
			}
			
		});

		$(document).on('click','.count-whatsapp',function(e){
			e.preventDefault();
			// alert();
			let car_id = $(this).data('carid');
			let link   = $(this).attr('href');
			$.ajax({
				url:base_url+'cars/count_whatsapp',
				type:'POST',
				data:{car_id:car_id},
				success:function(msg)
				{
					window.location.href=link;
				}
			});
			// console.log(car_id);
		});

		$(document).on('click','.btn-wa-mobile',function(e){
			let uid = $(this).data('id');
			// alert(uid);
			$('.direct-wa').each(function(e){
				if($(this).attr('id')==uid)
				{
					let href = $(this).attr('href');
					// alert(href);
					window.open(href);
				}
			});
		});

		$(document).on('click','.btn-call-mobile',function(e){
			let nmbr = $(this).text();
			// alert(nmbr);
			let href = 'tel:'+nmbr;
			window.location.href=href;
			// let uid = $(this).data('id');
			// $('.direct-call').each(function(e){
			// 	if($(this).attr('id')==uid)
			// 	{
			// 		let href = $(this).attr('href');
			// 		window.location.href = href;
			// 	}
			// });
		});

		$(document).on('click','.btn-follow-unfollow',function(e){
			let following_id = $(this).data('id');
			$.ajax({
					url:base_url+'cars/follow_unfollow',
					type:'POST',
					data:{following_id:following_id},
					success:function(msg)
					{
						var res=$.parseJSON(msg);
						if(res[0]=='nli')
						{
							$('#login-modal').modal('show');
						}
						else if(res[0]=='success' && res[1]=='followed')
						{
							$('#login-modal').modal('hide');
							$('.btn-follow-unfollow').each(function(e){
								if($(this).data('id')==following_id){
									$(this).html('<i class="fas fa-minus"></i> UnFollow');
								}
							});
						}
						else if(res[0]=='success' && res[1]=='unfollowed')
						{
							$('#login-modal').modal('hide');
							$('.btn-follow-unfollow').each(function(e){
								if($(this).data('id')==following_id){
									$(this).html('<i class="fas fa-plus"></i> Follow');
								}
							});
						}
						else
						{
							alert('Unexpected Error Try Again');
						}
					}
				});
			
		});

		$(document).on('click','.btn-remove-follower',function(e){
			let following_id = $(this).data('id');
			$.ajax({
					url:base_url+'members/remove_follower',
					type:'POST',
					data:{following_id:following_id},
					context:this,
					success:function(msg)
					{
						var res=$.parseJSON(msg);
						
						if(res[0]=='success')
						{
							
							
							$(this).parent().parent().parent().parent().parent().parent().parent().parent().remove();
						}
						else
						{
							alert('Unexpected Error Try Again');
						}
					}
				});
			
		});

		$(document).on('click','.btn-follow',function(e){
			let car_id = $(this).data('id');
			if($(this).find('i').length==1)
			{
				$.ajax({
					url:base_url+'cars/call_show_number',
					type:'POST',
					data:{car_id:car_id},
					success:function(msg)
					{
						var res=$.parseJSON(msg);
						if(res[0]=='nli')
						{
							$('#login-modal').modal('show');
						}
						else if(res[0]=='success')
						{
							$('#login-modal').modal('hide');
							$('.btn-call').each(function(e){
								if($(this).data('id')==car_id){
									$(this).text(res[1]);
								}
							});
						}
						else
						{
							alert('Unexpected Error Try Again');
						}
					}
				});
			}
			else
			{
				$(this).html('<i class="fas fa-phone"></i> Call');
			}
			
		});	

		$('#btn-login-modal').on('click',function(e){
			$('#error-msg-div').addClass('d-none');
			var myurl        = window.location.href; 
			var login_form = $("#login-form")[0];
			if (login_form.checkValidity())
			{
				let form_data = new FormData(login_form);
				form_data.append('myurl',myurl);
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
			      	 	window.location =myurl;
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

		$('#username-modal').on('keypress',function(e){
			let key = e.which;
			if(key==13)
			{
				$('#btn-login-modal').trigger('click');
			}
		});
		$('#userpass-modal').on('keypress',function(e){
			let key = e.which;
			if(key==13)
			{
				$('#btn-login-modal').trigger('click');
			}
		});

		$('#delete-modal').on('show.bs.modal',function(e){
			var unique_id =e.relatedTarget.id;
			var btn = e.relatedTarget.getAttribute('lbl');
			$('#delete-id').val(unique_id);
			$('#btn-delete').attr('id',btn);
		});
		
		$body = $("body");
		
		

	    $(document).on({
	       ajaxStart: function(){
		        if(show_loading=='yes')
		        {
		       		$body.addClass("loading");
		        } 
	       },
	       ajaxStop: function(){ 
	       		if(show_loading=='no')
	       		{
	       			show_loading='yes';
	       		}
	       		$body.removeClass("loading");
	       }    
	    });

	});


