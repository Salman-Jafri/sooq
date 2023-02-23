  $(document).ready(function(){
      $('.ofcnav').removeClass('active');
      setTimeout(function(e){
        $('.ofc-expenses').addClass('active');
      },500);
      /*Global*/
        let fileList = [];
        let efileList= [];
        let add_md ='#add-new-modal';
        let addForm=$('#add-form')[0];
        let edit_md ='#edit-modal';
        let editForm=$('#edit-form')[0];
        let dt     ='#dt';
        let categoryForm=$('#add-form-category')[0];
        let category_md ='#add-new-category-modal';
      /*End Global*/

      $('#browse-files').on('click',function(e){
          $('#expense_uploads').trigger('click');
      });

      $('#expense_uploads').on('change',function(e){
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

      $(dt).DataTable({
          "sAjaxSource": base_url+'members/show_expenses',
          responsive:!0,
          "pageLength": 100,
          "order": [],
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
                          form_data.append('expense_uploads[]',file);
                      }
                  });
              });
            }
            else
            {
              $('#expense_uploads').val(null);
              fileList=[];
            }
            $.ajax({
                url:base_url+'members/add_expenses',
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
                    $('#expense_uploads').val(null);
                    fileList=[];
                    show_notification('success',' Added successfully');
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
          fill_edit_fields(unique_id,edit_md,'members/edit_expenses');
          $('.hid').val(unique_id);
      });

      $(edit_md).on('shown.bs.modal',function(e){
          let unique_id = e.relatedTarget.id;
          $.ajax({
            url:base_url+'members/get_expense_files',
            type:'POST',
            data:{expense_id:unique_id},
            success:function(msg)
            {
              $('#e-file-tbody').html(msg);
              let d=$('#e-imgs-div');
              d.scrollTop(d.prop("scrollHeight"));
            }
          });
      });

      $('#e-browse-files').on('click',function(e){
        $('#e_expense_uploads').trigger('click');
      });

      $('#e_expense_uploads').on('change',function(e){
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
            url:base_url+'members/mark_expense_as_delete',
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
                        form_data.append('expense_uploads[]',file);
                      }
                  });
              });
            }
            else
            {
              $('#e_expense_uploads').val(null);
              efileList=[];
            }
            $.ajax({
                url:base_url+'members/update_expenses',
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
                    $('#e_expense_uploads').val(null);
                    efileList=[];
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
        var myFormSubmission = base_url+'members/delete_expenses';
        ajax_delete(unique_id,myFormSubmission,'#dt');
      });

      $('#btn-add-new-category').on('click',function(e){
        if (categoryForm.checkValidity()){
            $(this).html('<i class="fas fa-circle-notch fa-spin"></i> Adding...');
            $(this).prop('disabled',true);
            let form_data = new FormData(categoryForm);
            $.ajax({
                url:base_url+'members/add_expense_category',
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
                    if(category_md!='')
                    {
                      $(category_md).modal('toggle');  
                    }
                    show_notification('success',' Added successfully');
                    categoryForm.reset();
                    reload_category(res[2]);
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
           categoryForm.reportValidity();
        }
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
                  "sAjaxSource": base_url+'members/show_expenses/'+start_date+'/'+end_date,
                  responsive:!0,
                  "pageLength": 100,
                  "order": [],
                  dom: 'Bfrtip',
                  buttons: [
                      'copy', 'csv', 'excel', 'pdf', 'print'
                  ]
              });
              $.ajax({
                url:base_url+'members/reload_profit',
                type:'POST',
                data:{start_date:start_date,end_date:end_date},
                success:function(msg)
                {
                    let res = $.parseJSON(msg);
                    $('#total-profit').text(res[0]);
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
  });//End of ready function
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
  function reload_category(uid){
      $.ajax({
          url:base_url+'members/cms_get_expense_category_dd',
          type:'POST',
          data:{uid:uid},
          success:function(msg)
          {
             $('#category').html(msg);
             $('#e_category').html(msg);
          }

      });
  }