function make_grand_total()
  {
      total_car_price= 0;
      total_part_price= 0;
      total_total_selling= 0;
      total_sold_price= 0;
      total_profit= 0;
      $('.tr-car-price').each(function(e){
          var vl= parseFloat($(this).text());
          if(isNaN(vl))
          {
            vl=0;
          }
          else
          {
            total_car_price +=vl;
          }
      });
      $('#gtotal_car_price').text(total_car_price.toFixed(3));
     
      $('.tr-part-price').each(function(e){
          var vl= parseFloat($(this).text());
          if(isNaN(vl))
          {
            vl=0;
          }
          else
          {
            total_part_price +=vl;
          }
      });
      $('#gtotal_part_price').text(total_part_price.toFixed(3));
     
      $('.tr-total-selling').each(function(e){
          var vl= parseFloat($(this).text());
          if(isNaN(vl))
          {
            vl=0;
          }
          else
          {
            total_total_selling +=vl;
          }
      });
      $('#gtotal_total_selling').text(total_total_selling.toFixed(3));
     
      $('.tr-sold-price').each(function(e){
          var vl= parseFloat($(this).text());
          if(isNaN(vl))
          {
            vl=0;
          }
          else
          {
            total_sold_price +=vl;
          }
      });
      $('#gtotal_sold_price').text(total_sold_price.toFixed(3));

      $('.tr-profit').each(function(e){
          var vl= parseFloat($(this).text());
          if(isNaN(vl))
          {
            vl=0;
          }
          else
          {
            total_profit +=vl;
          }
      });
      $('#gtotal_profit').text(total_profit.toFixed(3));
  }
  function make_expense_grand_total()
  {
      total_expense= 0;
      $('.tr-expense').each(function(e){
          var vl= parseFloat($(this).text());
          if(isNaN(vl))
          {
            vl=0;
          }
          else
          {
            total_expense +=vl;
          }
      });
      $('#gtotal_expenses').text(total_expense.toFixed(3));
     
      
  }
  $(document).ready(function(){
      $('.ofcnav').removeClass('active');
      setTimeout(function(e){
        $('.ofc-profit-report').addClass('active');
      },500);
      /*Global*/
        let add_md ='#add-new-modal';
        let addForm=$('#add-form')[0];
        let edit_md ='#edit-modal';
        let editForm=$('#edit-form')[0];
        let dt     ='#dt';
      /*End Global*/

      $(dt).DataTable({
          "sAjaxSource": base_url+'members/show_my_partners/',
          responsive:!0,
          "pageLength": 100,
          "order": [],
          dom:'<"d-flex justify-content-between align-items-center"<"btn-group"B>f>rtip',buttons:["copy","csv","excel","pdf","print"]
          
      });

      $('#btn-add').on('click',function(e){
        if (addForm.checkValidity()){
            $(this).html('<i class="fas fa-circle-notch fa-spin"></i> Adding...');
            $(this).prop('disabled',true);
            let form_data = new FormData(addForm);
            $.ajax({
                url:base_url+'members/add_my_partners',
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
                    if(add_md!='')
                    {
                      $(add_md).modal('toggle');  
                    }
                    if(dt!='')
                    {
                      $(dt).DataTable().ajax.reload();
                    }
                    show_notification('success',' Added successfully');
                    $('#total-capital').text(res[2]);
                    addForm.reset();
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
      
      $(edit_md).on('show.bs.modal',function(e){
          var unique_id = e.relatedTarget.id;
          fill_edit_fields(unique_id,edit_md,'members/edit_my_partners');
          $('.hid').val(unique_id);
      });

      $('#btn-update').on('click',function(e){
        if (editForm.checkValidity()){
            $(this).html('<i class="fas fa-circle-notch fa-spin"></i> Adding...');
            $(this).prop('disabled',true);
            let form_data = new FormData(editForm);
            let unique_id = $('.hid').val();
            form_data.append('unique_id',unique_id);
            $.ajax({
                url:base_url+'members/update_my_partners',
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
                    if(edit_md!='')
                    {
                      $(edit_md).modal('toggle');  
                    }
                    if(dt!='')
                    {
                      $(dt).DataTable().ajax.reload();
                    }
                    show_notification('success',' Updated successfully');
                  }
                  else if(res[1]=='error')
                  {
                    show_notification('error',' Unexpected Error Try again');
                  
                  }
                  else
                  {
                    show_notification('warning', res[1]);
                  }
                  $(this).html('Save Changes');
                  $(this).prop('disabled',false);
                }
            });
        }        
        else{
           editForm.reportValidity();
        }
      });

      $(document).on('click','#btn-delete',function(e){
        var unique_id  = $('#delete-id').val();
        var myFormSubmission = base_url+'members/delete_my_partners';
        ajax_delete(unique_id,myFormSubmission,'#dt');
      });

      $('#btn-show').on('click',function(e){
          $('#start_date').removeClass('border-danger');
          $('#end_date').removeClass('border-danger');
          let start_date = $('#start_date').val();
          let end_date   = $('#end_date').val();
          if(start_date!="" && end_date!="")
          {
              $(dt).DataTable().destroy();
              $(dt).DataTable({
                  "sAjaxSource": base_url+'members/show_my_partners/'+start_date+'/'+end_date,
                  responsive:!0,
                  "pageLength": 100,
                  "order": [],
                  dom: 'Bfrtip',
                  buttons: [
                      'copy', 'csv', 'excel', 'pdf', 'print'
                  ]
              });

              $.ajax({
                url:base_url+'members/reload_profit_data',
                type:'POST',
                data:{start_date:start_date,end_date:end_date},
                success:function(msg)
                {
                    let res = $.parseJSON(msg);
                    $('#total-profit').text(res[0]);
                    $('#total-expenses').text(res[1]);
                    $('#net-profit').text(res[2]);
                }
              });
          }
          else
          {
              if(start_date=="")
              {
                 $('#start_date').addClass('border-danger');
              }
              if(end_date=="")
              {
                 $('#end_date').addClass('border-danger');
              }
          }
      });

      $('#profit-details-modal').on('show.bs.modal',function(e){
          $('#start_date').removeClass('border-danger');
          $('#end_date').removeClass('border-danger');
          let start_date = $('#start_date').val();
          let end_date   = $('#end_date').val();
          if(start_date!="" && end_date!="")
          {
              $('#profit-dt').DataTable().destroy();
              $('#profit-dt').DataTable({
                  "sAjaxSource": base_url+'members/profit_details/'+start_date+'/'+end_date,
                  responsive:!0,
                  "pageLength": 100,
                  "order": [],
                  dom: 'Bfrtip',
                  buttons: [
                      'copy', 'csv', 'excel', 'pdf', 'print'
                  ],
                  "fnInitComplete": function(oSettings, json) {
                      make_grand_total();
                   },
              });
          }
          else
          {
            $('#profit-dt').DataTable().destroy();
            $('#profit-dt').DataTable({
                "sAjaxSource": base_url+'members/profit_details/',
                responsive:!0,
                "pageLength": 100,
                "order": [],
                dom: 'Bfrtip',
                buttons: [
                    'copy', 'csv', 'excel', 'pdf', 'print'
                ],
                "fnInitComplete": function(oSettings, json) {
                    make_grand_total();
                 },
            });
          }
          
      });

      $('#expense-details-modal').on('show.bs.modal',function(e){
          $('#start_date').removeClass('border-danger');
          $('#end_date').removeClass('border-danger');
          let start_date = $('#start_date').val();
          let end_date   = $('#end_date').val();
          if(start_date!="" && end_date!="")
          {
              $('#expense-dt').DataTable().destroy();
              $('#expense-dt').DataTable({
                  "sAjaxSource": base_url+'members/expense_details/'+start_date+'/'+end_date,
                  responsive:!0,
                  "pageLength": 100,
                  "order": [],
                  dom: 'Bfrtip',
                  buttons: [
                      'copy', 'csv', 'excel', 'pdf', 'print'
                  ],
                  "fnInitComplete": function(oSettings, json) {
                      make_expense_grand_total();
                   },
              });
          }
          else
          {
            $('#expense-dt').DataTable().destroy();
            $('#expense-dt').DataTable({
                "sAjaxSource": base_url+'members/expense_details/',
                responsive:!0,
                "pageLength": 100,
                "order": [],
                dom: 'Bfrtip',
                buttons: [
                    'copy', 'csv', 'excel', 'pdf', 'print'
                ],
                "fnInitComplete": function(oSettings, json) {
                    make_expense_grand_total();
                 },
            });
          }
          
      });
  });//End of ready function