var run_on_reload = function run_on_reload()
{
    make_sub_total();
    make_grand_total();
}
function make_grand_total()
{
    total_car_price= 0;
    total_part_price= 0;
    total_total_selling= 0;
    total_sold_price= 0;
    total_profit= 0;
    total_paid= 0;
    total_outstanding= 0;

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

    $('.tr-paid').each(function(e){
        var vl= parseFloat($(this).text());
        if(isNaN(vl))
        {
          vl=0;
        }
        else
        {
          total_paid +=vl;
        }
    });
    $('#gtotal_paid').text(total_paid.toFixed(3));

    $('.tr-outstanding').each(function(e){
        var vl= parseFloat($(this).text());
        if(isNaN(vl))
        {
          vl=0;
        }
        else
        {
          total_outstanding +=vl;
        }
    });
    $('#gtotal_outstanding').text(total_outstanding.toFixed(3));
}
function make_sub_total()
{
    total_car_price= 0;
    total_part_price= 0;
    total_total_selling= 0;
    total_sold_price= 0;
    total_profit= 0;
    total_paid= 0;
    total_outstanding= 0;

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
    $('#stotal_car_price').text(total_car_price.toFixed(3));
    
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
    $('#stotal_part_price').text(total_part_price.toFixed(3));
    
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
    $('#stotal_total_selling').text(total_total_selling.toFixed(3));
    
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
    $('#stotal_sold_price').text(total_sold_price.toFixed(3));

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
    $('#stotal_profit').text(total_profit.toFixed(3));

    $('.tr-paid').each(function(e){
        var vl= parseFloat($(this).text());
        if(isNaN(vl))
        {
          vl=0;
        }
        else
        {
          total_paid +=vl;
        }
    });
    $('#stotal_paid').text(total_paid.toFixed(3));

    $('.tr-outstanding').each(function(e){
        var vl= parseFloat($(this).text());
        if(isNaN(vl))
        {
          vl=0;
        }
        else
        {
          total_outstanding +=vl;
        }
    });
    $('#stotal_outstanding').text(total_outstanding.toFixed(3));
}
  $(document).ready(function(){
      $.fn.modal.Constructor.prototype._enforceFocus = function() {};
      $('.ofcnav').removeClass('active');
      setTimeout(function(e){
        $('.ofc-cars').addClass('active');
      },500);
      /*Global*/
        let fileList = [];
        let efileList= [];
        let add_md ='#add-new-modal';
        let addForm=$('#add-form')[0];
        let edit_md ='#edit-modal';
        let editForm=$('#edit-form')[0];
        let dt     ='#dt';
        let clientForm=$('#add-form-client')[0];
        let client_md ='#add-new-client-modal';
      /*End Global*/

      $(document).on('click','.tr-change-status',function(e){
        $(this).closest('tr').find('.change-status').trigger('click');
      });
      $('#browse-filess').on('click',function(e){
          $('#cars_uploads').trigger('click');
      });

      $('#cars_uploads').on('change',function(e){
          let files = e.target.files;
          $.each(files,function(i,file){
            let ve = fn_check_extension(file);
            if(ve!='dont')
            {
              fileList.push(file);
              $('#file-tbody').append('<tr><td class="text-left pl-0">'+ve+'</td><td class="tr-files pl-0" id="'+file+'">'+file.name+'</td><td><a href="javascript:void(0);" class="rmv-file text-danger pl-0"><i class="fas fa-times"></i></a></td></tr>');
            }
          });
          let d=$('#imgs-div');
          d.scrollTop(d.prop("scrollHeight"));
      });

      $(document).on('click','.rmv-file',function(e){
        $(this).closest('tr').remove();
      });

      let table =$(dt).DataTable({
          "sAjaxSource": base_url+'members/show_my_cars',
          responsive:!0,
          "pageLength": 100,
          "order": [],
          "createdRow": function ( row, data, index ) {
                let dta = data[9].replace(/(<([^>]+)>)/ig,"");
                let res = dta.split('&nbsp');
                let mydta = parseInt(res[0]);

                if (mydta =='0' ) {
                    $('td', row).addClass('css-not-sold');
                }
                else
                {
                    $('td', row).addClass('css-sold');
                }
          },
          "fnInitComplete": function(oSettings, json) {
              
              $('#dt').find('thead th').addClass('myFilter');
              var cnt=0;
              var myExcelFilter=[];
              $('.myFilter').each(function(e){
                cnt++;
                myExcelFilter.push(cnt);
              });
              // alert(cnt);
              configFilter(this,myExcelFilter);
              make_sub_total();
              make_grand_total();
              $('.set-column-visibility').each(function(e){
                if($(this).data('status')=='hidden')
                {
                    let column = table.column($(this).data('col'));
                    column.visible(false);
                }
              });
           },
           "dom": "<'row'<'col-sm-12 col-md-2 pr-0 mr-0'l><'col-sm-12 col-md-6 pl-0 ml-0 text-center'B><'col-sm-12 col-md-4'f>>" +
                  "<'row'<'col-sm-12'tr>>" +
                  "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-6'p>>",
            buttons: [
                        {
                            text: '<span class="fas fa-table" aria-hidden="true"></span> Manage Columns',
                            attr: {
                              class: 'btn btn-info btn-sm',
                              id   : 'btn-hide-show-dt-cols'
                            },
                            action: function ( e, dt, node, config ) {
                                
                            }
                        }
                    ]
      });
      
      table.on('search.dt', function () {
           make_sub_total();
      });

      $(document).on('click','#btn-hide-show-dt-cols',function(e){
          $('#mycars-cols-modal').modal('show');
      });

      $('#mycars-cols-modal').on('shown.bs.modal',function(e){
          $('.dt-swtch-show-hide-cols').each(function(e){
             let column_index = $(this).data('col');
             let yeh = $(this);
             $('.set-column-visibility').each(function(e){
               if($(this).data('status')=='hidden' && $(this).data('col')===column_index)
               {
                   yeh.bootstrapToggle('off');
               }
             });
          })
      });

      $(document).on('change','.dt-swtch-show-hide-cols',function(e){
          let column_index = $(this).attr('data-col');
          let column_status= 'hidden';
          if($(this).is(':checked'))
          {
            column_status = 'showing';
          }
          let column = table.column(column_index);
          column.visible(!column.visible());
          $.ajax({
            url:base_url+'members/set_my_cars_columns',
            type:'POST',
            data:{column_index:column_index,column_status:column_status},
            success:function(msg)
            {

            }
          });
      });

      $('#btn-add').on('click',function(e){
        if (addForm.checkValidity()){
            $(this).html('<i class="fas fa-circle-notch fa-spin"></i> Adding...');
            $(this).prop('disabled',true);
            let form_data = new FormData(addForm);
            if($('.tr-files').length>0)
            {
              fileList.forEach(function (file) {
                  $('.tr-files').each(function(e){
                      if($.trim($(this).text())==file.name)
                      {
                          form_data.append('cars_uploads[]',file);
                      }
                  });
              });
            }
            else
            {
              $('#cars_uploads').val(null);
              fileList=[];
            }
            $.ajax({
                url:base_url+'members/add_my_cars',
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
                      $(dt).DataTable().ajax.reload(run_on_reload);
                    }
                    $('#cars_uploads').val(null);
                    fileList=[];
                    $('#file-tbody').html("");
                    show_notification('success',' Added successfully');
                    addForm.reset();
                    if(isNaN(res[2]))
                    {
                      show_notification('warning',res[2]);
                    }
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
          let unique_id = e.relatedTarget.id;
          fill_edit_fields(unique_id,edit_md,'members/edit_my_cars');
          $('.hid').val(unique_id);
      });

      $(edit_md).on('shown.bs.modal',function(e){
          let unique_id = e.relatedTarget.id;
          $.ajax({
            url:base_url+'members/get_my_cars_files',
            type:'POST',
            data:{car_id:unique_id},
            success:function(msg)
            {
              $('#e-file-tbody').html(msg);
              let d=$('#e-imgs-div');
              d.scrollTop(d.prop("scrollHeight"));
            }
          });
      });

      $('#e-browse-filess').on('click',function(e){
        $('#e_cars_uploads').trigger('click');
      });

      $('#e_cars_uploads').on('change',function(e){
          let files = e.target.files;
          $.each(files,function(i,file){
            let ve = fn_check_extension(file);
            if(ve!='dont')
            {
              efileList.push(file);
              $('#e-file-tbody').append('<tr><td class="text-left pl-0">'+ve+'</td><td class="e-tr-files pl-0" id="'+file+'">'+file.name+'</td><td><a href="javascript:void(0);" class="rmv-file text-danger pl-0"><i class="fas fa-times"></i></a></td></tr>');
            }
          });
          let d=$('#e-imgs-div');
          d.scrollTop(d.prop("scrollHeight"));
      });

      $(document).on('click','.e-rmv-file',function(e){
          let uid = $(this).attr('id');
          $.ajax({
            url:base_url+'members/mark_as_delete',
            type:'POST',
            data:{uid:uid},
            context:this,
            success:function(msg)
            {
              if(msg==1)
              {
                $(this).closest('tr').remove();
              }
            }
          });
      });

      $('#btn-update').on('click',function(e){
        if (editForm.checkValidity()){
            $(this).html('<i class="fas fa-circle-notch fa-spin"></i> Adding...');
            $(this).prop('disabled',true);
            let form_data = new FormData(editForm);
            let unique_id = $('.hid').val();
            form_data.append('unique_id',unique_id);
            if($('.e-tr-files').length>0)
            {
              efileList.forEach(function (file) {
                  $('.e-tr-files').each(function(e){
                    if($.trim($(this).text())==file.name)
                    {
                        form_data.append('cars_uploads[]',file);
                      }
                  });
                });
            }
            else
            {
              $('#e_cars_uploads').val(null);
              efileList=[];
            }
            $.ajax({
                url:base_url+'members/update_my_cars',
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
                      $(dt).DataTable().ajax.reload(run_on_reload);
                    }
                    show_notification('success',' Updated successfully');
                    $('#e_cars_uploads').val(null);
                    efileList=[];
                    if(isNaN(res[2]))
                    {
                      show_notification('warning',res[2]);
                    }
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
        let unique_id  = $('#delete-id').val();
        let myFormSubmission = base_url+'members/delete_my_cars';
        ajax_delete(unique_id,myFormSubmission,'#dt');
      });

      $('#change-status-modal').on('show.bs.modal',function(e){
          let car_id = e.relatedTarget.id;
          let current_status = e.relatedTarget.getAttribute('data-status');
          let current_status_date = e.relatedTarget.getAttribute('data-deadline');
          $('#hidden-status-car-id').val(car_id);
          $('#car_status').val(current_status);
          $('#car_status_date').val(current_status_date);
          if(current_status!='SHIPPING')
          {
            $('#car-status-date-div').removeClass('d-none');
          }
          else
          {
            $('#car-status-date-div').addClass('d-none');
          }
      });

      $('#change-status-modal').on('shown.bs.modal',function(e){
          let car_id = e.relatedTarget.id;
          let current_status = e.relatedTarget.getAttribute('data-status');
          $.ajax({
              url:base_url+'members/cms_my_cars_status_difference',
              type:'POST',
              data:{car_id:car_id,current_status:current_status},
              success:function(msg)
              {
                 $('#div-days-between-status').html(msg); 
              }

          });
      });

      $('#car_status').on('change',function(e){
         let vl = $(this).val();
         if(vl!='SHIPPING')
         {
            $('#car-status-date-div').removeClass('d-none');
         }
         else
         {
            $('#car-status-date-div').addClass('d-none');
         }
      });

      $('#btn-update-status').on('click',function(e){
          $('#car_status_date').removeClass('border-danger');
          let car_id = $('#hidden-status-car-id').val();
          let car_status = $('#car_status').val();
          let deadline_date = $('#car_status_date').val();
          if(car_status!='SHIPPING' && deadline_date=="")
          {
              $('#car_status_date').addClass('border-danger');
              return false;
          }
          $.ajax({
            url:base_url+'members/cms_update_car_status',
            type:'POST',
            data:{car_id:car_id,car_status:car_status,deadline_date:deadline_date},
            success:function(msg)
            {
                $(dt).DataTable().ajax.reload(run_on_reload);
                $('#change-status-modal').modal('hide');
            }
          });
      });

      $('#status-change-history-modal').on('show.bs.modal',function(e){
          let car_id = $('#hidden-status-car-id').val();
          $.ajax({
              url:base_url+'members/cms_my_cars_status_update_history',
              type:'POST',
              data:{car_id:car_id},
              success:function(msg)
              {
                  $('#status-change-history-tbody').html(msg);
              }

          });
      });

      $('#add-parts-modal').on('show.bs.modal',function(e){
          let car_id = e.relatedTarget.id;
          $('#parts-hidden-car-uid').val(car_id);
          $.ajax({
              url:base_url+'members/cms_get_parts',
              type:'POST',
              data:{car_id:car_id},
              success:function(msg)
              {
                  $('#part-tbody').html(msg);
              }

          });
      });
     
      $('#btn-add-parts').on('click',function(e){
          let car_id = $('#parts-hidden-car-uid').val();
          let part_description = $('#part_description').val();
          let part_price = $('#part_price').val();
          let part_attachment = $('#part_attachment')[0].files.length;

          if(part_description=="" || part_price=="")
          {
             return false;
          }
          else
          {
              let form_data = new FormData();
              form_data.append('car_id',car_id);
              form_data.append('part_description',part_description);
              form_data.append('part_price',part_price);
              if(part_attachment!=0)
              {
                form_data.append('part_attachment',$('#part_attachment')[0].files[0]);
              }
              $.ajax({
                  url:base_url+'members/cms_add_parts',
                  type:'POST',
                  processData:false,
                  contentType: false,
                  data:form_data,
                  success:function(msg)
                  {
                      let res = $.parseJSON(msg);
                      if(res[0]>0)
                      {
                          $('#part-tbody').html(res[1]);
                          $(dt).DataTable().ajax.reload(run_on_reload);
                          $('#part_description').val("");
                          $('#part_price').val("");
                          $('#part_attachment').val("");
                      }
                      else
                      {
                         show_notification('error',res[0]);
                      }
                  }

              });
          }
      });

      $(document).on('click','.rmv-part',function(e){
          let uid = $(this).attr('id');
          $.ajax({
              url:base_url+'members/cms_remove_parts',
              type:'POST',
              data:{uid:uid},
              success:function(msg)
              {
                  let res = $.parseJSON(msg);
                  if(res[0]=='success')
                  {
                      $('#part-tbody').html(res[1]);
                      $(dt).DataTable().ajax.reload(run_on_reload);
                  }
                  else
                  {
                     show_notification('error',' Unexpected Error Please Try Again');
                  }
              }

          });
      });

      $('#sell-car-modal').on('show.bs.modal',function(e){
          let car_id = e.relatedTarget.id;
          $('#sell-hidden-car-uid').val(car_id);
          $.ajax({
              url:base_url+'members/cms_get_selling_price',
              type:'POST',
              data:{car_id:car_id},
              success:function(msg)
              {
                  let res = $.parseJSON(msg)
                  if(res[0]=="" || res[0]==0)
                  {
                    $('#sell_client').val("");
                  }
                  else
                  {
                    $('#sell_client').val(res[0]); 
                  }
                  $('#sell_price').val(res[1]);
              }

          });
      });

      $('#btn-sell-car').on('click',function(e){
          let car_id      = $('#sell-hidden-car-uid').val();
          let sell_client = $('#sell_client').val();
          let sell_price  = $('#sell_price').val();
          if(sell_price=="")
          {
             return false;
          }
          else
          {
              $.ajax({
                  url:base_url+'members/cms_sell_cars',
                  type:'POST',
                  data:{
                      car_id:car_id,
                      sell_client:sell_client,
                      sell_price:sell_price
                  },
                  success:function(msg)
                  {
                      let res = $.parseJSON(msg);
                      // $('#my_csrf').val(res[0]);
                      if(res[1]=='success')
                      {
                        $('#sell-car-modal').modal('hide');
                        $(dt).DataTable().ajax.reload(run_on_reload);
                        if(res[3]==1)
                        {
                           $('#hidden-val').val(car_id);
                           $('#deactivate-ad-modal').modal('show');
                        }
                        else
                        {
                          show_notification('success',' Sold successfully');
                        }

                      }
                      else if(res[1]=='error')
                      {
                        show_notification('error',' Unexpected Error Try again');
                      }
                      else
                      {
                        show_notification('warning', res[1]);
                      }
                  }

              });
          }
      });

      $('#btn-deactivate-ad-posting').on('click',function(e){
         let uid = $('#hidden-val').val();
         $.ajax({
            url:base_url+'members/deactivate_ad_posting',
            type:'POST',
            data:{uid:uid},
            success:function(msg)
            {
                let res = $.parseJSON(msg);
                if(res[0]=='success')
                {
                    show_notification('success',' Ad has been deactivated');
                    $('#deactivate-ad-modal').modal('hide');
                }
                else
                {
                   show_notification('error',' Unexpected Error Please Try Again');
                }
            }
         });
      });

      $('#car-payment-modal').on('show.bs.modal',function(e){
          $('#payment_amount').val("");
          $('#payment_method').val("");
          $('#payment_reference').val("");
          $('#payment_date').val("");
          $('#payment_notes').val("");
          let car_id = e.relatedTarget.id;
          $('#payments-hidden-car-uid').val(car_id);
          $.ajax({
              url:base_url+'members/cms_get_car_payments',
              type:'POST',
              data:{car_id:car_id},
              success:function(msg)
              {
                  if(msg!='none')
                  {
                      let res = $.parseJSON(msg);
                      $('#payments-hidden-client-id').val(res[0]);
                      $('#tr-selling-price').text(res[1]);
                      $('#payments-tbody').html(res[2]);
                  }
                  else
                  {
                     $('#car-payment-modal').modal('hide');
                     show_notification('info','Please add Selling Price First');
                  }
                 
              }
          });
      });
      
      $('#btn-add-payments').on('click',function(e){
          let car_id    = $('#payments-hidden-car-uid').val();
          let client_id = $('#payments-hidden-client-id').val();
          let payment_amount = parseFloat($('#payment_amount').val());
          let payment_method = $('#payment_method').val();
          let payment_reference = $('#payment_reference').val();
          let payment_date = $('#payment_date').val();
          let payment_notes = $('#payment_notes').val();
          let payment_balance = parseFloat($('.payment-balance').last().text());
          if(isNaN(payment_amount)){payment_amount=0;}
          if(isNaN(payment_balance)){payment_balance=0;}
          if(payment_amount==0)
          {
              show_notification('warning','Enter a Valid Amount');
              return false;
          }
          if(payment_amount>payment_balance)
          {
              show_notification('warning','Amount Must Be Less or Equal To Balance');
              return false; 
          }
          if(payment_method=="")
          {
              show_notification('warning','Payment Method Required');
              return false;
          }
          if(payment_date=="")
          {
              show_notification('warning','Payament Date Required');
              return false;
          }
          $(this).html('<i class="fas fa-circle-notch fa-spin"></i> Adding...');
          $(this).prop('disabled',true);
          $.ajax({
              url:base_url+'members/cms_make_car_payment',
              type:'POST',
              context:this,
              data:{
                  car_id:car_id,
                  client_id:client_id,
                  payment_amount:payment_amount,
                  payment_method:payment_method,
                  payment_reference:payment_reference,
                  payment_date:payment_date,
                  payment_notes:payment_notes
              },
              success:function(msg)
              {
                  let res = $.parseJSON(msg);
                  $('#payments-tbody').html(res[0]);
                  window.open(res[1]);
                  $(this).html('Add Payments');
                  $(this).prop('disabled',false);
                  $('#payment_amount').val("");
                  $('#payment_method').val("");
                  $('#payment_reference').val("");
                  $('#payment_date').val("");
                  $('#payment_notes').val("");
              }

          });
      });

      $(document).on('click','.rmv-car-payment',function(e){
          let pay_id = $(this).attr('id');
          $.ajax({
              url:base_url+'members/cms_remove_car_payment',
              type:'POST',
              data:{pay_id:pay_id},
              success:function(msg)
              {
                 let res = $.parseJSON(msg);
                 if(res[0]=='success')
                 {
                     $('#payments-tbody').html(res[1]);
                     $(dt).DataTable().ajax.reload(run_on_reload);
                 }
                 else
                 {
                    show_notification('error',' Unexpected Error Please Try Again');
                 }
              }
          });
      });

      $('#notes-modal').on('show.bs.modal',function(e){
          $('#notes').val("");
          let car_id = e.relatedTarget.id;
          $('#notes-hidden-car-uid').val(car_id);
          $.ajax({
              url:base_url+'members/cms_get_car_notes',
              type:'POST',
              data:{car_id:car_id},
              success:function(msg)
              {
                  $('#notes').val(msg);
              }
          });
      });

      $('#btn-add-notes').on('click',function(e){
          let car_id      = $('#notes-hidden-car-uid').val();
          let notes = $('#notes').val();
          $.ajax({
              url:base_url+'members/cms_add_car_notes',
              type:'POST',
              data:{
                  car_id:car_id,
                  notes:notes,
              },
              success:function(msg)
              {
                  let res = $.parseJSON(msg);
                  if(res[0]=='success')
                  {
                    $('#notes-modal').modal('hide');
                    show_notification('success',' Notes Added successfully');
                    $(dt).DataTable().ajax.reload(run_on_reload);
                  }
                  else if(res[0]=='error')
                  {
                    show_notification('error',' Unexpected Error Try again');
                  }
                  else
                  {
                    show_notification('error',' Unexpected Error Try again');
                  }
              }

          });
      });

      $("#client_username").keyup(function() {
          let n = $(this).val();
          if ( n.match("^[a-zA-Z0-9]*$") == null ) {
              $(this).val(n.slice(0,-1));
          }
          $('#fill-link').text(n);
      });

      $('#btn-add-client').on('click',function(e){
        if (clientForm.checkValidity()){
            $(this).html('<i class="fas fa-circle-notch fa-spin"></i> Adding...');
            $(this).prop('disabled',true);
            let form_data = new FormData(clientForm);
            let client_access_link = $('#client_access_link').text();
            form_data.append('client_access_link',client_access_link);
            $.ajax({
                url:base_url+'members/add_my_clients',
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
                    if(client_md!='')
                    {
                      $(client_md).modal('toggle');  
                    }
                    show_notification('success',' Added successfully');
                    clientForm.reset();
                    reload_client(res[2]);
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
           clientForm.reportValidity();
        }
      });

      $('#images-modal').on('show.bs.modal',function(e){
          let unique_id = e.relatedTarget.id;
          $.ajax({
            url:base_url+'members/get_car_images',
            type:'POST',
            data:{car_id:unique_id},
            success:function(msg)
            {
                $('#images-div').html(msg);
            }
          });
      });

      $('#post-ad-modal').on('show.bs.modal',function(e){
          let unique_id = e.relatedTarget.id;
          $.ajax({
            url:base_url+'members/get_car_information',
            type:'POST',
            data:{uid:unique_id},
            success:function(msg)
            {
                let res = $.parseJSON(msg);
                if(res[0]!='none')
                {
                  $('#make_id').val(res[0]);
                  $('#make_title').val(res[1]);
                  $('#model_id').val(res[2]);
                  $('#model_title').val(res[3]);
                  $('#year').val(res[4]);
                  $('#selling_price').val(res[5]);
                  $('#vin').val(res[6]);
                }

            }
          });
      });

      $('#browsee-files').on('click',function(e){
        $('#car_uploads').trigger('click');
        $('#ext-error-msg').html("");
      });
  });//End of ready function
  
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


  function fn_check_extension(file)
  {
    let validExtensions = ['jpg','jpeg','png','gif','bmp'];
      let ext  = file.name.split('.').pop().toLowerCase();
      if (validExtensions.indexOf(ext) == -1) {
          show_notification('warning',"Only Images Allowed : "+validExtensions.join(', '));
          return 'dont';
      }
      else
      {
        if(ext=='jpg' || ext=='jpeg' || ext=='png' || ext=='bmp' || ext=='gif')
        {
            var icon = '<img src="'+window.URL.createObjectURL(file)+'" class="avatar-sm">';
        }
        return icon;
      }
  }

  function reload_client(uid){
      $.ajax({
          url:base_url+'members/cms_get_clients_dd',
          type:'POST',
          data:{uid:uid},
          success:function(msg)
          {
             $('#sell_client').html(msg);
          }

      });
  }

  //This function initializes the content inside the filter modal
  function configFilter($this, colArray) {
      setTimeout(function () {
          var tableName = $this[0].id;
          var columns = $this.api().columns();
          $.each(colArray, function (i, arg) {
              $('#' + tableName + ' th:eq(' + arg + ')').append('<img src="http://www.icone-png.com/png/39/38556.png" style="width:10px;height:10px;" class="filterIcon" onclick="showFilter(event,\'' + tableName + '_' + arg + '\')" />');
          });

          var template = '<div class="modalFilter">' +
                           '<div class="modal-content" style="padding:10px;">' +
                           '{0}</div>' +
                           '<div class="modal-footer">' +
                               '<a href="#!" onclick="clearFilter(this, {1}, \'{2}\');"  class=" btn left waves-effect waves-light">Clear</a>' +
                               '<a href="#!" onclick="performFilter(this, {1}, \'{2}\');"  class=" btn right waves-effect waves-light">Ok</a>' +
                           '</div>' +
                       '</div>';
          $.each(colArray, function (index, value) {
              columns.every(function (i) {
                  if (value === i) {
                      var column = this, content = '<input type="text" class="form-control filterSearchText" onkeyup="filterValues(this)" /><br>';
                      var columnName = $(this.header()).text().replace(/\s+/g, "_");
                      var distinctArray = [];
                      column.data().each(function (d, j) {
                        
                          if (distinctArray.indexOf(d) == -1) {

                            // var myd =d.replace(/(<([^>]+)>)/ig,"");
                            // var id = tableName + "_" + columnName + "_" + j; // onchange="formatValues(this,' + value + ');
                            //   content += '<div><input type="checkbox" value="' + myd + '"  id="' + id + '"/> <label for="' + id + '"> ' + myd + '</label></div>';
                            //   distinctArray.push(d);
                          }
                      });
                      var newTemplate = $(template.replace('{0}', content).replace('{1}', value).replace('{1}', value).replace('{2}', tableName).replace('{2}', tableName));
                      $('body').append(newTemplate);
                      modalFilterArray[tableName + "_" + value] = newTemplate;
                      content = '';
                  }
              });
          });
      }, 50);
  }
  var modalFilterArray = {};
  //User to show the filter modal
  function showFilter(e, index) {
      $('.modalFilter').hide();
      $(modalFilterArray[index]).css({ left: 0, top: 0 });
      var th = $(e.target).parent();
      var pos = th.offset();
      console.log(th);
      $(modalFilterArray[index]).width(400);
      $(modalFilterArray[index]).css({ 'left': pos.left, 'top': pos.top });
      $(modalFilterArray[index]).show();
      $('#mask').show();
      e.stopPropagation();
  }

  //This function is to use the searchbox to filter the checkbox
  function filterValues(node) {
      var searchString = $(node).val().toUpperCase().trim();
      var rootNode = $(node).parent();
      if (searchString == '') {
          rootNode.find('div').show();
      } else {
          rootNode.find("div").hide();
          rootNode.find("div:contains('" + searchString + "')").show();
      }
  }

  //Execute the filter on the table for a given column
  function performFilter(node, i, tableId) {
      var rootNode = $(node).parent().parent();
      var searchString = '', counter = 0;

      rootNode.find('input:checkbox').each(function (index, checkbox) {
          if (checkbox.checked) {
              searchString += (counter == 0) ? checkbox.value : '|' + checkbox.value;
              counter++;
          }
      });
      $('#' + tableId).DataTable().column(i).search(
          searchString,
          true, false
      ).draw();
      rootNode.hide();
      $('#mask').hide();
  }

  //Removes the filter from the table for a given column
  function clearFilter(node, i, tableId) {
      var rootNode = $(node).parent().parent();
      rootNode.find(".filterSearchText").val('');
      rootNode.find('input:checkbox').each(function (index, checkbox) {
          checkbox.checked = false;
          $(checkbox).parent().show();
      });
      $('#' + tableId).DataTable().column(i).search(
          '',
          true, false
      ).draw();
      rootNode.hide();
      $('#mask').hide();
  }
