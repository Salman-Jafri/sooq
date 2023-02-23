function fn_get_makes(origin_id)
{
	var m;
	$.ajax({
		url:base_url+'members/get_makes',
		type:'POST',
		async:false,
		data:{origin_id:origin_id},
		success:function(msg)
		{
			m=msg;
		}
	});
	return m;
}
function fn_get_models(make_id)
{
	var m;
	$.ajax({
		url:base_url+'members/get_models',
		type:'POST',
		async:false,
		data:{make_id:make_id},
		success:function(msg)
		{
			m=msg;
		}
	});
	return m;
}
function fn_check_extension(file,type='a')
{
	var validExtensions = ['jpg','jpeg','png','gif','bmp'];
    var ext  = file.name.split('.').pop().toLowerCase();
    if (validExtensions.indexOf(ext) == -1) {
    	if(type=='a')
    	{
        	$('#ext-error-msg').html("<i>(Only "+validExtensions.join(', ')+" are allowed)</i>");
        }
        else if(type=='e')
        {
        	$('#e-ext-error-msg').html("<i>(Only "+validExtensions.join(', ')+" are allowed)</i>");
        }
        return 'dont';
    }
    else
    {
    	if(ext=='jpg' || ext=='jpeg' || ext=='png' || ext=='bmp' || ext=='gif')
    	{
    	    var icon = '<i class="fas fa-file-image fa-lg" style="color:#0754f9;"></i>';
    	}
    	return icon;
    }
}
function fn_img_counter()
{
	setTimeout(function(){
		let counter = $('.img-files').length;
		if(counter>1)
		{
			$('.img-div:first').addClass('img-div-selected');
			$('.img-div:first').find('.selected-main-img').removeClass('d-none');
			$('.img-files:first').attr('data-ismain','yes');
			$('#multi-img-msg').removeClass('d-none');
		}
		else if(counter==1)
		{
			$('.img-div').addClass('img-div-selected');
			$('.img-div').find('.selected-main-img').removeClass('d-none');
			$('.img-files').attr('data-ismain','yes');
			$('#multi-img-msg').addClass('d-none');	
		}
		else
		{
			$('#multi-img-msg').addClass('d-none');	
		}

	},500);
}
function fn_generate_required(form)
{
	var flag=0;
	$(form+' .clrreq').remove();
	$(form+' .ifrequired').each(function(){
		var id = $(this).attr('id');
		var selector = '#'+id;
		if($(selector).val()=="")
		{
			$('<p class="clrreq help-block text-red" style="color:red;">*Required</p>').hide().fadeIn('slow').insertAfter(selector);
			flag++;
		}	
	});
	if(flag>0)
	{
		return 'yes';
	}
}

