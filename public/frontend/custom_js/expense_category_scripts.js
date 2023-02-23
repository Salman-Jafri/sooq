  $(document).ready(function(){
      $('.ofcnav').removeClass('active');
      setTimeout(function(e){
        $('.ofc-expense-category').addClass('active');
      },500);
      /*Global*/
        let add_md ='#add-new-modal';
        let addForm=$('#add-form')[0];
        let edit_md ='#edit-modal';
        let editForm=$('#edit-form')[0];
        let dt     ='#dt';
      /*End Global*/

      $(dt).DataTable({
          "sAjaxSource": base_url+'members/show_expense_category',
          responsive:!0,
          "pageLength": 100,
          "order": [],
      });

      $('#btn-add').on('click',function(e){
        if (addForm.checkValidity()){
            $(this).html('<i class="fas fa-circle-notch fa-spin"></i> Adding...');
            $(this).prop('disabled',true);
            let form_data = new FormData(addForm);
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
                    if(add_md!='')
                    {
                      $(add_md).modal('toggle');  
                    }
                    if(dt!='')
                    {
                      $(dt).DataTable().ajax.reload();
                    }
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
          fill_edit_fields(unique_id,edit_md,'members/edit_expense_category');
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
                url:base_url+'members/update_expense_category',
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
        var myFormSubmission = base_url+'members/delete_expense_category';
        ajax_delete(unique_id,myFormSubmission,'#dt');
      });


   
  });//End of ready function