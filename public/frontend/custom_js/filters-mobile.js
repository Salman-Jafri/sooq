function fn_get_cars(yf=0)
{
	let page_type 	 = 'none';
	let page_id   	 = 'none';
	let models		 = [];
	let min_price 	 = parseInt($('.min-price-filter').val());
	let max_price 	 = parseInt($('.max-price-filter').val());
	let from_year 	 = $('.from-year-filter').val();
	let to_year   	 = $('.to-year-filter').val();
	let fuel_type 	 = [];
	let transmission = [];
	let drive_line 	 = [];
	let interior_color=[];
	let exterior_color=[];
	if(yf==1)
	{
		$('.side-yf').hide();
	}
	if($('#page-type').length==1)
	{
		page_type = $('#page-type').val();
	}
	if($('#page-id').length==1)
	{
		page_id = $('#page-id').val();
	}
	if(isNaN(min_price)){min_price=0;}
	if(isNaN(max_price)){max_price=0;}

	$('.filter-models').each(function(e){
		if($(this).is(':checked'))
		{
			models.push($(this).val());
		}
	});

	$('.fuel-type-filter').each(function(e){
		if($(this).is(':checked'))
		{
			fuel_type.push($(this).val());
		}
	});

	$('.transmission-filter').each(function(e){
		if($(this).is(':checked'))
		{
			transmission.push($(this).val());
		}
	});

	$('.drive-line-filter').each(function(e){
		if($(this).is(':checked'))
		{
			drive_line.push($(this).val());
		}
	});

	$('.interior-color-filter').each(function(e){
		if($(this).is(':checked'))
		{
			interior_color.push($(this).val());
		}
	});

	$('.exterior-color-filter').each(function(e){
		if($(this).is(':checked'))
		{
			exterior_color.push($(this).val());
		}
	});
	
	$('#no-results-found').addClass('d-none');
	$.ajax({
		url:base_url+'cars/apply_filters',
		type:'POST',
		data:{
			page_type:page_type,
			page_id:page_id,
			models:JSON.stringify(models),
			min_price:min_price,
			max_price:max_price,
			from_year:from_year,
			to_year:to_year,
			fuel_type:JSON.stringify(fuel_type),
			transmission:JSON.stringify(transmission),
			drive_line:JSON.stringify(drive_line),
			interior_color:JSON.stringify(drive_line),
			exterior_color:JSON.stringify(drive_line)
		},
		success:function(response)
		{
			let res = $.parseJSON(response);
			if(res[0]==null)
			{
				$('#no-results-found').removeClass('d-none');
			}
			$('#tab-11').html(res[0]);
		}
	})
}
function fn_reset_all_filters()
{
	$('.filter-models').prop('checked',false);
	$('.min-price-filter').val('');
	$('.max-price-filter').val('');
	let a = $('.from-year-filter option:first').val();
	let b = $('.to-year-filter option:first').val();
	$('.from-year-filter').val(a).change();
	$('.to-year-filter').val(b).change();
	$('.fuel-type-filter').prop('checked',false);
	$('.transmission-filter').prop('checked',false);
	$('.drive-line-filter').prop('checked',false);
	setTimeout(function(){fn_get_cars();},500);
}
$(document).ready(function(e){
	$(document).on('click','.show-filter-sidebar',function(e){
		$('#sidebarrightbutton').trigger('click');
	});
	
	$('#btn-apply-filters').on('click',function(e){
		fn_get_cars();
		$('#dismiss').trigger('click');
	});
	$('#btn-clear-filters').on('click',function(e){
		fn_reset_all_filters();
		$('#dismiss').trigger('click');
	});
}); // END OF READY FUNCTION