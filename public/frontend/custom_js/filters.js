function fn_get_cars(yf=0,show_bc='show')
{
	let page_type 	  = 'none';
	let page_id   	  = 'none';
	let models		  = [];
	let makes         = [];
	let min_price 	  = parseInt($('.min-price-filter').val());
	let max_price 	  = parseInt($('.max-price-filter').val());
	var from_year	  = null;
	var to_year 	  = null;
	let fuel_type 	  = [];
	let transmission  = [];
	let drive_line 	  = [];
	let interior_color= [];
	let exterior_color= [];
	let is_filter     = 0;
	if(yf==1)
	{
		from_year= $('.from-year-filter').val();
		to_year  = $('.to-year-filter').val();
	}
	if($('#page-type').length==1)
	{
		page_type = $('#page-type').val();
	}
	if($('#page-id').length==1)
	{
		page_id = $('#page-id').val();
	}
	if(isNaN(min_price))
	{
		min_price=0;
	}
	else
	{
		is_filter++;
	}
	if(isNaN(max_price))
	{
		max_price=0;
	}
	else
	{
		is_filter++;
	}

	$('.filter-makes').each(function(e){
		if($(this).is(':checked'))
		{
			makes.push($(this).val());
			is_filter++;
		}
	});

	$('.filter-models').each(function(e){
		if($(this).is(':checked'))
		{
			models.push($(this).val());
			is_filter++;
		}
	});

	$('.fuel-type-filter').each(function(e){
		if($(this).is(':checked'))
		{
			fuel_type.push($(this).val());
			is_filter++;
		}
	});

	$('.transmission-filter').each(function(e){
		if($(this).is(':checked'))
		{
			transmission.push($(this).val());
			is_filter++;
		}
	});

	$('.drive-line-filter').each(function(e){
		if($(this).is(':checked'))
		{
			drive_line.push($(this).val());
			is_filter++;
		}
	});

	$('.interior-color-filter').each(function(e){
		if($(this).is(':checked'))
		{
			interior_color.push($(this).val());
			is_filter++;
		}
	});

	$('.exterior-color-filter').each(function(e){
		if($(this).is(':checked'))
		{
			exterior_color.push($(this).val());
			is_filter++;
		}
	});
	$('#no-results-found').addClass('d-none');
	$.ajax({
		url:base_url+'cars/apply_filters',
		type:'POST',
		data:{
			member_id:member_id,
			page_type:page_type,
			page_id:page_id,
			makes:JSON.stringify(makes),
			models:JSON.stringify(models),
			min_price:min_price,
			max_price:max_price,
			from_year:from_year,
			to_year:to_year,
			fuel_type:JSON.stringify(fuel_type),
			transmission:JSON.stringify(transmission),
			drive_line:JSON.stringify(drive_line),
			interior_color:JSON.stringify(interior_color),
			exterior_color:JSON.stringify(exterior_color)
		},
		success:function(response)
		{
			let res = $.parseJSON(response);
			if(res[0]==null)
			{
				$('#no-results-found').removeClass('d-none');
			}
			if(show_bc!=0)
			{
				if($('.filter-years-selected-bc').length==0)
				{
					if(is_filter>0)
					{
						$('.ownbreadcrumbs').append('<li><span class="filter-years-selected-bc">Filter</span></li>');
					}
					else
					{
						$('.filter-years-selected-bc').remove();
					}
				}
				else
				{
					if(is_filter==0)
					{
						$('.filter-years-selected-bc').closest('li').remove();
					}
				}
			}
			
			$('#tab-11').html(res['cars_list']);
			if(res['flt_models']!='none')
			{
				$('#dynamic_flt_models').html(res['flt_models']);
			}
			if(res['flt_transmission']!='none')
			{
				$('#dynamic_flt_transmission').html(res['flt_transmission']);
			}
			if(res['flt_drive_line']!='none')
			{
				$('#dynamic_flt_drive_line').html(res['flt_drive_line']);
			}
			if(res['flt_fuel_type']!='none')
			{
				$('#dynamic_flt_fuel_type').html(res['flt_fuel_type']);
			}
			if(res['flt_interior_color']!='none')
			{
				$('#dynamic_flt_interior_color').html(res['flt_interior_color']);
			}
			if(res['flt_exterior_color']!='none')
			{
				$('#dynamic_flt_exterior_color').html(res['flt_exterior_color']);
			}
		}
	})
}
function fn_reset_all_filters()
{
	$('.filter-makes').prop('checked',false);
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

	$(document).on('click','.filter-makes',function(e){
		fn_get_cars();
	});

	$(document).on('click','.filter-models',function(e){
		fn_get_cars();
	});

	$(document).on('click','.fm-title',function(e){
		e.preventDefault();
		$(this).closest('label').find('[type=checkbox]').trigger('click');
	});

	$(document).on('keyup','.min-price-filter',function(e){
		fn_get_cars();
	});

	$(document).on('keyup','.max-price-filter',function(e){
		fn_get_cars();
	});

	$(document).on('change','.from-year-filter',function(e){
		let yf=1;
		let tvl= parseInt($(this).val());
		
		let arr = [];
		$('.from-year-filter > option').each(function() {
			let v = parseInt($(this).val());
			if(v>=tvl)
			{
				arr.push(v);
			}
		});
		var drop_html;
		$.each(arr, function( index, value ) {
		   drop_html +='<option value="'+value+'" selected>'+value+'</option>';
		});
		$('.to-year-filter').html("");
		$('.to-year-filter').html(drop_html);

		fn_get_cars(yf);	
	});

	$(document).on('change','.to-year-filter',function(e){
		let yf=1;
		if($(this).hasClass('top-yf'))
		{
			yf=1;
		}
		fn_get_cars(yf);	
	});

	$(document).on('click','.fuel-type-filter',function(e){
		fn_get_cars();
	});
	$(document).on('click','.transmission-filter',function(e){
		fn_get_cars();
	});
	$(document).on('click','.drive-line-filter',function(e){
		fn_get_cars();
	});
	$(document).on('click','.interior-color-filter',function(e){
		fn_get_cars();
	});
	$(document).on('click','.exterior-color-filter',function(e){
		fn_get_cars();
	});

	$('#clear-models-filter').on('click',function(e){
		$('.filter-models').prop('checked',false);
		setTimeout(function(){fn_get_cars();},500);
	});

	$('#clear-price-filter').on('click',function(e){
		$('.min-price-filter').val('');
		$('.max-price-filter').val('');
		setTimeout(function(){fn_get_cars();},500);
	});

	$('#clear-year-filter').on('click',function(e){
		let a = $('.from-year-filter option:first').val();
		let b = $('.to-year-filter option:first').val();
		$('.from-year-filter').val(a).change();
		$('.to-year-filter').val(b).change();
		setTimeout(function(){fn_get_cars();},500);
	});

	$('#clear-fuel-type-filter').on('click',function(e){
		$('.fuel-type-filter').prop('checked',false);
		setTimeout(function(){fn_get_cars();},500);
	});

	$('#clear-transmission-filter').on('click',function(e){
		$('.transmission-filter').prop('checked',false);
		setTimeout(function(){fn_get_cars();},500);
	});

	$('#clear-drive-line-filter').on('click',function(e){
		$('.drive-line-filter').prop('checked',false);
		setTimeout(function(){fn_get_cars();},500);
	});

	$('.more-filters').toggle(
		function(){
			$(this).find('.fas').addClass('fa-minus');
			$(this).find('.fas').removeClass('fa-plus');
			$('#txt-more-filters').addClass('d-none');
			$('#txt-fewer-filters').removeClass('d-none');
			$('#more-filters').removeClass('d-none');
		},
		function(){
			$(this).find('.fas').removeClass('fa-minus');
			$(this).find('.fas').addClass('fa-plus');
			$('#txt-more-filters').removeClass('d-none');
			$('#txt-fewer-filters').addClass('d-none');
			$('#more-filters').addClass('d-none');
		}
	);

	$('#clear-interior-color-filter').on('click',function(e){
		$('.interior-color-filter').prop('checked',false);
		setTimeout(function(){fn_get_cars();},500);
	});

	$('#clear-exterior-color-filter').on('click',function(e){
		$('.exterior-color-filter').prop('checked',false);
		setTimeout(function(){fn_get_cars();},500);
	});
	$('.reset-all-filters').on('click',function(e){
		fn_reset_all_filters();
	});
}); // END OF READY FUNCTION