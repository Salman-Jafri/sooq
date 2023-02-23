$(document).ready(function(e){
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

	$('#btn-search-cars').on('click',function(e){
		var search_form = $("#search-form")[0];
		if (search_form.checkValidity())
		{
			let make_id = $('#make-id').val();
			let model_id = $('#model-id').val();
			let search_year_from = $('#search-year-from').val();
			let search_year_to = $('#search-year-to').val();
			$.ajax({
				url:base_url+'cars/count_manual_search',
				type:'POST',
				success:function(msg)
				{
					// search_form.submit();
					window.location = base_url+'cars/search_results/?make='+make_id+'&model='+model_id+'&from='+search_year_from+'&to='+search_year_to;
				}
			});
		}	       
		else
		{
		   search_form.reportValidity()
		}
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
		 var copyText = $('#share-hidden-copy-link').val();
		 navigator.clipboard.writeText(copyText).then(function () {
		     $('#link-copied-message').text('Copied !').css('color','green');
		 }, function () {
		 		 $('#link-copied-message').text('Failure to copy. Check permissions for clipboard').css('color','red');
		 });
	});

	$('#btn-share-whatsapp').on('click',function(e){
		var copyText = $('#share-hidden-copy-link').val();
		// alert(copyText);

		window.open('https://api.whatsapp.com/send/?text='+copyText+'&app_absent=1');
	});

	$(document).on('click','.reveal-email',function(e){
		let enc_code = $(this).data('enc');
		$.ajax({
			url:base_url+'welcome/reveal_email',
			type:'POST',
			data:{enc_code:enc_code},
			context:this,
			success:function(msg)
			{
				$(this).attr('href','mailto:'+msg);
				$(this).text(msg);
			}
		});
	});

$('#make-id').on('change',function(e){

	var value = $(this).val();
	if(value=='all')
	{
		$('#btn-search-cars').trigger('click');
	}
});

}); // END OF READY FUNCTION