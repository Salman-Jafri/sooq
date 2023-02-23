$(document).ready(function() {
    $('.ofcnav').removeClass('active');
    setTimeout(function(e) {
        $('.ofc-users').addClass('active');
    }, 500);
    /*Global*/
    let add_md = '#add-new-modal';
    let addForm = $('#add-form')[0];
    let addForm2 = $('#add-form2')[0];
    let add_md2 = '#add-prefix-new-modal';
    let edit_md = '#edit-modal';
    let editForm = $('#edit-form')[0];
    let dt = '#dt';
    /*End Global*/

    $(dt).DataTable({
        "sAjaxSource": base_url + 'members/show_my_users',
        responsive: !0,
        "pageLength": 100,
        "order": [],
    });

    $('#btn-add-user').on('click', function(e) {
        if (addForm.checkValidity()) {
            $(this).html('<i class="fas fa-circle-notch fa-spin"></i> Adding...');
            $(this).prop('disabled', true);
            let form_data = new FormData(addForm);
            var permission = {};
            $('.pchk').each(function(e) {
                if ($(this).is(':checked')) {
                    permission[$(this).val()] = 1;
                } else {
                    permission[$(this).val()] = 0;
                }
            });
            form_data.append('permission', JSON.stringify(permission));
            $.ajax({
                url: base_url + 'members/add_my_users',
                type: 'POST',
                processData: false,
                contentType: false,
                data: form_data,
                context: this,
                success: function(msg) {
                    let res = $.parseJSON(msg);
                    // $('#my_csrf').val(res[0]);
                    if (res[1] == 'success') {
                        if (add_md != '') {
                            $(add_md).modal('toggle');
                        }
                        if (dt != '') {
                            $(dt).DataTable().ajax.reload();
                        }
                        show_notification('success', ' Added successfully');
                        addForm.reset();
                    } else if (res[1] == 'error') {
                        show_notification('error', ' Unexpected Error Try again');

                    } else {
                        show_notification('warning', res[1]);
                    }
                    $(this).html('Add');
                    $(this).prop('disabled', false);
                }
            });
        } else {
            addForm.reportValidity();
        }
    });

    $('#edit-modal').on('show.bs.modal', function(e) {
        var uid = e.relatedTarget.id;

        $('#e_uid').val(uid);
        $('.epchk').prop('checked', false);
        var form_data = new FormData();
        form_data.append('uid', uid);
        $.ajax({
            url: base_url + 'members/edit_my_users',
            type: 'POST',
            processData: false,
            contentType: false,
            data: form_data,
            success: function(msg) {
                var res = $.parseJSON(msg);
                $('#e_username').val(res[0]);
                $('#e_userpass').val(res[1]);
                $('#e_prefix').val(res[2]);
                if (res[3] == 1) {
                    $('#per_mycars').prop('checked', true);
                }
                if (res[4] == 1) {
                    $('#per_expenses').prop('checked', true);
                }
                if (res[5] == 1) {
                    $('#per_expensecategory').prop('checked', true);
                }
                if (res[6] == 1) {
                    $('#per_myclient').prop('checked', true);
                }
                if (res[7] == 1) {
                    $('#per_profitreport').prop('checked', true);
                }
                if (res[8] == 1) {
                    $('#per_invoicesetting').prop('checked', true);
                }
                if (res[9] == 1) {
                    $('#per_users').prop('checked', true);
                }

            }
        });
    });

    $('#btn-update').on('click', function(e) {
        if (editForm.checkValidity()) {
            $(this).html('<i class="fas fa-circle-notch fa-spin"></i> Adding...');
            $(this).prop('disabled', true);
            let form_data = new FormData(editForm);
            let unique_id = $('#e_uid').val();

            var permission = {};
            $('.epchk').each(function(e) {
                if ($(this).is(':checked')) {
                    permission[$(this).val()] = 1;
                } else {
                    permission[$(this).val()] = 0;
                }
            });
            form_data.append('unique_id', unique_id);
            form_data.append('permission', JSON.stringify(permission));
            $.ajax({
                url: base_url + 'members/update_my_users',
                type: 'POST',
                processData: false,
                contentType: false,
                data: form_data,
                context: this,
                success: function(msg) {
                    let res = $.parseJSON(msg);
                    // $('#my_csrf').val(res[0]);
                    if (res[1] == 'success') {
                        if (edit_md != '') {
                            $(edit_md).modal('toggle');
                        }
                        if (dt != '') {
                            $(dt).DataTable().ajax.reload();
                        }
                        show_notification('success', ' Updated successfully');
                    } else if (res[1] == 'error') {
                        show_notification('error', ' Unexpected Error Try again');

                    } else {
                        show_notification('warning', res[1]);
                    }
                    $(this).html('Save Changes');
                    $(this).prop('disabled', false);
                }
            });
        } else {
            editForm.reportValidity();
        }
    });


    $(document).on('click', '#btn-delete', function(e) {
        var unique_id = $('#delete-id').val();
        var myFormSubmission = base_url + 'members/delete_users';
        ajax_delete(unique_id, myFormSubmission, '#dt');
    });


    // prefix
    $('#btn-add-prefix-user').on('click', function(e) {
        if (addForm2.checkValidity()) {
            $(this).html('<i class="fas fa-circle-notch fa-spin"></i> Adding...');
            $(this).prop('disabled', true);
            let form_data = new FormData(addForm2);
            $.ajax({
                url: base_url + 'members/add_user_prefix',
                type: 'POST',
                processData: false,
                contentType: false,
                data: form_data,
                context: this,
                success: function(msg) {
                    let res = $.parseJSON(msg);
                    if (res[1] == 'success') {
                        if (add_md2 != '') {
                            $(add_md2).modal('toggle');
                            $('#add-prefix-new-modal').hide();
                        }
                        if (dt != '') {
                            $(dt).DataTable().ajax.reload();
                        }
                        show_notification('success', ' Added successfully');
                        addForm2.reset();
                    } else if (res[1] == 'error') {
                        show_notification('error', ' Unexpected Error Try again');

                    } else {
                        show_notification('warning', res[1]);
                    }
                    // $('.relate-animate').prop('disabled', false);
                    // $('.prefix').remove();

                    get_member_name();
                    $(this).html('Add');
                    $(this).prop('disabled', false);
                }
            });
        } else {
            addForm2.reportValidity();
        }
    });


get_member_name();


}); //End of ready function


function get_member_name()
{
    var member_id=null;
    $.ajax({
       url: base_url + 'members/get_member',
      type:'POST',
      processData:false,
      contentType: false,
      data:{member_id:member_id},
      success:function(msg)
      {  let res = $.parseJSON(msg);
        
        if(res==null)
        {
          $('.prefix').show();
          $('.relate-animate').prop('disabled',true);
          $('#prefix_name').text('');         
        }else if(res!='null'){
            
          $('.prefix').hide();
          $('.relate-animate').prop('disabled',false);
          $('.prefix_name').text('@'+res);   
        }
     }
    });
}