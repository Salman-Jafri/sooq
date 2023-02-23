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
	var current_tab = $('#current-tab').val();
	if(current_tab=='active')
	{
		$('#load_data_message_'+current_tab).html(output);
	}
}

function load_data(limit, start)
{
	show_loading  = 'no';
	var current_tab = $('#current-tab').val();
	$.ajax({
		url:base_url+'members_test/load_more',
		method:"POST",
		data:{
			current_tab:current_tab,
			limit:limit, 
			start:start
		},
		cache: false,
		success:function(data)
		{
			let load_data = $('#load_data_'+current_tab);
			let load_data_message = $('#load_data_message_'+current_tab);
			if(data == '')
			{
				load_data_message.html('');
				action = 'active';
			}
			else
			{
				load_data.append(data);
				load_data_message.html("");
				action = 'inactive';
			}
		}
	})
}
$(document).ready(function(e){

	var limit = 6;
	var start = 0;
	var action = 'inactive';
	
	lazzy_loader(limit);

	if(action == 'inactive')
	{
		action = 'active';
		load_data(limit, start);
	}

	$(window).scroll(function(){
		var current_tab = $('#current-tab').val();
		if($(window).scrollTop() + $(window).height() > $("#load_data_"+current_tab).height() && action == 'inactive')
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