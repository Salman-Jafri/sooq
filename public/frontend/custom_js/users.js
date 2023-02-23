$(document).ready(function(e){
	  	$('#dt').DataTable({
		    "sAjaxSource": base_url+'admin/users/show',
		    "pageLength": 100,
		    "order": [],
		});
		
		$('#btn-add-users').on('click',function(e){
			$('#msg_username').removeClass();
			$('#msg_userpass').removeClass();
			$('#msg_username').html("");
			$('#msg_userpass').html("");
			var username = $('#username').val();
			var userpass = $('#userpass').val();
			// var pending_request = $('#pending_request').val();
			var permission={};
			$('.pchk').each(function(e){
				if($(this).is(':checked'))
				{
					permission[$(this).val()]=1;
				}
				else
				{
					permission[$(this).val()]=0;	
				}
			});
			if(username=="")
			{
				$('#msg_username').html('Required').addClass('text-danger').fadeIn('slow');
				return false;
			}
			if(userpass=="")
			{
				$('#msg_userpass').html('Required').addClass('text-danger').fadeIn('slow');
				return false;
			}
			
			var form_data    = new FormData();
			form_data.append('username',username);
			form_data.append('userpass',userpass);
			// form_data.append('pending_request',pending_request);
			form_data.append('permission',JSON.stringify(permission));
			$.ajax({
				url:base_url+'admin/users/add_users',
				type:'POST',
				processData:false,
				contentType: false,
			    data:form_data,
				success:function(response)
				{
					var res = $.parseJSON(response);
					
					if(res[0]==1)
					{
				      	show_notification('success',' Added');
				      	$('#username').val("");
				      	$('#userpass').val("");
				      	// $('#pending_request').prop('checked',false);
				      	$('.pchk').prop('checked',false);
				    }
					else if(res[0]==3)
					{
						show_notification('warning', 'User Already Exists');
					}
					else
					{
						show_notification('error',' Unexpected Error Try Again');
					}
					$('#dt').DataTable().ajax.reload();
				}
			});
		});

		$('#edit-modal').on('show.bs.modal',function(e){
			var uid = e.relatedTarget.id;
			$('#e_uid').val(uid);
			$('.epchk').prop('checked',false);
			var form_data    = new FormData();
			form_data.append('uid',uid);
			$.ajax({
				url:base_url+'admin/users/get_users',
				type:'POST',
				processData:false,
				contentType: false,
				data:form_data,
				success:function(msg)
				{
					var res = $.parseJSON(msg);
					$('#e_username').val(res[0]);
					$('#e_userpass').val(res[1]);
					if(res[2]==1){$('#per_dashboard').prop('checked',true);}
					if(res[2]==1){$('#per_dashboard1').prop('checked',true);}
					if(res[2]==1){$('#per_dashboard2').prop('checked',true);}
					if(res[2]==1){$('#per_member_category').prop('checked',true);}
					if(res[2]==1){$('#per_all_members').prop('checked',true);}
					if(res[2]==1){$('#per_all_cars').prop('checked',true);}
					if(res[2]==1){$('#per_car_origin').prop('checked',true);}
					if(res[2]==1){$('#per_car_make').prop('checked',true);}
					if(res[2]==1){$('#per_car_model').prop('checked',true);}
					if(res[2]==1){$('#per_cylinder').prop('checked',true);}
					if(res[2]==1){$('#per_transmision').prop('checked',true);}
					if(res[2]==1){$('#per_carkeys').prop('checked',true);}
					if(res[2]==1){$('#per_interior_color').prop('checked',true);}
					if(res[2]==1){$('#per_exterior_color').prop('checked',true);}
					if(res[2]==1){$('#per_option').prop('checked',true);}
					if(res[2]==1){$('#per_fuel_type').prop('checked',true);}
					if(res[2]==1){$('#per_drive_line').prop('checked',true);}
					if(res[2]==1){$('#per_odometer').prop('checked',true);}
					if(res[2]==1){$('#per_expense_cateogry').prop('checked',true);}
					if(res[2]==1){$('#per_expenses').prop('checked',true);}
					if(res[2]==1){$('#per_homepage').prop('checked',true);}
					if(res[2]==1){$('#per_slider').prop('checked',true);}
					if(res[2]==1){$('#per_footer').prop('checked',true);}
					if(res[2]==1){$('#per_learning_video').prop('checked',true);}
					if(res[2]==1){$('#per_subcribers').prop('checked',true);}
					if(res[2]==1){$('#per_translation').prop('checked',true);}

					
				}
			});
		});

		$('#btn-update-users').on('click',function(e){
			$('#msg_e_username').removeClass();
			$('#msg_e_userpass').removeClass();
			$('#msg_e_username').html("");
			$('#msg_e_userpass').html("");
			var uid =$('#e_uid').val();
			var username = $('#e_username').val();
			var userpass = $('#e_userpass').val();
			var approval_request = $('#e_approval_request').val();
			
			if(username=="")
			{
				$('#msg_e_username').html('Required').addClass('text-danger').fadeIn('slow');
				return false;
			}
			if(userpass=="")
			{
				$('#msg_e_userpass').html('Required').addClass('text-danger').fadeIn('slow');
				return false;
			}
			var permission={};
			$('.epchk').each(function(e){
				if($(this).is(':checked'))
				{
					permission[$(this).val()]=1;
				}
				else
				{
					permission[$(this).val()]=0;	
				}
			});
			var form_data    = new FormData();
			form_data.append('uid',uid);
			form_data.append('username',username);
			form_data.append('userpass',userpass);
			form_data.append('approval_request',approval_request);
			
			form_data.append('permission',JSON.stringify(permission));
			$.ajax({
				url:base_url+'admin/users/update_users',
				type:'POST',
				processData:false,
				contentType: false,
			    data:form_data,
				success:function(response)
				{
					
					var res = $.parseJSON(response);
					if(res[0]==1)
					{
				      	show_notification('success',' Updated');
				    }
				    else if(res[0]==3)
				    {
				    	show_notification('warning', 'User Already Exists');
				    }
					else
					{
						show_notification('error',' Unexpected Error Try Again');
					}
					$('#dt').DataTable().ajax.reload();
				}
			});
		});

		$(document).on('click','#btn-delete',function(e){
			var unique_id  = $('#delete-id').val();
			var myFormSubmission = base_url+'admin/users/delete';
			ajax_delete(unique_id,myFormSubmission,'#dt');
		});
		
});