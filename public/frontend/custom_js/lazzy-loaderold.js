$(document).ready(function(e){

	var limit = 6;
	var start = 0;
	var action = 'inactive';

	function lazzy_loader(limit)
	{
		var output = '';
		for(var count=0; count<limit; count++)
		{
			output += '<div class="post_data">';
			output += '<p><span class="content-placeholder" style="width:100%; height: 30px;">&nbsp;</span></p>';
			output += '<p><span class="content-placeholder" style="width:100%; height: 100px;">&nbsp;</span></p>';
			output += '</div>';
		}
		$('#load_data_message').html(output);
	}

	lazzy_loader(limit);

	function load_data(limit, start)
	{
		show_loading  = 'no';
		var page_type = $('#page-type').val();
		var page_id   = $('#page-id').val();
		$.ajax({
			url:base_url+'cars/load_more',
			method:"POST",
			data:{
				page_type:page_type,
				page_id:page_id,
				limit:limit, 
				start:start
			},
			cache: false,
			success:function(data)
			{
				if(data == '')
				{
					$('#load_data_message').html('');
					action = 'active';
				}
				else
				{
					$('#load_data').append(data);
					$('#load_data_message').html("");
					action = 'inactive';
				}
			}
		})
	}

	if(action == 'inactive')
	{
		action = 'active';
		load_data(limit, start);
	}

	$(window).scroll(function(){
		if($(window).scrollTop() + $(window).height() > $("#load_data").height() && action == 'inactive')
		{
			lazzy_loader(limit);
			action = 'active';
			start = start + limit;
			setTimeout(function(){
				load_data(limit, start);
			}, 1000);
		}
	});

}); // END OF READY FUNCTION