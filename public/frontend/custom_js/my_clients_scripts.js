  $(document).ready(function(){
      $('.ofcnav').removeClass('active');
      setTimeout(function(e){
        $('.ofc-clients').addClass('active');
      },500);
      /*Global*/
        let add_md ='#add-new-modal';
        let addForm=$('#add-form')[0];
        let edit_md ='#edit-modal';
        let editForm=$('#edit-form')[0];
        let dt     ='#dt';
      /*End Global*/

      $(dt).DataTable({
          "sAjaxSource": base_url+'members/show_my_clients',
          responsive:!0,
          "pageLength": 100,
          "order": [],
      });

      $('#btn-add').on('click',function(e){
        if (addForm.checkValidity()){
            $(this).html('<i class="fas fa-circle-notch fa-spin"></i> Adding...');
            $(this).prop('disabled',true);
            let form_data = new FormData(addForm);
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
      
      $("#client_username").keyup(function() {
          let n = $(this).val();
          if ( n.match("^[a-zA-Z0-9]*$") == null ) {
              $(this).val(n.slice(0,-1));
          }
          $('#fill-link').text(n);
      });
      
      $(edit_md).on('show.bs.modal',function(e){
          var unique_id = e.relatedTarget.id;
          fill_edit_fields(unique_id,edit_md,'members/edit_my_clients');
          $('.hid').val(unique_id);
      });

      $(edit_md).on('shown.bs.modal',function(e){
          var unique_id = e.relatedTarget.id;
          $.ajax({
            url:base_url+'members/get_access_link',
            type:'POST',
            data:{unique_id:unique_id},
            success:function(msg)
            {
              $('#e-fill-link').text(msg);
            }
          });
      });

      $("#e_client_username").keyup(function() {
          let n = $(this).val();
          if ( n.match("^[a-zA-Z0-9]*$") == null ) {
              $(this).val(n.slice(0,-1));
          }
          $('#e-fill-link').text(n);
      });

      $('#btn-update').on('click',function(e){
        if (editForm.checkValidity()){
            $(this).html('<i class="fas fa-circle-notch fa-spin"></i> Adding...');
            $(this).prop('disabled',true);
            let form_data = new FormData(editForm);
            let unique_id = $('.hid').val();
            let client_access_link = $('#e_client_access_link').text();
            form_data.append('unique_id',unique_id);
            form_data.append('client_access_link',client_access_link);
            $.ajax({
                url:base_url+'members/update_my_clients',
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
        var myFormSubmission = base_url+'members/delete_my_clients';
        ajax_delete(unique_id,myFormSubmission,'#dt');
      });

      $('#cars-list-modal').on('show.bs.modal',function(e){
          let uid = e.relatedTarget.id;
          $('#dt-cars').DataTable().destroy();
          $('#dt-cars').DataTable({
            "sAjaxSource": base_url+'members/show_clients_cars/'+uid,
            responsive:!0,
            "pageLength": 100,
            "order": [],
          });
      });


   
  });//End of ready function