function fn_reload_ads()
{
	$.ajax({
		url:base_url+'members/reload_ads',
		type:'POST',
		success:function(msg)
		{
			let res = $.parseJSON(msg);
			$('#active-ads-count').html(res[0]);
			$('.show-active-cars').html(res[1]);

			$('#inactive-ads-count').html(res[2]);
			$('.show-inactive-cars').html(res[3]);

			$('#pending-ads-count').html(res[4]);
			$('.show-pending-cars').html(res[5]);

			$('#declined-ads-count').html(res[6]);
			$('.show-declined-cars').html(res[7]);

		}
	});
}
$(document).ready(function(e){

	// $('.dt').DataTable();
	var fileList = [];
	var efileList= [];
	function formatColors (mycolor) {
	  var data_color = $(mycolor.element).data('color');
	  if(data_color !=undefined)
	  {
		  var colors = $('<span><div style="background-color:'+data_color+' !important;" class="color-options">&nbsp;</div> '+mycolor.text+'</span>');
		  return colors;
	  }
	};

	$('#color_interior').select2({
		templateResult: formatColors
	});
	$('#color_exterior').select2({
		templateResult: formatColors
	});

	$('#e_color_interior').select2({
		templateResult: formatColors
	});
	$('#e_color_exterior').select2({
		templateResult: formatColors
	});
	$('#origin_id').on('change',function(e){
		var origin_id = $(this).val();
		var makes = fn_get_makes(origin_id);
		$('#make_id').html(makes);
	});

	$('.make_id').on('change',function(e){
		var make_id = $(this).val();
		var models = fn_get_models(make_id);
		$('.model_id').html(models);
	});

	$('#browse-files').on('click',function(e){
		$('#car_uploads').trigger('click');
		$('#ext-error-msg').html("");
	});

	$('#car_uploads').on('change',function(e){
		var files = e.target.files;
		$.each(files,function(i,file){
			var ve = fn_check_extension(file);
			if(ve!='dont')
			{
				fileList.push(file);
				if(dvtype=='mobile')
				{
					$("#images-holder").append('<div class="col-md-12"><div class="img-div img-files" id="'+file+'" data-ismain="no" data-filename="'+file.name+'"><div class="selected-main-img text-success d-none" ><span class="bg-white"><i class="fas fa-check p-1"></i></span></div><img src="'+window.URL.createObjectURL(file)+'" class="img-fluid"><div class="mytext text-danger"><span class="bg-danger p-1 remove-img"><i class="fas fa-trash text-white"></i></span></div></div></div>');
				}
				else
				{
        			$("#images-holder").append('<div class="col-md-2"><div class="img-div img-files" id="'+file+'" data-ismain="no" data-filename="'+file.name+'"><div class="selected-main-img text-success d-none" ><span class="bg-white"><i class="fas fa-check p-1"></i></span></div><img src="'+window.URL.createObjectURL(file)+'" class="img-fluid"><div class="mytext text-danger"><span class="bg-danger p-1 remove-img"><i class="fas fa-trash text-white"></i></span></div></div></div>');

				}
				// $('#file-tbody').append('<tr><th>'+ve+'</td><th class="tr-files" id="'+file+'">'+file.name+'</th><th><a href="javascript:void(0);" class="rmv-file text-danger"><i class="fas fa-times"></i></a></th></tr>');
			}
		});
		fn_img_counter();
	});

	$(document).on('click','.remove-img',function(e){
		$(this).parent().parent().parent().remove();
		fn_img_counter();
	});

	$(document).on('click','.img-div',function(e){
		$('.img-div').removeClass('img-div-selected');
		$('.selected-main-img').addClass('d-none');
		$('.img-div').attr('data-ismain','no');
		$(this).addClass('img-div-selected');
		$(this).find('.selected-main-img').removeClass('d-none');
		$(this).attr('data-ismain','yes');
	});

	$('#btn-post-ad').on('click',function(e){
		$('#image-required').addClass('d-none');
		var frm = '#carAddForm';
		var addForm =$(frm)[0];
		if(fn_generate_required(frm)=='yes'){
			$('#carAddForm')[0].scrollIntoView({
				behavior: "smooth", // or "auto" or "instant"
				block: "start" // or "end"
			});
			return false;
		}
		var form_data = new FormData(addForm);
		var cover_img='none';
		if($('.img-files').length>0)
		{
			fileList.forEach(function (file) {
				$('.img-files').each(function(e){
					if($.trim($(this).attr('data-filename'))==file.name)
					{
			    		form_data.append('car_uploads[]',file);
			    	}
			    	if($(this).attr('data-ismain')=='yes')
			    	{
			    		cover_img = $(this).attr('data-filename');
			    	}
				});
	        });
		}
		else
		{
			$('#car_uploads').val(null);
			fileList=[];
		}
		if(cover_img=='none')
		{
			$('#image-required').removeClass('d-none');
			return false;
		}
		form_data.append('cover_img',cover_img);
		form_data.append('cpage',cpage);
		$.ajax({
			url:base_url+'members/post_ad_pro',
			type:'POST',
			processData:false,
			contentType: false,
			data:form_data,
			success:function(msg)
			{
				var res=$.parseJSON(msg)
				if(res[1]=='success')
				{
					show_notification('success','Added Successfully');
					if(cpage=='office')
					{
						$('#dt').DataTable().ajax.reload();
						$('#post-ad-modal').modal('hide');
					}
					addForm.reset();
					$('#car_uploads').val(null);
					fileList=[];
					$('#images-holder').html("");
					// $('#new-modal').modal('hide');
					if(isNaN(res[2]))
					{
						show_notification('warning',res[2]);
					}
				}
				else if(res[1]=='error')
				{
					show_notification('error','Unexpeced Error Try Again');
				}
				else
				{
					show_notification('warning',res[1]);	
				}

			}
		});
		// ajax_insert(addForm,base_url+'cars/add','','#dt');
	});

	$('#edit-ad-modal').on('show.bs.modal',function(e){
		let car_id = e.relatedTarget.getAttribute('data-id');
		$('#hidden-val').val(car_id);
		$.ajax({
			url:base_url+'members/edit_ad',
			type:'POST',
			data:{car_id:car_id},
			success:function(msg)
			{
				let res = $.parseJSON(msg)
				// $('#e_origin_id').val(res[0]);
				$('#e_make_id').val(res[1]);
				$('#e_model_id').html(res[2]);
				$('#e_year').val(res[3]);
				$('#e_cylinders').val(res[4]);
				$('#e_transmission').val(res[5]);
				$('#e_ckeys').val(res[6]);
				$('#e_color_interior').val(res[7]);
				$('#e_color_exterior').val(res[8]);
				$('#e_options').val(res[9]);
				$('#e_fuel_type').val(res[10]);
				$('#e_drive_line').val(res[11]);
				$('#e_lot').val(res[12]);
				$('#e_vin').val(res[13]);
				$('#e_cost_price').val(res[14]);
				$('#e_sell_price').val(res[15]);
				$('#e_notes').val(res[16]);
				$('#e-images-holder').html(res[17]);
				setTimeout(function(){
					$('.img-files').each(function(e){
						if($(this).attr('data-ismain')=='yes')
						{
							$(this).addClass('img-div-selected');
							$(this).find('.selected-main-img').removeClass('d-none');
						}
					});
				},500);
			}
		});

	});

	$('#e-browse-files').on('click',function(e){
		$('#e_car_uploads').trigger('click');
		$('#e-ext-error-msg').html("");
	});

	$('#e_car_uploads').on('change',function(e){
		var files = e.target.files;
		$.each(files,function(i,file){
			var ve = fn_check_extension(file,'e');
			if(ve!='dont')
			{
				efileList.push(file);
        		$("#e-images-holder").append('<div class="col-md-3"><div class="img-div img-files" id="'+file+'" data-ismain="no" data-filename="'+file.name+'"><div class="selected-main-img text-success d-none" ><span class="bg-white"><i class="fas fa-check p-1"></i></span></div><img src="'+window.URL.createObjectURL(file)+'" class="img-fluid"><div class="mytext text-danger"><span class="bg-danger p-1 remove-img"><i class="fas fa-trash text-white"></i></span></div></div></div>');
			}
		});
		fn_img_counter();
	});

	$(document).on('click','.e-remove-img',function(e){
		let uid = $(this).attr('id');
		$.ajax({
			url:base_url+'members/remove_image',
			type:'POST',
			data:{uid:uid},
			context:this,
			success:function(msg)
			{
				if(msg==1)
				{
					$(this).parent().parent().parent().remove();
					fn_img_counter();
				}
			}
		});
	});

	$('#btn-update-ad').on('click',function(e){
		var frm = '#carEditForm';
		var editForm =$(frm)[0];
		if(fn_generate_required(frm)=='yes'){return false;}
		var uid       = $('#hidden-val').val();
		var form_data = new FormData(editForm);
		form_data.append('uid',uid);
		var cover_img;
		if($('.img-files').length>0)
		{
			efileList.forEach(function (file) {
				$('.img-files').each(function(e){
					if($.trim($(this).attr('data-filename'))==file.name)
					{
			    		form_data.append('car_uploads[]',file);
			    	}
			    	if($(this).attr('data-ismain')=='yes')
			    	{
			    		cover_img = $(this).attr('data-filename');
			    	}
				});
	        });
			$('.img-files').each(function(e){
				if($(this).attr('data-ismain')=='yes')
		    	{
		    		cover_img = $(this).attr('data-filename');
		    	}
			});
		}
		else
		{
			$('#car_uploads').val(null);
			efileList=[];
		}
		form_data.append('cover_img',cover_img);
		$.ajax({
			url:base_url+'members/update_ad_pro',
			type:'POST',
			processData:false,
			contentType: false,
			data:form_data,
			success:function(msg)
			{
				var res=$.parseJSON(msg)
				if(res[1]=='success')
				{
					show_notification('success','Updated Successfully');
					$('#car_uploads').val(null);
					efileList=[];
					$('#edit-ad-modal').modal('hide');
					if(isNaN(res[2]))
					{
						show_notification('warning',res[2]);
					}
				}
				else if(res[1]=='error')
				{
					show_notification('error','Unexpeced Error Try Again');
				}
				else
				{
					show_notification('warning',res[1]);	
				}
				fn_reload_ads();
			}
		});
		// ajax_insert(addForm,base_url+'cars/add','','#dt');
	});

	$('#confirmation-modal').on('show.bs.modal',function(e){
		let uid = e.relatedTarget.getAttribute('data-id');
		$('#hidden-val').val(uid);
	});

	$('#btn-conf-yes').on('click',function(e){
		let uid = $('#hidden-val').val();
		$.ajax({
			url:base_url+'members/change_ad_status',
			type:'POST',
			data:{uid:uid},
			success:function(msg)
			{
				let res = $.parseJSON(msg);
				if(res[0]=='success')
				{
					show_notification('success','AD STATUS UPDATED');
					fn_reload_ads();
				}
				else
				{
					show_notification('error','Unexpeced Error Try Again');
				}
			}
		});
		$('#confirmation-modal').modal('hide');
	});

	$('#profile_image_preview').on('click',function(e){
	  $('#profile_image').trigger('click');
	});

	$('#profile_image').on('change',function(e){
	  $('#profile_image_preview').attr('src', window.URL.createObjectURL(this.files[0]))
	});

	$('#btn-update-profile').on('click',function(e){

		let member_name = $('#member_name');
		let member_contact = $('#member_contact');
		// let member_email = $('#member_email');
		let username = $('#username');
		let errors   = 0;
		member_name.parent().find('span').addClass('d-none');
		member_contact.parent().find('span').addClass('d-none');
		// member_email.parent().find('span').addClass('d-none');
		username.parent().find('span').addClass('d-none');

		if(member_name.val()=="")
		{
			member_name.parent().find('span').removeClass('d-none');
			errors++;
		}
		
		if(member_contact.val()=="")
		{
			member_contact.parent().find('span').removeClass('d-none');
			errors++;
		}
		// if(member_email.val()=="")
		// {
		// 	member_email.parent().find('span').removeClass('d-none');
		// 	errors++;
		// }
		if(username.val()=="")
		{
			username.parent().find('span').removeClass('d-none');
			errors++;
		}
		if(errors==0)
		{
			let form_data = new FormData();
			let member_email = $('#member_email').val();
			let member_contact2 = $('#member_contact2').val();
			let member_location = $('#member_location').val();
			let member_description = $('#member_description').val();
			let banner_image  = $('#banner-img')[0].files.length;
			let profile_image = $('#profile_image')[0].files.length;
			
			form_data.append('member_name',member_name.val());
			form_data.append('member_contact',member_contact.val());
			form_data.append('username',username.val());
			form_data.append('userpass',$('#userpass').val());
			
			form_data.append('member_email',member_email);
			form_data.append('member_contact2',member_contact2);
			form_data.append('member_location',member_location);
			form_data.append('member_description',member_description);
			if(profile_image>0)
			{
				form_data.append('profile_image',$('#profile_image')[0].files[0]);
			}
			if(banner_image>0)
			{	
				form_data.append('banner_image',$('#banner-img')[0].files[0]);
			}
			$.ajax({
				url:base_url+'members/update_profile',
				type:'POST',
				processData:false,
				contentType: false,
				data:form_data,
				success:function(msg)
				{
					let res = $.parseJSON(msg);
					if(res[0]=='contact_error')
					{
						show_notification('error','Contact Already Exists');
					}
					else if(res[0]=='contact_error')
					{
						show_notification('error','Email Already Exists');
					}
					else if(res[0]=='username_error')
					{
						show_notification('error','Username Already Exists');
					}
					else if(res[0]=='success')
					{
						show_notification('success','Profile Updated');
					}
					else if(res[0]=='error')
					{
						show_notification('error','Unexpeced Error Try Again');
					}
					else
					{
						show_notification('error',res[0]);
					}
				}
			});
		}
	});

	$('#banner-img-holder').on('click',function(e){
		$('#banner-img').trigger('click');
	});

	$('#banner-img').on('change',function(e){
		$('#banner-img-holder').attr('src',window.URL.createObjectURL(this.files[0]));
	});

	$('#add-car-to-my-office-modal').on('show.bs.modal',function(e){
		let uid = e.relatedTarget.id;
		$('#hidden-val').val(uid);
		$('#car_price').val("");
		$.ajax({
			url:base_url+'members/get_ad_information',
			type:'POST',
			data:{uid:uid},
			success:function(msg)
			{
				let res = $.parseJSON(msg)
				$('#car_make').val(res['make_id']);
				$('#car_make_title').val(res['make_title']);
				$('#car_model').val(res['model_id']);
				$('#car_model_title').val(res['model_title']);
				$('#car_year').val(res['year']);
				$('#car_vin').val(res['vin']);
			}
		});

	});

	$('#btn-add-to-office').on('click',function(e){
	  let addForm=$('#add-form')[0];
	  if (addForm.checkValidity()){
	      $(this).html('<i class="fas fa-circle-notch fa-spin"></i> Adding...');
	      $(this).prop('disabled',true);
	      let ad_id    = $('#hidden-val').val();
	      let form_data = new FormData(addForm);
	      form_data.append('ad_id',ad_id);
	      form_data.append('is_ad_posted',1);
	      $.ajax({
	          url:base_url+'members/add_my_cars/ads',
	          type:'POST',
	          processData:false,
	          contentType: false,
	          data:form_data,
	          context:this,
	          success:function(msg)
	          {
	            let res = $.parseJSON(msg);
	            // $('#my_csrf').val(res[0]);
	            if(res[1]=='success')
	            {
	              $('#add-car-to-my-office-modal').modal('hide');
	              $('.actmom').each(function(e){
	              	if($(this).attr('id')==ad_id)
	              	{
	              		$(this).addClass('d-none');
	              	}
	              });
	              show_notification('success',' Added successfully');
	            }
	            else if(res[1]=='error')
	            {
	              show_notification('error',' Unexpected Error Try again');
	   			}
	            else
	            {
	              show_notification('warning', res[1]);
	            }
	            $(this).html('Add');
	            $(this).prop('disabled',false);
	          }
	      });
	  }        
	  else{
	     addForm.reportValidity();
	  }
	});

	$('#member_contact').on('paste',function(e){
		if (e.originalEvent.clipboardData.getData('Text').match(/[^\d]/)) {
		       e.preventDefault();
		   }
	});

	$('#member_contact2').on('paste',function(e){
		if (e.originalEvent.clipboardData.getData('Text').match(/[^\d]/)) {
		       e.preventDefault();
		   }
	});

	$('#username').on('paste',function(e){
		if (e.originalEvent.clipboardData.getData('Text').match(/\s/g)) {
		       e.preventDefault();
		   }
	});

	/* MOBILE SPECIFIC*/
		$('#show-active-cars').on('click',function(e){
			$(this).addClass('text-danger');
			$('#active-cars-list').removeClass('d-none');

			$('#show-inactive-cars').removeClass('text-danger');
			$('#inactive-cars-list').addClass('d-none');
			fn_reload_ads();
		});

		$('#show-inactive-cars').on('click',function(e){
			$(this).addClass('text-danger');
			$('#inactive-cars-list').removeClass('d-none');

			$('#show-active-cars').removeClass('text-danger');
			$('#active-cars-list').addClass('d-none');
			fn_reload_ads();
		});
	/* .MOBILE SPECIFIC*/


	/* NEW WORK */
		$('.current-tab').on('click',function(e){
			let current_tab = $(this).data('tab');
			alert(current_tab);
			$('#current-tab').val(current_tab);
			action='active';
			lazzy_loader(6);
		});

	/* .NEW WORK */
}); // END OF READY FUNCTION

