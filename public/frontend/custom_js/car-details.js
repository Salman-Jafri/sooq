if(lang=="_ar")
{
	var sdir = true;
}
else
{
	var sdir =false;
}

function allvisit()
{	
		let val = true;
		show_loading='no';
		$.ajax({
			url:base_url+'cars/view_All_details',
			type:'POST',
			data:{val:val},
			success:function(msg)
			{
				
				var res=$.parseJSON(msg);
			}
		});	
}

$(window).load(function(){
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    rtl:sdir,
    asNavFor: '#slider',
  });

  $('#slider').flexslider({
    animation: "slide",
    rtl:sdir,
    controlNav: false,
    animationLoop: false,
    slideshow: false,
	after: function(){
		allvisit();
	},
  });

});

$(document).ready(function(e){

$(document).on('click','.allclick',function(){
  allvisit();
});	
	// alert(lang);

	$('#merabtn').on('click',function(e){
		console.log('kia hai');
	});		
	$('.zoomimg').parent().zoom({
			magnify: 3,
			target: $('#ifcont').get(0)
	});

	$('.parent').on('click',function(e){
		if($(this).hasClass('zoom-active'))
		{
				$(this).removeClass('zoom-active');
				$('#ifcont').css('visibility','hidden');
				$(this).css('cursor','zoom-in');
		}
		else
		{
				$(this).addClass('zoom-active');
				$(this).css('cursor','zoom-out');
				$('#zoom-area').css('visibility','visible');
				$('#ifcont').css('visibility','visible');
		}

	});

	$('.parent').on('mouseenter',function(e){
			if(!$(this).hasClass('zoom-active'))
			{
					$(this).css('cursor','zoom-in');
			}
	});

	$('.parent').on('mouseout',function(e){
			$(this).removeClass('zoom-active');
			$('#ifcont').css('visibility','hidden');
	});

	$(document).on('mousemove', function(e){
	   $('#zoom-area').css({
	     top: e.pageY - $("#zoom-area").height()/2, // just minus by half the height
	     left:  e.pageX - $("#zoom-area").width()/2 // just minus by half the width
	   });
 	});

	$('#btn-buy-car').on('click',function(e){
		let car_id = $(this).data('car-id');
		$.ajax({
			url:base_url+'cars/buy_car',
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
					alert('Thank You For Purchasing');	
					$('#btn-buy-car').remove();
				}
				else
				{
					alert('Unexpected Error Try Again');
				}
			}
		});
	});


	$('.thumbimg').on('click',function(e){
		 let src = $(this).attr('src');
		 $('.thumbimg').removeClass('simg');
		 $('.flex-active-slide').find('img').attr('src',src);
		 $('.flex-active-slide').addClass('zoom-active');
		 $(this).addClass('simg');
		 $('.zoomimg').trigger('zoom.destroy'); // remove zoom
		 $('.zoomimg').parent().zoom({
		 		magnify: 3,
		 		target: $('#ifcont').get(0)
		 });

	});

	$('#btn-share').on('click',function(e){
		// alert();
		// $('.st-first').trigger('click');
		$('#share-modal').modal('show');
		$('#link-copied-message').text();
	});

	$('#share-modal').on('show.bs.modal',function(e){
		  $('#share-hidden-copy-link').val(window.location.href);
	});

	$('#btn-share-copy-link').on('click',function(e){
		 var car_id   = $('#hidden-car-id').val();
		 var copyText = $('#share-hidden-copy-link').val();
		 navigator.clipboard.writeText(copyText).then(function () {
		     $('#link-copied-message').text('Copied !').css('color','green');
		     $.ajax({
			     	url:base_url+'cars/count_copied_link',
			     	type:'POST',
			     	data:{car_id:car_id},
			     	success:function(response)
			     	{

			     	}
		     });
		 }, function () {
		 		 $('#link-copied-message').text('Failure to copy. Check permissions for clipboard').css('color','red');
		 });
	});

	$('#btn-share-whatsapp').on('click',function(e){
		 var car_id   = $('#hidden-car-id').val();
		 var copyText = $('#share-hidden-copy-link').val();
	   $.ajax({
	     	url:base_url+'cars/count_share_wa',
	     	type:'POST',
	     	data:{car_id:car_id},
	     	success:function(response)
	     	{

	     	}
	   });
		window.open('https://api.whatsapp.com/send/?text='+copyText+'&app_absent=0');
	});


	
	// $('#btn-login').on('click',funCopction(e){
	// 	$('#error-msg-div').addClass('d-none');
	// 	var login_form = $("#login-form")[0];
	// 	if (login_form.checkValidity())
	// 	{
	// 		let form_data = new FormData(login_form);
	// 		// form_data.append(csrf_token_name,csrf_token_value);
	// 	  	$.ajax({
	// 	      url:base_url+'login/pro',
	// 	      type:'POST',
	// 	      processData:false,
	// 	      contentType: false,
	// 	      data:form_data,
	// 	      success:function(msg)
	// 	      {
	// 	      	 var res = $.parseJSON(msg);
	// 	      	 // csrf_token_value = res[0];
	// 	      	 if(res[0]=='success')
	// 	      	 {
	// 	      	 	$('#btn-buy-car').trigger('click');
	// 	      	 }
	// 	      	 else if(res[0]=='error')
	// 	      	 {
		      	 	
	// 	      	 }
	// 	      	 else
	// 	      	 {
	// 	      	 	$('#error-msg-div').removeClass('d-none');
	// 	      	 	$('#response-msg').html(res[0]);
	// 	      	 	$('#response-msg').css('color','red');
	// 	      	 }
	//       	  }
	// 	  	});
	// 	}	       
	// 	else
	// 	{
	// 	   login_form.reportValidity()
	// 	}
	// 	       //Validate Form
	// });
}); // END OF READY FUNCTION